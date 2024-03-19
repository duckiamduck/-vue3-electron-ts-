<template>
  <div
    ref="myChart"
    id="myChart"
    style="width: 20vw;height:30vh;"
  ></div>
</template>
 
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    const dom = this.$refs['myChart']; // 获取dom节点
    const myChart = echarts.init(dom); // 初始化echarts实例
 
    const option = {
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'shadow'
    }
  },
  grid: {
    left: '3%',
    right: '4%',
    bottom: '3%',
    containLabel: true
  },
  xAxis: [
    {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      axisTick: {
        alignWithLabel: true
      }
    }
  ],
  yAxis: [
    {
      type: 'value'
    }
  ],
  series: [
    {
      name: 'Direct',
      type: 'bar',
      barWidth: '60%',
      data: [10, 52, 200, 334, 390, 330, 220]
    }
  ]
};
    // 设置实例参数
    myChart.setOption(option);
  }
};
</script>

<style scoped>


</style>