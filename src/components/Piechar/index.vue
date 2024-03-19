<template>
  <div
    ref="myChart"
    id="myChart"
    style="width: 25vw;height:50vh;"
  ></div>
</template>
 
<script>
import * as echarts from 'echarts';
export default {
  mounted() {
    const dom = this.$refs['myChart']; // 获取dom节点
    const myChart = echarts.init(dom); // 初始化echarts实例
 
    const option = {
      title: {
    subtext: 'Fake Data',
    left: 'center'
  },
  tooltip: {
    trigger: 'item'
  },
  legend: {
    orient: 'vertical',
    left: 'left'
  },
  series: [
    {
      name: 'Access From',
      type: 'pie',
      radius: '50%',
      data: [
        { value: 1048, name: 'Search Engine' },
        { value: 735, name: 'Direct' },
        { value: 580, name: 'Email' },
        { value: 484, name: 'Union Ads' },
        { value: 300, name: 'Video Ads' }
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: 'rgba(0, 0, 0, 0.5)'
        }
      }
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