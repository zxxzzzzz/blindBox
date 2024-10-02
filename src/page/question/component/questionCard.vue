<template>
  <div class="rounded-lg bg-white p-0.5rem card">
    <div>{{ props.question }}</div>
    <div class="px-0.5rem">
      <div class="flex justify-between mt-1rem">
        <div>非常不赞同</div>
        <div>非常赞同</div>
      </div>
      <div class="w-full h-1px bg-gray my-0.5rem"></div>
      <div class="flex justify-between">
        <div
          v-for="i in valueList"
          :data-tag="props.question + '_' + i"
          :key="i"
          class="border border-solid rounded-full w-1.5rem h-1.5rem text-center leading-normal"
          :class="props.modelValue === i ? 'bg-blue' : ''"
          @click="emits('update:modelValue', i)"
        >
          {{ i }}
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  question: string;
  modelValue: number;
}>();
const emits = defineEmits<{
  (e: 'update:modelValue', data: number): void;
}>();
const valueList = [1, 2, 3, 4, 5, 6, 7];
</script>

<style scoped>
.card + .card {
  margin-top: 8px;
}
</style>
