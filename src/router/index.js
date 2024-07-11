import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Ch02ComponentRouting from '@/router/Ch02ComponentRouting';
import Ch03DataBinding from '@/router/Ch03DataBinding';
import Ch04EventHandlingWatch from '@/router/Ch04EventHandlingWatch';
import Ch05DataDelivery from "./Ch05DataDelivery";
import Ch06LifecycleHook from "./Ch06LifecycleHook"
import Ch07VuexStateManagement from "./Ch07VuexStateManagement"
import Ch08RestAPI from "./Ch08RestAPI"

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...Ch02ComponentRouting,
  ...Ch03DataBinding,
  ...Ch04EventHandlingWatch, // 배열의 항목을 넣겠다.
  ...Ch05DataDelivery,
  ...Ch06LifecycleHook,
  ...Ch07VuexStateManagement,
  ...Ch08RestAPI
]
// 구조분해하여 다른 라우터 파일 추가

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  //  historyAPI를 사용하여 라우터의 히스토리를 사용하여 URL을 관리할 수 있다.
  // 환경 변수로 설정된 기본 URL을 사용하여 라우터를 초기화
  // SPA가 서브 디렉토리에서 호스팅될 경우 초기 경로에서 부터 시작.

  routes // 라우트 구성을 나타내고
})

export default router
