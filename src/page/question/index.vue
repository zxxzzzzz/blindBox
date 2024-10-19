<template>
  <div class="bg-[#f0f0f0] overflow-hidden">
    <template v-for="item in questionList" :key="item.question">
      <div v-if="item.question === '-'" class="w-full h-4px bg-blue my-1rem"></div>
      <QuestionCard v-else :question="item.question" v-model="item.value" :is-error="!!item.isError"></QuestionCard>
    </template>
    <div class="text-center">
      <ElButton
        class="my-1.5rem bg-blue h-2rem rounded-lg mx-auto leading-loose text-white text-center text-1rem"
        @click="handleSubmit"
      >
        下一步：做出您的最后决定吧！
      </ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QuestionCard from './component/questionCard.vue';
import { update } from '@/api';
import { ElMessage, ElButton } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';

const route = useRoute();
const router = useRouter();

const questionList = ref([
  { question: '1.很难判断商品的材质和质量是否真实', value: -1, isError: false },
  { question: '2.很难确保我的期望和实际商品相符', value: -1, isError: false },
  { question: '3.很难确定商品的款式是否适合自己', value: -1, isError: false },
  { question: '-', value: 1 },
  { question: '1.我的想象力被激发了', value: -1, isError: false },
  { question: '2.一个新的想法让我感到好奇', value: -1, isError: false },
  { question: '3.我意外且自然而然地产生了新想法', value: -1, isError: false },
  { question: '4.我的视野变得更加开阔', value: -1, isError: false },
  { question: '5.我发现了新的事物', value: -1, isError: false },
  { question: '-', value: 1 },
  { question: '1.我体验到了从未有过的经历', value: -1, isError: false },
  { question: '2.我体验到了以前从未想过的事情', value: -1, isError: false },
  { question: '3.我经历了与日常生活不同的事情', value: -1, isError: false },
  { question: '4.我经历了一次巧合冲动去买计划外的东西', value: -1, isError: false },
  { question: '5.我经历了一个命运般的时刻', value: -1, isError: false },
  { question: '6.我遇到了一件幸运的事', value: -1, isError: false },
  { question: '-', value: 1 },
  { question: '1.比起购买，我更喜欢储蓄', value: -1, isError: false },
  { question: '2.我可以为了未来放弃当前的购买。', value: -1, isError: false },
  { question: '3.我设立了应急基金以备紧急情况之需。', value: -1, isError: false },
  { question: '4.我定期存钱', value: -1, isError: false },
  { question: '5.当我要买东西时，我倾向于在购买之前制定计划。', value: -1, isError: false },
  { question: '6.购买前会仔细考虑，避免出错。', value: -1, isError: false },
  { question: '7.我对花钱有自己的规则。', value: -1, isError: false },
  { question: '-', value: 1 },
  { question: '1.总体来说，我是那种会给自己买礼物的人', value: -1, isError: false },
  { question: '2.我经常会想着给自己买礼物', value: -1, isError: false },
  { question: '3.总体上，我会花很多时间考虑送给自己的礼物', value: -1, isError: false },
  { question: '-', value: 1 },
  { question: '1.我多次有突然想买东西的冲动', value: -1, isError: false },
  { question: '2.在这次购物中，我购买了一些原本没有计划的东西', value: -1, isError: false },
  { question: '3.这次购物中，我看到了许多我想买的东西，尽管它们不在我的购物清单上', value: -1, isError: false },
  { question: '4.在这次购物中，我没有强烈的冲动去买计划外的东西', value: -1, isError: false },
]);
const handleSubmit = () => {
  const isDone = questionList.value.every((item) => item.value !== -1);
  if (!isDone) {
    ElMessage.error('问卷还没填完');
    questionList.value = questionList.value.map((item) => {
      if (item.value === -1) return { ...item, isError: true };
      return { ...item, isError: false };
    });
    return;
  }
  update('question', questionList.value);
  if (route.query?.name) {
    router.push({ name: (route.query?.name || '') as string, query: { step: 2 } });
  }
};
</script>

<style scoped></style>
