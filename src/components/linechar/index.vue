<template>
  <div
    ref="myChart"
    id="myChart"
    style="width: 25vw;height:30vh;"
  ></div>
</template>
 
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    const dom = this.$refs['myChart']; // 获取dom节点
    const myChart = echarts.init(dom); // 初始化echarts实例
 
    const option = {
      xAxis: {
        type: 'category',
        data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
      },
      yAxis: {
        type: 'value'
      },
      series: [
        {
          data: [820, 932, 901, 934, 1290, 1330, 1320],
          type: 'line',
          smooth: true
        }
      ]
    };
    // 设置实例参数
    myChart.setOption(option);
  }
};
</script>

<style scoped>
.size{
  width:100%;
  height:100%;
}

</style>