<template>
    <div>
       <div class="Header">
        <Button @click="loginout" :msg="msg"></Button>
        <!-- 头像 -->
        <el-avatar class="ava" :size="50" :src="imgurl" @click="goUser" />
       </div>
    </div>
</template>
<script lang="ts" setup>
import Button from '@/components/Button/addbutton/index.vue'
import imgurl from '@/assets/login-bg.jpg'
import { useRouter } from 'vue-router';
import { ref } from 'vue';
 
let msg = ref('退出登陆')
// 用户名下拉菜单选择事件
const router = useRouter();
const loginout= ()=> {
		localStorage.removeItem('ms_username');
		router.push('/login');
};

const goUser = ()=>{
	router.push('/user');
}
</script>
<style scoped>
.Header {
  width: 100%;
  height: 100%;
  display: flex;

}
.ava{
margin-top: 10px;
border:5px solid pink;
}
</style>