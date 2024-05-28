import { createRouter, createWebHistory } from 'vue-router';
import HomeView from '../views/HomeView.vue';
import Ch02ComponentRouting from '@/router/Ch02ComponentRouting';
import Ch03DataBinding from '@/router/Ch03DataBinding';
import Ch04EventHandlingWatch from '@/router/Ch04EventHandlingWatch';
import Ch05DataDelivery from "./Ch05DataDelivery";


const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  ...Ch02ComponentRouting,
  ...Ch03DataBinding,
  ...Ch04EventHandlingWatch, // 배열의 항목을 넣겠다.
  ...Ch05DataDelivery
]
// 구조분해하여 다른 라우터 파일 추가


const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
