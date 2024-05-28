<template>
    <div class="card">
        <div class="card-header">Exam01EventHandling</div>
        <div class="card-body">
            <div class="mb-3">
                <h6>[이벤트 처리]</h6>
                <button class="btn btn-danger btn-sm me-2" @click="handleBtn1">버튼1</button><!-- 함수 참조 -->
                <button class="btn btn-info btn-sm me-2" @click="handleBtn2('vue is good', $event)">버튼2</button><!-- 함수 호출, $event를 넣으면 이벤트 객체를 사용할 수 있음 -->
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <input class="form-control" type="text" name="userID" :value="userID" @keyup="handleInput($event)"/>
                <!-- v-model이 아니기 때문에 :value는 단방향이다. 사용자가 입력한 값이 자동으로 들어가지 않음 -->
            </div>

            <div class="input-group mb-3">
                <span class="input-group-text">아이디</span>
                <input class="form-control" type="text" name="userID" v-model="userID"/>
                <!-- v-model이 아니기 때문에 :value는 단방향이다. 사용자가 입력한 값이 자동으로 들어가지 않음 -->
            </div>

            <div>입력 내용: {{ userID }}</div><!-- 표현식 사용 -->
            <hr/>
            <div>
                <h6>[이벤트 수식어 사용]</h6>
                <a href="https://vuejs.org" @click.prevent="handleLink">링크로 자바스크립트 실행</a>

                <form class="my-3" action="https://vuejs.org/guide/introduction.html" @submit.prevent="handleForm">
                    <div class="input-group mb-3">
                        <span class="input-group-text">이메일</span>
                        <input type="email" class="form-control" v-model="userEmail">
                    </div>
                    <div>입력내용: {{ userEmail }}</div>
                    <input type="submit" value="제출" class="btn btn-success btn-sm mt-2" />
                </form>
            </div>
        </div>

    </div>
</template>

<script setup>
import { ref } from 'vue';

function handleBtn1(){
    console.log("handleBtn1() 실행");
}

function handleBtn2(arg, event){
    console.log("handleBtn2() 실행");
    console.log("arg: " + arg);
    console.log("event.target: ", event.target);
}

let userID = ref(""); // 사용자가 입력한 값이 때 마다 userID 상태 변수에 저장이 된다.

function handleInput(event){
    console.log("event.target.name: ", event.target.name);
    console.log("event.target.value: ", event.target.value);
    userID.value = event.target.value;
}

function handleLink(){
    console.log("handleLink() 실행");
}

let userEmail = ref("");

function handleForm(){
    console.log(userEmail.value);

}
</script>

<style scoped>
</style>
