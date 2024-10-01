<template>
  <div class="bg-[#f0f0f0] overflow-hidden">
    <PerceivedUncertainty></PerceivedUncertainty>
    <ImpulsePurchase class="mt-0.5rem"</ImpulsePurchase>
    <PerceivedSerendipity class="mt-0.5rem"></PerceivedSerendipity>
    <SelfControl class="mt-0.5rem"></SelfControl>
    <SelfGiftPropensity class="mt-0.5rem"></SelfGiftPropensity>
    <TouristInspiration class="mt-0.5rem"></TouristInspiration>
    <div class="my-1.5rem bg-blue h-2rem w-[50%] rounded-lg mx-auto leading-loose text-white text-center text-1rem">
      提交
    </div>
  </div>
</template>

<script setup lang="ts">
import PerceivedUncertainty from './perceivedUncertainty.vue';
import ImpulsePurchase from './impulsePurchase.vue';
import PerceivedSerendipity from './perceivedSerendipity.vue';
import SelfControl from './selfControl.vue';
import SelfGiftPropensity from './selfGiftPropensity.vue';
import TouristInspiration from './touristInspiration.vue';

</script>

<style scoped>

</style>