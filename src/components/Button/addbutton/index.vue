<template>
  <div > 
      <el-button class="MoiButton"></el-button>

  </div>
</template>
<script setup lang="ts">

</script>
<style scoped>
.MoiButton{
  width: 50px;
  height: 50px;
  color: white;
  background-color: pink;
  border: none;
  border-radius: 15px;
  margin: 10px;
background-image: url('./add.svg');
background-size: contain;
background-position: center;
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