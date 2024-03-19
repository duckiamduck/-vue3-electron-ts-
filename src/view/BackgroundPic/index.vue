<template>
<div class="outer">
  <div class="demo-image__preview" >
<imgbox :imgsrc="url" ></imgbox>
<imgbox :imgsrc="url2"></imgbox>
<imgbox :imgsrc="url3"></imgbox>
</div>
</div>
</template>


<script lang="ts" setup>
import imgbox from '@/components/PicShow/index.vue'
const url ='https://api.paugram.com/wallpaper/'
const url2 = "https://api.paugram.com/wallpaper/?source=sina&category=us"
const url3 = "https://api.paugram.com/wallpaper/?source=sina&category=sm"



</script>


<style scoped lang="less" >
.outer{
  display: flex;
  
}
</style>