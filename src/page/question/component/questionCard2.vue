<template>
  <div class="rounded-lg bg-white p-0.5rem card">
    <div>{{ props.question }}</div>
    <div class="px-0.5rem">
      <ElRadioGroup :model-value="props.modelValue" @change="handleChange">
        <ElRadio v-for="option in props.options" :value="option.label">
          {{ option.label }}
        </ElRadio>
      </ElRadioGroup>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ElRadioGroup, ElRadio } from 'element-plus';
const props = defineProps<{
  question: string;
  options: { label: string }[];
  modelValue: string;
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', data: string): void;
}>();

const handleChange = (v: string | number | boolean | undefined) => {
  emits('update:modelValue', v?.toString?.() || '');
};
</script>

<style scoped>
.card + .card {
  margin-top: 8px;
}
</style>
