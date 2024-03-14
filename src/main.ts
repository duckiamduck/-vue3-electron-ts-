import { createApp } from 'vue'
import App from './App.vue'
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
import router from '@/router/router';
import { createPinia } from 'pinia';
import './demos/ipc';
import * as echarts from 'echarts'

const app = createApp(App);
app.config.globalProperties.$echarts = echarts;
app.use(createPinia());
app.use(router);
app.use(ElementPlus)
  app.mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*')
  })
