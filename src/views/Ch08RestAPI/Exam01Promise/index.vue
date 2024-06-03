<template>
    <div class="card">
        <div class="card-header">Exam01Promise</div>
        <div class="card-body">
            <div>
                <button class="btn btn-info btn-sm me-2" @click="handleBtn1">비동기 작업1</button>
                <button class="btn btn-info btn-sm me-2" @click="handleBtn2">비동기 작업2</button>
            </div>
            <div class="mt-3" v-if="loading">
                <div class="spinner-border text-warning" role="status">
                <span class="visually-hidden">Loading...</span>
                </div>  
            </div>

            <div class="mt-3" v-if="!loading">{{ result }}</div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";

// 상태 정의
const loading = ref(false);
const result = ref("결과가 나오는 부분"); // 비동기 작업에 대한 결과

function asyncWork() {
    //3초후에 응답이 오는 Promise 생성, 그 3초동안 사용자는 다른걸 할 수 있음.
    const promise = new Promise((resolve, reject) => {
        //3초 후에, 첫번째 매개값인 람다식이 실행
        setTimeout(() => {
            // 성공적으로 처리 했을 때
            resolve("성공 응답 내용");

            // 실패 처리할 경우
            //reject("실패 응답 내용");
        }, 3000);
    });
    return promise;
}

function handleBtn1() {
    loading.value = true;
    console.log("handleBtn1() 시작");
    asyncWork() // asyncWork()은 Promise를 리턴하고 이게 Promise라면 아래의 메소드들을 호출 할 수 있다.
        .then((data) => {
            console.log("성공시 전달된 데이터: "+ data);
            result.value = data;
        }) // 성공시 resolve 실행
        .catch((error) => {
            console.log("실패시 전달된 데이터: " + error);
            result.value = error;
        }) // 실패시 reject 실헹
        .finally(() => {
            console.log("마무리 작업 실행");
            loading.value = false;
        }); // 성공이든 실패든 실행함
    console.log("handleBtn1() 끝");
    
}

async function handleBtn2() {
    loading.value = true;
    try {
        const data = await asyncWork();
        console.log("성공시 전달된 데이터:", data);
        result.value = data;
    } catch(error) {
        console.log("실패시 전달된 데이터:", error);
        result.value = error;
    }
    console.log("마무리 작업 실행");
    loading.value = false;
}

// async function useAsyncWork(){
//     loading.value=true;

//     try {
//         const data = await asyncWork(); // promist 실행이 끝날 때 까지 기다리고 result에 반환(비동기 함수 안에서 asynWork비동기 함수는 동기가 된다.)
//         // 함수안에 await가 들어가면 그 함수는 반드시 비동기의 의미인 async를 붙여야 한다. 반대의 경우 상관 없지만 promise가 아님
//         console.log("성공시 전달된 데이터: "+data);
//     } catch (error) {
//         console.log("실패시 전달된 데이터: " + error);
//     }
//     console.log("마무리 작업 실행");
//     loading.value=false;

// }
</script>

<style scoped>
</style>