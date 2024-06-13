<template>
    <div class="card border-5 border-success">
        <div class="card-header">Exam03Login</div>
        <div class="card-body">
            <!-- 전역상태를 이용하여 요청헤더에 userId가 없으면 dom에 추가하여 보이기-->
            <div v-if="$store.state.userId === ''"><form @submit.prevent="handleLogin">
                <!-- @submit.prevent 바로 서버로 데이터가 들어가는 것을 막음 (ajax로 통신해야 하기 때문?) -->
                <!-- 유효성 검사 후에 수동으로 서버와 통신하는 코드를 함수에 작성해야 함 -->
                <div class="input-group mb-2">
                    <span class="input-group-text">아이디</span>
                    <input type="text" class="form-control" v-model="member.mid">
                </div>

                <div class="input-group mb-2">
                    <span class="input-group-text">비밀번호</span>
                    <input type="password" class="form-control" v-model="member.mpassword">
                </div>

                <div>
                    <input type="submit" value="로그인" class="btn btn-danger btn-sm me-2"/>
                    <!-- vue에서 리셋 버튼을 양식을 초기화 하지 않고 값을 모두 지워버림 -->
                    <!-- <input type="reset" value="재작성" class="btn btn-info btn-sm"/> -->
                    <button type="button" class="btn btn-info btn-sm" @click="handleReset">재작성</button>
                </div>
            </form>></div>
            <div v-if="$store.state.userId !== ''">
                <button class="btn btn-sm btn-info" @click="handleLogout">로그아웃</button>
            </div>
        </div>
    </div>
</template>

<script setup>
import {ref} from "vue";
import memberAPI from "@/apis/memberAPI";
import { useStore} from "vuex";

// store 객체 얻기
const store = useStore();

// 상태 초기화
const member = ref({
    mid:"",
    mpassword:""
});

//로그인 버튼 클릭시 실행
async function handleLogin() {
    try {
        const data = JSON.parse(JSON.stringify(member.value));
        const response = await memberAPI.login(data);
        if(response.data.result === "success") {
            const payload = {
                userId: response.data.mid,
                accessToken: response.data.accessToken
            };
            store.dispatch("saveAuth", payload);
        }
    } catch(error) {
        console.log(error);
    }
}

// 재작성 버튼 클릭 시 실행
function handleReset(){
    member.value.mid="";
    member.value.mpassword="";
}
// 로그아웃 버튼 클릭 시 실행
function handleLogout(){
    store.dispatch("deleteAuth");
}
</script>

<style scoped>

</style>
