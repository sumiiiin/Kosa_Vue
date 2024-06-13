import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import router from './router/index.js'

//Bootstrap 관련 Java Script와 css 로딩
import "bootstrap"; //js
import "bootstrap/dist/css/bootstrap.min.css"; //css
import store from "./store";
import axiosConfig from "./apis/axiosConfig"; // 여기에 import하는것 만으로도 처음 run 돌릴 때 axiosConfig가 자동으로 실행되게 만듦

// 브라우저 재 실행 시 인증 정보를 가져오기
store.dispatch("loadAuth");

// App 컴포넌트를 <div id="app"></div>에 내용으로 추가
createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
