<template>
  <div>
    <div class="Header">
      <div class="leftBlock">
        <AddButton @click="loginout" :msg="msg"></AddButton>
        <!-- 头像 -->
        <el-avatar class="ava" :size="50" :src="imgurl" @click="goUser" />
      </div>

      <div>

      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import AddButton from '@/components/Button/addbutton/index.vue';
import imgurl from '@/assets/login-bg.jpg';
import { useRouter } from 'vue-router';
// import { ipcRenderer} from 'electron';
let msg = ref('退出登陆');
// 用户名下拉菜单选择事件
const router = useRouter();
const loginout = () => {
  localStorage.removeItem('ms_username');
  router.push('/login');
};
//关闭窗口
const close = () => {
  // remote.getCurrentWindow().close();
  // ipcRenderer.send('window-close')
}
// 修改颜色
const ChangeColor = () => {};

const goUser = () => {
  router.push('/user');
};

</script>
<style scoped lang="scss">
.Header {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;
}
.leftBlock{
  width: auto;
  margin-top: 20px;
  display: flex;
  justify-content: center;
}
.ava {
  margin-top: 10px;
  border: 5px solid $bg-color;
}
</style>
