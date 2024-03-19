<template>
  <el-row>
    <el-col >
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo Aside "
        @open="handleOpen"
        @close="handleClose"
      >
        <el-sub-menu index="1" >
          <template #title >
            <el-icon><location /></el-icon>
            <span >PS网站</span>
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1" @click="Godash">dashboard</el-menu-item>
            <el-menu-item index="1-2" @click="Gops2">国内PS</el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group>
            <el-menu-item index="1-3"  @click="Gops">国外PS</el-menu-item>
          </el-menu-item-group>
          <el-sub-menu index="1-4">
            <template #title>item four</template>
            <el-menu-item index="1-4-1">item one</el-menu-item>
          </el-sub-menu>
        </el-sub-menu>
        <el-menu-item index="2">
          <el-icon><setting /></el-icon>
          <span>友情连接</span>
        </el-menu-item>
        <el-menu-item index="3" @click="goselect">
          <el-icon><icon-menu /></el-icon>
          <span>接口文档</span>
        </el-menu-item>
        <el-menu-item index="4" @click="GobackgroundPic" >
          <el-icon><document /></el-icon>
          <span>壁纸欣赏</span>
        </el-menu-item>
        <el-menu-item index="5">
          <el-icon><setting /></el-icon>
          <span>友情连接</span>
        </el-menu-item>
      </el-menu>
    </el-col>

  </el-row>
</template>

<script lang="ts" setup>
import { useRouter } from 'vue-router';
const router = useRouter();
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const goselect = ()=>{
  router.push('/apifox')
}
const Godash = ()=>{
  router.push('/dashboard')
}
const Gops = ()=>{
router.push('/ps')
}
const Gops2 = ()=>{
  router.push('/ps2')
}
const GobackgroundPic = ()=>{
  router.push('/backgroundpic')
}
</script>

<style scoped>
.Aside{
 border-radius: 15px !important;
 width: auto;
 
 height: 100vh;
}

</style>