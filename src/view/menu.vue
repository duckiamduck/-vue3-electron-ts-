<template>
  <div class="common-layout">
    <el-container>
      <el-header class="Header">
        <Header></Header>
      </el-header>

      <el-container>
        <el-aside  class="Aside"><Aside></Aside></el-aside>

        <el-main class="Main"><Main></Main></el-main>
      </el-container>
    </el-container>


  </div>
</template>


<script setup>
import Header from '@/components/Header/index.vue'
import Aside from '@/components/Aside/index.vue'
import Main from '@/components/Main/index.vue'
</script>

<style scoped>
*{
  padding: 0;
  margin: 0;
}
.Header {
  height: 100px;
  border-radius: 20px;
  box-sizing: border-box;
  background-color: white !important;
  border: 10px solid pink;
  margin: 0 0 10px 0;
}
.Main{
  width: 100%;
  height: 100%;
  border-radius: 15px;
  background-color: pink;
}
.Aside{
  width:200px;
  margin: 0 10px 0 0;
  height:100vh;
}
</style>