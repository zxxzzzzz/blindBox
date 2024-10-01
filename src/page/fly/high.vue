<template>
  <div class="bg-[#d0cece]">
    <div class="h-12rem bg-amber overflow-hidden flex flex-col justify-between">
      <div class="text-2rem text-white text-center font-800 mt-1rem">机票盲盒</div>
      <div class="flex justify-center text-1.25rem bg-[rgba(200,200,200,0.6)] rounded-lg mx-2rem h-2rem leading-normal">
        <div class="mr-0.5rem text-red">198元</div>
        <div class="mr-0.75rem text-[#64adf5]">单程机票</div>
        <div class="text-[#64adf5]">不喜欢?全额退</div>
      </div>
      <div class="text-1rem bg-[rgba(200,200,200,0.6)] text-center p-0.2rem">
        <div>覆盖全国所有地级市！出发城市任您挑！</div>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="p-0.5rem px-1rem bg-white rounded-lg m-0.5rem">
        <div class="flex justify-between text-1rem">
          <div>填写盲盒信息</div>
          <div class="flex">
            <div class="mr-0.5rem">目的地?</div>
            <div>出发日期?</div>
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
        <div>
          <div class="rounded-2xl bg-[#fea9be] h-3rem text-1.5rem text-white leading-loose text-center">¥198元立即购买</div>
        </div>
      </div>
    </div>
    <div class="overflow-hidden">
      <div class="p-0.5rem px-1rem bg-white rounded-lg m-0.5rem">
        <div>使用规则：</div>
        <div>1.未来两周内任意一天，拆盲盒后可看。</div>
        <div>2.盲盒拆开不满意，<span class="text-red">30分钟内全额退</span>。</div>
        <div>3.所有价款包含税费和基建燃油费。</div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElSelect, ElOption, ElInput } from 'element-plus';
import { computed, ref } from 'vue';
import { cityList } from './cityList';

const city = ref<string>('');
const posOptions = computed(() => {
  return cityList.map((name) => {
    return {
      label: name,
      value: name,
    };
  });
});
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
