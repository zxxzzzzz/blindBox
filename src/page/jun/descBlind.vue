<template>
  <div>
    <div class="w-full pt-[100%]" :style="goodsStyle" data-tag="商品图片"></div>
    <div :style="{ backgroundImage: `url(${bgUrl})` }" class="bg-no-repeat p-0.75rem bg-cover h-100vh">
      <div class="bg-white opacity-90 p-0.5rem">
        <div class="indent-sm">
          告诉我们你的喜好，我们将为您安排神秘的旅途计划，您将在旅途中逐渐揭晓这份神秘计划，一起去迎接未知的美好吧。
        </div>
        <div class="indent-sm mt-0.5rem">
          首先，您需要完成我们的神秘旅行调查并提供您的旅行偏好。然后我们开始为您打造一个单独设计和定制的度假胜地。在您旅行前一周，我们会通过电子邮件向您发送天气预报、装箱单和航班起飞时间。
        </div>
        <div class="indent-sm mt-0.5rem">
          不久之后，我们会向您邮寄展示包，其中包含目的地概述、我们为您选择该目的地的原因、您的所有旅行预订信息以及餐饮和活动选择指南。您将把这个密封的红包带到机场打开并发现您要去哪里！
        </div>
        <div class="indent-sm mt-0.5rem">抵制提前撕开红包的诱惑...这都是神秘之旅体验的一部分！</div>
        <div class="indent-sm mt-0.5rem">
          这种度假风格意味着您不必（甚至不能）花费数小时仔细研究目的地选择、航班时刻表、酒店评论、事情清单、餐厅评论等。我们利用我们丰富的旅行知识和经验处理所有细节。
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
import goodsUrl from '@/assets/junBlind.png';
import { ElButton } from 'element-plus';
import { computed, StyleValue } from 'vue';
import { useRoute, useRouter } from 'vue-router';

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
