<template>
  
  <div class="login-wrap">
      <div class="ms-login">
          <div class="ms-title">后台管理系统</div>
          <el-form :model="param" :rules="rules" ref="login" label-width="0px" class="ms-content">
              <el-form-item prop="username">
                  <el-input v-model="param.username" placeholder="username">
                      <template #prepend>
                          <el-button :icon="User"></el-button>
                      </template>
                  </el-input>
              </el-form-item>
              <el-form-item prop="password">
                  <el-input
                      type="password"
                      placeholder="password"
                      v-model="param.password"
                      @keyup.enter="submitForm(login)"
                  >
                      <template #prepend>
                          <el-button :icon="Lock"></el-button>
                      </template>
                  </el-input>
              </el-form-item>
              <div class="login">
  <Addbutton  @click="submitForm(login)" :msg="msg"></Addbutton>
              </div>

              <CheckBox/>
              <el-checkbox  class="login-tips rember" v-model="checked" label="记住密码" size="large" />
              <p class="login-tips">Tips : 用户名和密码随便填。</p>
          </el-form>
      </div>
  </div>
</template>

<script setup lang="ts">
import { ref, reactive } from 'vue';
import { useTagsStore } from '@/store/tags';
import { usePermissStore } from '@/store/permiss';
import { useRouter } from 'vue-router';
import { ElMessage } from 'element-plus';
import type { FormInstance, FormRules } from 'element-plus';
import { Lock, User } from '@element-plus/icons-vue';
import Addbutton from '@/components/Button/addbutton/index.vue'
interface LoginInfo {
  username: string;
  password: string;
}
const msg = ref('登陆')
const lgStr = localStorage.getItem('login-param');
const defParam = lgStr ? JSON.parse(lgStr) : null;
const checked = ref(lgStr ? true : false);

const router = useRouter();
const param = reactive<LoginInfo>({
  username: defParam ? defParam.username : '',
  password: defParam ? defParam.password : '',
});

const rules: FormRules = {
  username: [
      {
          required: true,
          message: '请输入用户名',
          trigger: 'blur',
      },
  ],
  password: [{ required: true, message: '请输入密码', trigger: 'blur' }],
};
const permiss = usePermissStore();
const login = ref<FormInstance>();
const submitForm = (formEl: FormInstance | undefined) => {
  if (!formEl) return;
  formEl.validate((valid: boolean) => {
      if (valid) {
          ElMessage.success('登录成功');
          localStorage.setItem('ms_username', param.username);
          const keys = permiss.defaultList[param.username == 'admin' ? 'admin' : 'user'];
          permiss.handleSet(keys);
          localStorage.setItem('ms_keys', JSON.stringify(keys));
          router.push('/');
          if (checked.value) {
              localStorage.setItem('login-param', JSON.stringify(param));
          } else {
              localStorage.removeItem('login-param');
          }
      } else {
          ElMessage.error('登录失败');
          return false;
      }
  });
};

const tags = useTagsStore();
tags.clearTags();
</script>

<style scoped lang="scss">

.login-wrap {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100vw;
  height: 100vh;
  background-image: url('@/assets/login-bg.jpg');
  background-size:cover;
  background-repeat: no-repeat;
}
.ms-title {
  line-height: 50px;
  height: 50%;
  text-align: center;
  font-size: 20px;
  color: #333;
  font-weight: bold;
  padding-top: 10px;
}
.ms-login {
  width: 350px;

  border-radius: 15px;
  background:$bg-color;
}
.ms-content {
  padding: 10px 30px 30px;
}

.login-tips {
  font-size: 12px;
  line-height: 30px;
  color: #333;
  text-align: center;
}
.rember{
  margin-left: 100px;
}
</style>
