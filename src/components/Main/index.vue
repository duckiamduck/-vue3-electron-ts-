<template>
<div> 
  <div class="box1">
    <router-view v-slot="{ Component }">
      <transition name="move" mode="out-in">
        <keep-alive :include="tags.nameList">
          <component :is="Component"></component>
        </keep-alive>
      </transition>
    </router-view>
  </div>
 
</div>
</template>
<script setup lang="ts">
import { useTagsStore } from '@/store/tags';
const tags = useTagsStore();
</script>
<style scoped>

.box1{
width:90%;
height: 100vh;
background-color: white;
border-radius: 15px;
border:10px solid pink;
box-sizing: border-box;
margin-left: 5%;
}
</style>