<script setup lang="ts">
import * as echarts from 'echarts';
import { provide } from "vue";
provide("echarts", echarts);
</script>


<template>
 
  <router-view />

</template>


<style scoped>

</style>

