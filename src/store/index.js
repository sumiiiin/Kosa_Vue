import { createStore } from 'vuex'
import counter from './counter';
import axiosConfig from '../apis/axiosConfig'
import { Axios } from 'axios';

// Store 객체를 생성
const store =  createStore({
  
  // 루트 상태를 정의
  state: {
    userId: "",
    accessToken: ""
  },

  //루트 상태를 읽는 메소드 정의
  getters: {
    getUserId(state, getters, rootState, rootGetters) {
      return state.userId;
    },

    getAccessToken(state, getters, rootState, rootGetters) {
      return state.accessToken;
    }
  },

  //루트 상태를 변경하는 메소드 정의(동기 방식)
  mutations: {
    setUserId(state, payload) {
      state.userId = payload;
    },

    setAccessToken(state, payload) {
      state.accessToken = payload;
    }
  },

  // 루트 상태를 변경하는 메소드 정의(비동기 방식) 주로 서버 통신코드를 사용할 때 사용
  actions: {
    loginAction(context, payload){ // 아이디가 비밀번호가 payload에 담겨와? context는 store객체로 action을 사용할 때 가장 첫번째로 오는 매개변수이다.
      new Promise((resolve, reject) => { // 나중에 axios.post 이런거 사용하면 promise 사용안하고 자동으로 호출? 함
        // 서버와 통신 작업
        // ...n초 소요 (비동기가 효율적)
        if(true){
          // 로그인 성공 .then실행
          resolve({result:"success", userId:payload.userId});
        } else {
          // 로그인 실패 .catch실행
          reject({result:"fail", reason:"password id wrong"}) 
        }
      
      })

      // 비동기 작업이 끝나고
      .then((data) => {
        // 작업이 성공적으로 처리가 됐을 경우
        // 상태 변경 작성
        console.log("로그인 성공");
        context.commit("setUserId", data.userId); // mutation이름과 변경할 데이터가 매개변수로 들어간다.
      })
      .catch((error) => {
        // 작업이 실패 처리될 경우
        console.log("로그인 실패");
      })
    },
    // 인증 정보를 읽어서 상태값으로 재setting한다., 브라우저가 재 실행 될 때 인증 정보를 전역상태로 복구 
    loadAuth(context, payload) {
      //userId 전역 상태 설정
      context.commit("setUserId", localStorage.getItem("userId") || "");
      //accessToken 전역 상태 설정
      const accessToken = localStorage.getItem("accessToken") || "";
      context.commit("setAccessToken", accessToken);
      //Axios 요청 공통 헤더에 인증 정보 추가
      if(accessToken !== "") {
        axiosConfig.addAuthHeader(accessToken);
      }
    },
    // 로그인 성공했을 때 인증정보를 전역 상태 및 로컬 파일(로컬 스토리지?)에 저장
    saveAuth(context, payload){
      // payload ={
      //   userId: "user",
      //   accessToken: "zzz.wwewe.fff"
      // } payload는 이런 형태이다.
      // 전역 상태 값 변경 
      context.commit("setUserId", payload.userId);
      context.commit("setAccessToken", payload.accessToken);
      // 로컬 파일에 저장
      localStorage.setItem("userId",payload.userId);
      localStorage.setItem("accessToken", payload.accessToken);
      // Axios 요청 공통 헤더에 인증 정보 추가
      axiosConfig.addAuthHeader(payload.accessToken);
      
    },
    // 로그아웃 할 때 인증 정보를 모두 삭제
    deleteAuth(context, payload){
      // 전역 상태 값 (변경)삭제
      context.commit("setUserId", "");
      context.commit("setAccessToken", "");
      // 로컬 파일에서 삭제
      localStorage.removeItem("userId");
      localStorage.removeItem("accessToken");
      // Axios 요청 공통 헤더에 인증 정보 삭제
      axiosConfig.removeAuthHeader();
    }
  },

  // 루트 하위의 상태를 정의
  modules: {
    counter : counter, // 모듈이름 : import해서 가져온 이름
    
  }
});

// Store 객체를 내보내기
export default store;
