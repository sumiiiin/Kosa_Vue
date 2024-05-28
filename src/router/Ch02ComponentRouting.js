// Chunk 파일의 이름이 같으니 
const routes = [
  {
    path: "/Ch02ComponentRouting/Exam01View",
    name: "Exam01View",
    component: () =>
        import(
          /* webpackChunkName: "Ch02ComponentRouting" */ "@/views/Ch02ComponentRouting/Exam01View"
        ),
  },
  {
    path: "/Ch02ComponentRouting/Exam02View",
    component: () =>
      import(
        /* webpackChunkName: "exam02view" */ "@/views/Ch02ComponentRouting/Exam02View"
      ),
  },
  {
    path: "/Ch02ComponentRouting/Exam03View",
    component: () =>
        import(
          /* webpackChunkName: "Ch02ComponentRouting" */ "@/views/Ch02ComponentRouting/Exam03View"
        ),
  },
  {
    path: "/Ch02ComponentRouting/Exam04View",
    component: () =>
        import(
          /* webpackChunkName: "Ch02ComponentRouting" */ "@/views/Ch02ComponentRouting/Exam04View"
        ),
  },
  {
    path: "/Ch02ComponentRouting/Exam05View",
    component: () =>
        import(
          /* webpackChunkName: "Ch02ComponentRouting" */ "@/views/Ch02ComponentRouting/Exam05View"
        ),
    redirect: "/Ch02ComponentRouting/Exam05View/UIComponentA",
    children: [
      {
        path: "UIComponentA",
        component: () =>
            import(
              /* webpackChunkName: "Ch02ComponentRouting" */ "@/components/Ch02ComponentRouting/UIComponentA.vue"
            ),
      },
      {
        path: "UIComponentB",
        component: import(
            /* webpackChunkName: "Ch02ComponentRouting" */ "@/components/Ch02ComponentRouting/UIComponentB.vue"
          ),
      },
      {
        path: "UIComponentC",
        component: import(
            /* webpackChunkName: "Ch02ComponentRouting" */ "@/components/Ch02ComponentRouting/UIComponentC.vue"
          ),
      },
    ],
  },
  {
    path: "/Ch02ComponentRouting/Exam06View",
    component: () =>
        import(
          /* webpackChunkName: "Ch02ComponentRouting" */ "@/views/Ch02ComponentRouting/Exam06View"
        ),
  },
  {
    // 뒤에 물음표가 없으면 꼭 넣어야 하는 값이 되고 물음표가 있으면 값이 있어도 되고 없어도 된다.
    path: "/Ch02ComponentRouting/Exam07View/:kind?/:color?",
    component: () =>
        import(
          /* webpackChunkName: "Ch02ComponentRouting" */ "@/views/Ch02ComponentRouting/Exam07View"
        ),
  },
];

// 라우트 내보내기
export default routes;
