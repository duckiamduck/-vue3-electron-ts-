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
  height: 10vh;
  border-radius: 20px;
  background-color: white !important;
  margin: 0 0 10px 0;
  box-shadow:0 0 5px pink;
}
.Main{ 
  flex:1;
  border-radius: 15px;
  box-shadow:0 0 5px pink;
}
.Aside{
  width: 15vw;
  height:100vh;
  border-radius: 15px;
  margin-right: 10px;
  box-shadow:0 0 5px pink;
}
</style>