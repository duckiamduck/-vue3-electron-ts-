<template>
  <div > 
      <el-button class="MoiButton">{{ msg }}</el-button>
  </div>
</template>
<script setup lang="ts">
import { defineProps } from 'vue';
const propos = defineProps({
  msg:{
    type:String
  }
  })
</script>
<style scoped>
.MoiButton{
  width: 100px;
  height: 50px;
  color: white;
  background-color: pink;
  border: none;
  border-radius: 15px;
  margin: 10px;
background-image: url('./add.svg');
background-size: contain;
background-repeat: no-repeat;
}

.MoiButton:hover{
background-color: pink;
width: 100px;

}
.MoiButton:active{
  box-shadow: pink 0 0 5px 5px;
}
</style>