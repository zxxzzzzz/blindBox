<template>
  <div class="bg-[#f0f0f0] overflow-hidden h-[100vh]">
    <div>
      <template v-for="question in questionList">
        <QuestionCard2 v-bind="question" v-model="question.value"></QuestionCard2>
      </template>
    </div>
    <div class="text-center my-1.5rem">
      <ElButton type="primary" class="w-full" @click="handleSubmit">提交</ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import QuestionCard2 from './component/questionCard2.vue';
import { ElButton, ElMessage } from 'element-plus';
import { update } from '@/api';
import { router } from '@/route';

const questionList = ref([
  { question: '1.您的性别', options: [{ label: '男' }, { label: '女' }], value: '', isError: false },
  {
    question: '2.您的年龄',
    value: '',
    isError: false,
    options: [
      { label: '18-25岁' },
      { label: '26-35岁' },
      { label: '36-45岁' },
      { label: '46-55岁' },
      { label: '56岁及以上' },
    ],
  },
  {
    question: '3.您的学历',
    value: '',
    isError: false,
    options: [{ label: '初中及一下' }, { label: '高中/中专/高职' }, { label: '本科/大专' }, { label: '研究生及以上' }],
  },
  {
    question: '4.您的收入水准（或生活费）',
    value: '',
    isError: false,
    options: [
      { label: '1000元以下' },
      { label: '1000-3000' },
      { label: '3000-5000' },
      { label: '5000-10000' },
      { label: '10000以上' },
    ],
  },
  {
    question: '5.您的职业',
    value: '',
    isError: false,
    options: [
      { label: '学生' },
      { label: '企业员工' },
      { label: '个体经营者' },
      { label: '事业单位/公务员' },
      { label: '服务业人员' },
      { label: '其他' },
      { label: '工人（如工厂工人/建筑工人/环卫工人等）' },
    ],
  },
]);

const handleSubmit = () => {
  const isDone = questionList.value.every((item) => item.value !== '');
  if (!isDone) {
    ElMessage.error('问卷还没填完');
    questionList.value = questionList.value.map((item) => {
      if (item.value === '') return { ...item, isError: true };
      return { ...item, isError: false };
    });
    return;
  }
  update(
    'question2',
    questionList.value.map((item) => ({ question: item.question, value: item.value }))
  );
  router.push({name:'thankYou'})
};
</script>

<style scoped></style>
