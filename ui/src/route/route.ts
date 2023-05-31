import { RouteRecordRaw } from 'vue-router';

export const routeList: RouteRecordRaw[] = [
  {
    path: '/report2',
    component: () => import('@/view/report/index2.vue'),
  },
  {
    path: '/report',
    component: () => import('@/view/report/index.vue'),
  },
  {
    path: '/patient',
    component: () => import('@/view/patient/index.vue'),
  },
  {
    path: '/setting',
    component: () => import('@/view/setting/index.vue'),
  },
  {
    path: '/home',
    component: () => import('@/view/home/index.vue'),
  },
  {
    path: '/measure',
    component: () => import('@/view/measure/index.vue'),
  },
  {
    path: '',
    redirect: '/home',
  },
];
