<template>
  <div>
  <el-card class="Card">
    <template #header>
      <div class="card-header">
        <span>备忘录</span>
      </div>
    </template>
    <ol>
      <div v-for="site in sites" :key="site.id">
        <input /> <input type="checkbox"/>       <el-button @click="deleteComponent">删除</el-button>
      </div>

    </ol>
    <div>
    </div>
<div>

</div>
    <template #footer>
      <el-button @click="addComponent">添加1个,会清空之前的</el-button>

    </template>
  </el-card>

</div>
</template>
<script setup>
import { ref , reactive, toRefs} from 'vue'
const id = ref(1)
import MyComponent from '@/components/addvue/index.vue'
const sites =  reactive([
{ id:id },
]);

const addComponent = () => {

id.value++;
sites.push({ id:id });
console.log(sites)

};
const deleteComponent =  ()=>{
  id.value--;
  sites.pop({id:id});
}
const RefSites = toRefs(sites);

</script>

<style scoped>

</style>