import { createStore } from 'vuex'
import counter from './counter';

// Store 객체를 생성
const store =  createStore({
  
  // 루트 상태를 정의
  state: {
    userId: "white"
  },

  // 루트 상태를 읽는 메소드
  getters: {
    getUserId(state, getters, rootState, rootGetters){
      return state.userId;
    }
  },

  // 루트 상태를 변경(Setter)하는 메소드 정의(동기 방식)
  mutations: {
    setUserId(state, payload){
      state.userId = payload;
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
          resolve ({result:"success", userId:"summer"});
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
    }
  },

  // 루트 하위의 상태를 정의
  modules: {
    counter : counter, // 모듈이름 : import해서 가져온 이름
    
  }
});

// Store 객체를 내보내기
export default store;
