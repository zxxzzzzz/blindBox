<template>
  <RouterView></RouterView>
</template>
<script setup lang="ts">
import { onMounted } from 'vue';
import { RouterView } from 'vue-router';
import { update } from './api';
import { isAddListener } from './store';
onMounted(() => {
  update('event', {
    event: '页面加载完成',
  });
  if (!isAddListener.value) {
    isAddListener.value = true;
    document.body.addEventListener('click', (e) => {
      const target = e.target as HTMLElement;
      const tag = target.dataset['tag'];
      if (!tag) return;
      update('event', {
        tag,
        event: '点击',
      });
    });
  }
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
