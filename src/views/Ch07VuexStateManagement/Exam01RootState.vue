<template>
    <div class="card border-5 border-success">
        <div class="card-header">Exam01RootState</div>
        <div class="card-body">
            <h6>[루트 상태 읽기]</h6>
            <p>userId 단방향 바인딩: {{  $store.state.userId }}</p>
            <p>userId 단방향 바인딩: {{  $store.getters.getUserId }}</p><!-- 함수 호출코드getUserId()를 사용하면 에러남 -->
            <p>userId 단방향 바인딩: {{  getUserId() }}</p><!-- 함수 호출 해도 되네 내부 정의한건 되는건가? -->
            <p>userId 단방향 바인딩: {{  computedUserId }}</p>
            <hr/>
            <p>userId 양방향 바인딩: <input type="text" v-model="$store.state.userId"></p>
            <hr/>
            <h6>[루트 상태 변경]</h6>
            <button class="btn btn-info btn-sm me-2" @click="changeByMutation">userId 변경(Mutation 동기 방식)</button>
            <button class="btn btn-danger btn-sm me-2" @click="changeByAction">userId 변경(Action 비동기 방식)</button>
        </div>
    </div>
</template>

<script setup>
import { computed } from "vue";
import {useStore} from "vuex";

// 스토어 객체 얻기
const store = useStore();

function getUserId(){
    // return store.state.userId;
    return store.getters.getUserId;
}

const computedUserId = computed(() => {
    // return store.state.userId; // 참조값을 사용해도 되고
    return store.getters.getUserId; // getter호출해도 된다.
});

// 컴포넌트 마다 통신하는게 다르면 컴포넌트 안에서 상태를 변경하고
function changeByMutation(){
    new Promise((resolve, reject) => { // 나중에 axios.post 이런거 사용하면 promise 사용안하고 자동으로 호출? 함
        // 서버와 통신 작업
        // ...n초 소요 (비동기가 효율적)
        if(true){
          // 로그인 성공 .then실행
          resolve ({result:"success", userId:"spring"});
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
        store.commit("setUserId", data.userId);
      })
      .catch((error) => {
        // 작업이 실패 처리될 경우
        console.log("로그인 실패");
      })
}

// 컴포넌트 마다 코드가 같다면 store에 정의하고 dispatch를 사용하여 간결하게 작성하는게 좋다.
function changeByAction(){
    store.dispatch("loginAction", {userId:"summer"}); //store에 action에 정의 된 loginAction함수의 payload매개변수가 {userId:"summer"}가 된다.
}
</script>

<style scoped>

</style>
