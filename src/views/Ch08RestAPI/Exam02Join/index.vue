<template>
    <div class="card border-5 border-success">
        <div class="card-header">Exam02Join</div>
        <div class="card-body">
            <form @submit.prevent="handleSubmit">
                <!-- @submit.prevent 바로 서버로 데이터가 들어가는 것을 막음 (ajax로 통신해야 하기 때문?) -->
                <!-- 유효성 검사 후에 수동으로 서버와 통신하는 코드를 함수에 작성해야 함 -->
                <div class="input-group mb-2">
                    <span class="input-group-text">아이디</span>
                    <input type="text" class="form-control" v-model="member.mid">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">이름</span>
                    <input type="text" class="form-control" v-model="member.mname">
                </div>
                    
                <div class="input-group mb-2">
                    <span class="input-group-text">비밀번호</span>
                    <input type="password" class="form-control" v-model="member.mpassword">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">이메일</span>
                    <input type="email" class="form-control" v-model="member.memail">
                </div>

                <div>
                    <input type="submit" value="가입" class="btn btn-danger btn-sm me-2"/>
                    <!-- vue에서 리셋 버튼을 양식을 초기화 하지 않고 값을 모두 지워버림 -->
                    <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
            </form>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue"; // 상태 사용하기 위해 사용
import memberAPI from "@/apis/memberAPI"; // 서버와 통신하기 위해 사용
import { useRouter } from "vue-router"; // 페이지 이동 할 때 사용

// 라우터 객체 얻기
const router = useRouter();

// member 상태 값 초기화 -> 안에 속성 초기화 안해도 잘 들어가는거 확인 그냥 빈 객체만 있어도 된다.
const member = ref({
    mid: "",
    mname: "",
    mpassword: "",
    memail: ""
});

// 제출 처리 -> 
async function handleSubmit() {
    try {
        // 유효성 검사 생략
        
        //Axios를 이용해서 Back-End로 회원 가입 요청
        const data = JSON.parse(JSON.stringify(member.value));// 상태 객체 말고 자바스크립트 객체로 만들어서 사용해야 함
        const response = await memberAPI.join(data); // Promise객체가 반환되며 비동기이다 동기로 사용하고 싶으면 await을 사용한다.
        console.log(response.data); // 데이터만 추출
        //홈 페이지로 이동
        router.push("/");
        //이전 페이지로 이동
        //router.back();
    } catch(error) {
        console.log(error);
    }
}

// 리셋
function handleReset(){
    member.value.mid="";
    member.value.memail="";
    member.value.mname="";
    member.value.mpassword="";
}
</script>

<style scoped>

</style>
