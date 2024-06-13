<template>
    <nav class="navbar justify-content-between bg-dark text-white">
        <div class="me-2">
            <img src="@/assets/logo.png" width="30" height="30" class="ms-2"/>
            <span class="ms-2 text-white">Vue.js</span>
        </div>
        
        <div class="me-2"  v-if="$store.state.userId === ''">
            <div>
                <router-link class="btn btn-success btn-sm" to="/Ch08RestAPI/Exam03Login">로그인</router-link>
            </div>  
        </div>
        <div class="me-2" v-else>
            <div >
                <span>User ID: {{  $store.state.userId }}</span>
                <button class="btn btn-success btn-sm ms-2" @click="handleLogout">로그아웃</button>
            </div>
        </div>
    </nav>
</template>
<!-- setup으로 하면 options방식이 아닌 composition 방식 -->
<script setup>
import { useRouter } from 'vue-router';
import { useStore } from 'vuex';

const store = useStore();
const router = useRouter();

function handleLogout(){
    store.dispatch("deleteAuth");
    router.push('/Ch08RestAPI/Exam03Login');
}
</script>

<style scoped>

</style>
