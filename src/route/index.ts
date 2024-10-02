import { createWebHashHistory, createRouter } from 'vue-router';

import TaoBao from '@/page/taoBao/taoBao.vue';
import TaoBaoBlind from '@/page/taoBao/taoBaoBlind.vue';
import JunBlind from '@/page/jun/junBlind.vue';
import Jun from '@/page/jun/jun.vue';
import FlyLowBlind from '@/page/fly/lowBlind.vue';
import FlyHighBlind from '@/page/fly/highBlind.vue';
import FlyLow from '@/page/fly/low.vue';
import FlyHigh from '@/page/fly/high.vue';
import Question from '@/page/question/index.vue';

const routes = [
  { path: '/shopNormal', component: TaoBao, name: 'shopNormal' },
  { path: '/shopBlind', component: TaoBaoBlind, name: 'shopBlind' },
  { path: '/junBlind', component: JunBlind, name: 'junBlind' },
  { path: '/junNormal', component: Jun, name: 'junNormal' },
  { path: '/flyLowBlind', component: FlyLowBlind, name: 'flyLowBlind' },
  { path: '/flyHighBlind', component: FlyHighBlind, name: 'flyHighBlind' },
  { path: '/flyLowNormal', component: FlyLow, name: 'flyLowNormal' },
  { path: '/flyHighNormal', component: FlyHigh, name: 'flyHighNormal' },
  { path: '/question', component: Question, name: 'question' },
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
});
router.beforeEach((to) => {
  const nameList = routes.map((r) => r.name);
  if (nameList.includes(to.name as string)) return true;
  const randomListStr = window.localStorage.getItem('randomList');
  let randomList: number[] = randomListStr ? JSON.parse(randomListStr) : [];
  if (!randomList?.length || randomList?.length < 100) {
    randomList = [
      ...(randomList || []),
      ...new Array(100 - (randomList?.length || 0)).fill(0).map(() => Math.round(Math.random() * 1000)),
    ];
    window.localStorage.setItem('randomList', JSON.stringify(randomList));
  }
  if (to.path === '/shop') {
    const isBlind = randomList[0] % 2 === 0 ? true : false;
    console.log(isBlind);
    return {
      name: isBlind ? 'shopBlind' : 'shopNormal',
    };
  }
  if (to.path === '/jun') {
    const isBlind = randomList[1] % 2 === 0 ? true : false;
    return {
      name: isBlind ? 'junBlind' : 'junNormal',
    };
  }
  if (to.path === '/fly') {
    const isBlind = randomList[2] % 2 === 0 ? true : false;
    const isHigh = randomList[3] % 2 === 0 ? true : false;
    console.log({ isBlind, isHigh });
    return {
      name: isBlind ? (isHigh ? 'flyHighBlind' : 'flyLowBlind') : isHigh ? 'flyHighNormal' : 'flyLowNormal',
    };
  }
});
