<template>
    <div class="rounded-lg bg-white p-0.5rem card">
      <div>{{ props.question }}</div>
      <Choose></Choose>
    </div>
</template>

<script setup lang="ts">
import Choose from './choose.vue';
const props = defineProps<{
  question:string
}>()

</script>

<style scoped>
.card + .card {
  margin-top: 8px;
}

</style>