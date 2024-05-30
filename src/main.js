import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
//import router from './router/index.js'

//Bootstrap 관련 Java Script와 css 로딩
import "bootstrap"; //js
import "bootstrap/dist/css/bootstrap.min.css"; //css
import store from "./store";

// App 컴포넌트를 <div id="app"></div>에 내용으로 추가
createApp(App)
    .use(store)
    .use(router)
    .mount("#app");
