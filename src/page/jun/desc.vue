<template>
  <div>
    <div class="w-full pt-[100%]" :style="goodsStyle" data-tag="商品图片"></div>
    <div :style="{ backgroundImage: `url(${bgUrl})` }" class="bg-no-repeat p-0.75rem bg-cover h-[100vh]">
      <div class="bg-white opacity-90 p-0.5rem">
        <div class="indent-sm">
          告诉我们你想去的旅游目的地，告诉我们您逾期在旅途中的获得的旅游体验，我们将为您提供适合你的旅行计划。
        </div>
        <div class="indent-sm mt-0.5rem">
          首先，您需要完成我们的旅行调查并提供您的旅行偏好。然后我们会为您制定旅途计划，计划将包含完善的交通、住宿、餐饮、景点、购物等，您可以自由选择跟团游、散客游或者定制游。
        </div>
        <div class="indent-sm mt-0.5rem">
          其次，我们将与您沟通旅行计划的所有细节，力图让您全面了解即将进行的旅行，以判断是否符合你的期望。
        </div>
        <div class="indent-sm mt-0.5rem">最后，我司将与您签订旅行合同，并严格按照合同履行义务。</div>
        <div class="indent-sm mt-0.5rem">
          在我们的帮助下，您不必花费数小时仔细研究航班时刻表、酒店评论、事情清单、餐厅评论等。我们利用我们丰富的旅行知识和经验处理所有细节。
        </div>
        <div class="indent-sm mt-0.5rem">
          您只需陶醉在期待和兴奋中，然后出现并享受这种独特的旅行体验，我们根据您提供的参数为您计划了旅行，让您高枕无忧。它既无压力又有趣！
        </div>
      </div>
      <div class="flex w-full h-2rem text-14px justify-end mt-1.5rem">
        <ElButton class="w-full" type="primary" @click="handleClickNext"> 下一步 </ElButton>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import bgUrl from '@/assets/bg1.png';
import { ElButton } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';
import goodsUrl from '@/assets/jun.png';
import { computed, StyleValue } from 'vue';

const router = useRouter();
const route = useRoute();
const goodsStyle = computed(() => {
  return {
    backgroundImage: `url(${goodsUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  } as StyleValue;
});

const handleClickNext = () => {
  router.push({ name: 'question', query: { name: route.query.name as string } });
};
</script>

<style scoped></style>
