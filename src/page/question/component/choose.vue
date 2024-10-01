<template>
  <div class="px-0.5rem">
    <ElRadioGroup v-model="chooseValue" @update:model-value="handleUpdate">
      <div>
        <ElRadio value="1" size="large">非常不赞同</ElRadio>
        <ElRadio value="2" size="large">不赞同</ElRadio>
        <ElRadio value="3" size="large">不太赞同</ElRadio>
      </div>
      <div>
        <ElRadio value="4" size="large">不赞同也不反对</ElRadio>
      </div>
      <div>
        <ElRadio value="5" size="large">有点赞同</ElRadio>
        <ElRadio value="6" size="large">赞同</ElRadio>
        <ElRadio value="7" size="large">非常赞同</ElRadio>
      </div>
    </ElRadioGroup>
  </div>
</template>

<script setup lang="ts">
import { ElRadio, ElRadioGroup } from 'element-plus';
import { ref } from 'vue';

const emits = defineEmits<{
  (e: 'change', data: string): void;
}>();

const chooseValue = ref('1');
const handleUpdate = (v: string | number | boolean | undefined) => {
  emits('change', v as string);
};
</script>

<style scoped></style>
