<template>
  <div class="relative bg-[#f0f0f0] h-[100vh]">
    <div class="h-3rem bg-[#f2f2f2] fixed w-full flex items-center justify-between px-0.5rem box-border top-0">
      <div class="i-ant-design:left-outlined w-1.5rem h-1.5rem"></div>
      <div class="">
        <input type="text" class="outline-none border-none h-2rem rounded-xl" />
      </div>
      <div class="i-ant-design:export-outlined w-1.5rem h-1.5rem"></div>
      <div class="i-ant-design:shopping-cart-outlined w-1.5rem h-1.5rem"></div>
      <div class="i-ant-design:ellipsis-outlined w-1.5rem h-1.5rem"></div>
    </div>
    <div class="h-3rem"></div>
    <div class="h-16rem bg-red" :style="goodsStyle"></div>
    <div class="rounded-xl bg-white  m-0.5rem p-0.5rem pb-1.5rem">
      <div class="text-#ed6828">¥</div>
      <div class="mt-0.5rem text-12px text-#a0a0a0">
        <span>快递:包邮</span>
        <span class="ml-2rem">发货地:珠海仓</span>
      </div>
      <div class="mt-0.5rem text-12px text-#a0a0a0">不支持七天无理由退换</div>
      <div class="mt-1rem text-18px">小米空调巨省电pro盲盒</div>
    </div>
    <div class="flex h-3rem bg-white items-center justify-between px-0.5rem">
      <div class="text-#a0a0a0">
        <div class="i-ant-design:shop-outlined w-1.5rem h-1.5rem"></div>
        <div class="text-12px text-center">店铺</div>
      </div>
      <div class="text-#a0a0a0">
        <div class="i-ant-design:aliwangwang-outlined w-1.5rem h-1.5rem"></div>
        <div class="text-12px  text-center">客服</div>
      </div>
      <div class="text-#a0a0a0">
        <div class="i-ant-design:star-outlined w-1.5rem h-1.5rem"></div>
        <div class="text-12px text-center">收藏</div>
      </div>
      <div class="flex w-60% h-2rem text-14px"> 
        <div class="rounded-l-0.75rem bg-gradient-to-r from-[#fdca01] to-[#ff9803] text-white flex-1 leading-loose text-center">加入购物车</div>
        <div class="rounded-r-0.75rem text-white bg-gradient-to-r from-[#fe7705] to-[#fd4d01] flex-1 leading-loose text-center">立即购买</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import goodsUrl from '@/assets/R-C.png';
import { computed, StyleValue } from 'vue';

const goodsStyle = computed(() => {
  return {
    backgroundImage: `url(${goodsUrl})`,
    backgroundSize: 'contain',
  } as StyleValue;
});
</script>

<style scoped></style>
