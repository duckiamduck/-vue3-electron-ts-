<template>
    <el-image
     class="imgSize"
      :src="props.imgsrc"
      :zoom-rate="1.2"
      :max-scale="7"
      :min-scale="0.2"
      :preview-src-list="srcList"
      :initial-index="4"
      loading="lazy"
      fit="cover"
    />
</template>

<script lang="ts" setup>
const props = defineProps({
  imgsrc:{
    type:String,
  }
})
const srcList = [
  'https://api.paugram.com/wallpaper/',
  'https://api.paugram.com/wallpaper/?source=sina&category=us',
  'https://api.paugram.com/wallpaper/?source=sina&category=sm',
  'https://api.paugram.com/wallpaper/?source=sina&category=sina',
  'https://api.paugram.com/wallpaper/?source=sina&category=paul'
]
</script>


<style lang="less" scoped>
.imgSize{
  width:  50%;
  height: 30vh;
  background-color: pink;
  border-radius: 15px;
  box-shadow: 0 0 10px 0 pink;
  margin: 10px;
  border: 1px solid pink;
  img{
 width: 100%;
 height: 100%;
  }
}
.imgSize:hover{
  width: 90%;
  transition: 0.2s linear;
}
</style>