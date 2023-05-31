<template>
  <div class="mx-[10%]">
    <div class="flex justify-center my-4">
      <div>医院LOGO</div>
    </div>
    <div class="border p-4">
      <div class="flex my-8">
        <div>ID</div>
      </div>
      <div class="flex mb-8">
        <div class="mr-4">姓名 xxx</div>
        <div class="mr-4">出生日期 xxxxxxxxx</div>
        <div class="mr-4">年龄 xxx</div>
        <div class="mr-4">性别 xxx</div>
      </div>
      <div>
        <div class="mb-8">检查日期 xxxxxxxxxxx</div>
      </div>
    </div>
    <div class="flex mb-8">
      <div class="flex-1">
        <div>右眼</div>
        <div class="border w-[100%] pb-[100%] mb-8">瞳孔相机</div>
        <div class="mb-8">屈光度</div>
        <div class="mb-8">曲率</div>
        <div class="mb-8">眼轴</div>
        <div class="mb-8">瞳孔直径</div>
        <div class="mb-8">轴率比</div>
        <div class="mb-8">瞳距</div>
      </div>
      <div class="flex-1">
        <div class="">左眼</div>
        <div class="border w-[100%] pb-[100%] mb-8">瞳孔相机</div>
        <div class="mb-8">屈光度</div>
        <div class="mb-8">曲率</div>
        <div class="mb-8">眼轴</div>
        <div class="mb-8">瞳孔直径</div>
        <div class="mb-8">轴率比</div>
      </div>
    </div>
    <div>
      <div>近视管理建议</div>
    </div>
    <div class="justify-end flex">
      <div>检查者签名</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
defineProps<{}>();
</script>
