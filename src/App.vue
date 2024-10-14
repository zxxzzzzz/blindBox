<template>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { update } from './api';

onMounted(() => {
  update('init', {
    event: '页面加载完成',
  });
});
</script>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
