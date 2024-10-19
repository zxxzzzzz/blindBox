<template>
  <div class="relative bg-[#f0f0f0] h-[100vh]">
    <div class="h-3rem bg-[#f2f2f2] fixed w-full flex items-center justify-between px-0.5rem box-border top-0">
      <div class="i-ant-design:left-outlined w-1.5rem h-1.5rem" data-tag="返回"></div>
      <div class="">
        <input type="text" class="outline-none border-none h-2rem rounded-xl" />
      </div>
      <div class="i-ant-design:export-outlined w-1.5rem h-1.5rem" data-tag="分享"></div>
      <div class="i-ant-design:shopping-cart-outlined w-1.5rem h-1.5rem" data-tag="购物车"></div>
      <div class="i-ant-design:ellipsis-outlined w-1.5rem h-1.5rem" data-tag="更多"></div>
    </div>
    <div class="h-3rem"></div>
    <div class="w-full pt-[100%]" :style="goodsStyle" data-tag="商品图片"></div>
    <div class="rounded-xl bg-white m-0.5rem p-0.5rem pb-1.5rem">
      <div class="text-#ed6828">¥</div>
      <div class="mt-0.5rem text-12px text-#a0a0a0">
        <span>快递:包邮</span>
        <span class="ml-2rem">发货地:珠海仓</span>
      </div>
      <div class="mt-0.5rem text-12px text-#a0a0a0">不支持七天无理由退换</div>
      <div class="mt-1rem text-18px">【盲盒】纪念版赛车模型盲盒多种款式随机发货</div>
    </div>
    <div class="flex w-full h-2rem text-14px justify-end" v-if="step === '1'">
      <ElButton class="w-full" type="primary" @click="handleClickNext"> 下一步 </ElButton>
    </div>
    <div class="flex h-3rem bg-white items-center justify-between px-0.5rem" v-if="step === '2'">
      <div class="text-#a0a0a0">
        <div class="i-ant-design:shop-outlined w-1.5rem h-1.5rem" data-tag="店铺"></div>
        <div class="text-12px text-center" data-tag="店铺">店铺</div>
      </div>
      <div class="text-#a0a0a0">
        <div class="i-ant-design:aliwangwang-outlined w-1.5rem h-1.5rem" data-tag="客服"></div>
        <div class="text-12px text-center" data-tag="客服">客服</div>
      </div>
      <div class="text-#a0a0a0">
        <div class="i-ant-design:star-outlined w-1.5rem h-1.5rem" data-tag="收藏"></div>
        <div class="text-12px text-center" data-tag="收藏">收藏</div>
      </div>
      <div class="flex w-60% h-2rem text-14px">
        <div
          class="rounded-l-0.75rem bg-gradient-to-r from-[#fdca01] to-[#ff9803] text-white flex-1 leading-loose text-center animate__animated animate__bounce"
          data-tag="我再想想"
          @click="handleThinkClick"
        >
          我再想想
        </div>
        <div
          class="bg-gradient-to-r from-[#fdca01] to-[#ff9803] text-white flex-1 leading-loose text-center animate__animated animate__bounce"
          data-tag="加入购物车"
          @click="handleShopCarClick"
        >
          加入购物车
        </div>
        <div
          class="rounded-r-0.75rem text-white bg-gradient-to-r from-[#fe7705] to-[#fd4d01] flex-1 leading-loose text-center animate__animated animate__bounce"
          data-tag="立即购买"
          @click="handleBuyClick"
        >
          立即购买
        </div>
      </div>
    </div>
    <div class="text-center mt-4">
      <ElText>亲，请选择一个符合您期望的选项吧！</ElText>
    </div>
  </div>
</template>

<script setup lang="ts">
import goodsUrl from '@/assets/R-C.png';
import { computed, StyleValue } from 'vue';
import { ElButton, ElMessage, ElText } from 'element-plus';
import { useRoute, useRouter } from 'vue-router';
import { update } from '@/api';

const router = useRouter();
const route = useRoute();

const step = computed(() => {
  return (route.query?.step || 1).toString();
});

const goodsStyle = computed(() => {
  return {
    backgroundImage: `url(${goodsUrl})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
  } as StyleValue;
});

const handleClickNext = () => {
  router.push({ name: 'question', query: { name: route.name as string } });
};
const handleShopCarClick = async () => {
  ElMessage.success({ message: '加入购物车成功', duration: 3000 });
  update('addShopCar', {})
  router.push({ name: 'question2' });
};
const handleBuyClick = async () => {
  ElMessage.success({ message: '下单成功', duration: 3000 });
  update('buy', {})
  router.push({ name: 'question2' });
};
const handleThinkClick = () => {
  update('think', {});
  router.push({ name: 'question2' });
};
</script>

<style scoped></style>
