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
<style scoped lang="scss">
.MoiButton{
  width: 100px;
  height: 50px;
  color: white;
  background-color: $bg-color;
  border: none;
  border-radius: 15px;
  margin: 10px;
background-image: url('./add.svg');
background-size: contain;
background-repeat: no-repeat;
}

.MoiButton:hover{
background-color: $bg-color;
width: 100px;

}
.MoiButton:active{
  box-shadow: $bg-color 0 0 5px 5px;
}
</style>