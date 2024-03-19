import { createApp } from 'vue'
import App from './App.vue'
import 'element-plus/dist/index.css'
import router from '@/router/router';
import { createPinia } from 'pinia';
import './demos/ipc';
import 'virtual:svg-icons-register';
import * as echarts from 'echarts'
import ElementPlus from 'element-plus';

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(createPinia());
app.use(router);
app.use(ElementPlus)
  app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
