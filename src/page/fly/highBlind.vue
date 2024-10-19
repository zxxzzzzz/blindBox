<template>
  <div class="bg-[#d0cece] h-screen">
    <div class="w-100% pt-100% h-0 relative" :style="goodsStyle">
      <div class="absolute top-0 w-full">
        <div class="text-2rem text-black text-center font-800 mt-10% bg-[rgba(255,255,255,0.9)]">机票盲盒</div>
        <div
          class="flex justify-center mt-0.75rem text-1.25rem bg-[rgba(255,255,255,0.9)] rounded-lg mx-2rem h-2rem leading-normal"
        >
          <div class="mr-0.5rem text-[rgb(255,10,10)] font-bold">198元</div>
          <div class="mr-0.5rem text-black">单程机票</div>
          <div class="text-black">不可退款</div>
        </div>
        <div class="text-1rem mt-5rem bg-[rgba(255,255,255,0.9)] text-center p-0.2rem">
          <div class="text-black">覆盖全国所有地级市！出发城市任您挑！</div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="p-0.5rem px-1rem bg-white rounded-lg m-0.5rem">
        <div class="flex justify-between text-1rem">
          <div>填写盲盒信息</div>
          <div class="flex">
            <ElPopover content="目的地会在所选出发地，对应的已开通航的全国任意目的地城市（暂不含港澳台地区）">
              <template #reference>
                <ElButton type="text" class="mr-0.5rem h-24px">目的地?</ElButton>
              </template>
            </ElPopover>
            <ElPopover content="未来3到2周内的任意一天随机抽取">
              <template #reference>
                <ElButton type="text" class="mr-0.5rem h-24px">出发日期?</ElButton>
              </template>
            </ElPopover>
          </div>
        </div>
        <div class="mt-1.5rem">
          <div class="flex text-2rem items-center bg-[#fafafa] rounded-lg">
            <div class="i-ant-design:environment-outlined w-1em h-1em ml-0.5rem"></div>
            <ElSelect placeholder="选一个出发地" filterable v-model:model-value="city">
              <ElOption v-for="item in posOptions" :key="item.value" v-bind="item"> </ElOption>
            </ElSelect>
          </div>
          <div class="flex text-2rem items-center bg-[#fafafa] rounded-lg mt-1.5rem">
            <div class="i-ant-design:eye-invisible-outlined w-1em h-1em ml-0.5rem"></div>
            <ElInput placeholder="添加实名乘客"></ElInput>
          </div>
        </div>
        <div class="border-1 border-dashed w-full my-1rem opacity-50"></div>
        <div v-if="step === '2'" class="flex justify-center">
          <div class="rounded-l-2xl bg-[#e18ba0] h-2rem text-1rem text-white leading-loose text-center px-0.5rem" @click="handleShopCarClick">
            加入购物车
          </div>
          <div class=" bg-[#e18ba0] h-2rem text-1rem text-white leading-loose text-center mx-0.25rem px-0.5rem" @click="handleBuyClick">
            ¥50元立即购买
          </div>
          <div class="rounded-r-2xl bg-[#e18ba0] h-2rem text-1rem text-white leading-loose text-center px-0.5rem" @click="handleThinkClick">
            我再想想
          </div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="p-0.5rem px-1rem bg-white rounded-lg m-0.5rem">
        <div>使用规则：</div>
        <div>1.未来两周内任意一天，拆盲盒后可看。</div>
        <div>2.盲盒拆开即锁定机票，<span class="text-red">不可退款</span>。</div>
        <div>3.所有价款包含税费和基建燃油费。</div>
      </div>
    </div>
    <div class="flex w-full h-2rem text-14px justify-end" v-if="step === '1'">
      <ElButton class="w-full" type="primary" @click="handleClickNext"> 下一步 </ElButton>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElSelect, ElOption, ElInput, ElPopover, ElButton, ElMessage } from 'element-plus';
import { computed, ref, StyleValue } from 'vue';
import { cityList } from './cityList';
import flyBgUrl from '@/assets/flyBlind.png';
import { useRoute, useRouter } from 'vue-router';
import { update } from '@/api';

const route = useRoute();
const router = useRouter();
const city = ref<string>('');

const goodsStyle = computed(() => {
  return {
    backgroundImage: `url(${flyBgUrl})`,
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
  } as StyleValue;
});
const posOptions = computed(() => {
  return cityList.map((name) => {
    return {
      label: name,
      value: name,
    };
  });
});
const step = computed(() => {
  return (route.query?.step || 1).toString();
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
  update('think', {})
  router.push({ name: 'question2' });
};
</script>

<style>
.el-select__wrapper.el-tooltip__trigger {
  height: 3rem;
  box-shadow: none;
  background-color: #fafafa;
}
.el-input__wrapper {
  height: 3rem;
  box-shadow: none;
  background-color: #fafafa;
}
</style>
