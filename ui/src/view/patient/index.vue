<template>
  <div>
    <div class="flex justify-center mt-12">
      <div>Robotrak</div>
    </div>
    <div class="flex justify-end mr-12">
      <div>主页面</div>
    </div>
    <div class="flex justify-around my-12">
      <div>姓名</div>
      <div>ID</div>
      <div>电话</div>
      <div>搜索</div>
      <div>新建</div>
    </div>
    <div class="px-12">
      <Table :columns="columns"></Table>
    </div>
    <div class="flex justify-end mt-4 pr-12">
      <div>开始检查</div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { Table, TableProps, Button } from 'ant-design-vue';
import { h } from 'vue';
defineProps<{}>();

const columns: TableProps['columns'] = [
  { title: '门诊ID' },
  { title: '姓名' },
  { title: '性别' },
  { title: '年龄' },
  { title: '出生日期' },
  { title: '诊断' },
  { title: '联系方式' },
  { title: '处方' },
  { title: '检查日期' },
  { title: '检查医生' },
  {
    title: '操作',
    customRender() {
      return [h(Button, '修改'), h(Button, '删除'), h(Button, '合并')];
    },
  },
];
</script>
