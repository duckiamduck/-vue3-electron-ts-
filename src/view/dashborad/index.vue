<template>
<div class="outer">
<div class="header"> 
<div>
		<el-avatar class="ava" :size="60" :src="imgurl" />
		<span style="color:gainsboro; font-size:small;">今日天气晴朗，气温在15℃至25℃之间，东南风。</span>
</div>
	</div>       

<div class="card">
<Card></Card>
	</div>
	<div  class="chart">
		<charts></charts>
	</div>
<div class="chart2">
	<chart2></chart2>
</div>
<div class="chart2">
	<chart3></chart3>
</div>
<div class="chart2">
	<barBackround></barBackround>
</div>
</div>
</template>

<script setup lang="ts">
import charts from '@/components/Piechar/index.vue'
import chart2 from '@/components/linechar/index.vue'
import chart3 from '@/components/sixchar/index.vue'
import barBackround from '@/components/barBackround/index.vue'
import Card from '@/components/card/index.vue'
import imgurl from '@/assets/login-bg.jpg'
</script>


<style scoped>

.outer{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	}
	.header{
		width:100vw;
		height:10vh;
		border: 1px solid pink;
		border-radius: 15px;
		margin:10px;
		box-shadow: 0 0 10px 0 pink;
		display: flex;
		justify-content: space-between;
	}
	.ava{
		margin:20px;
	}
.card{
	width: 25vw;
	height: 40vh;
	border: 1px solid pink;
	border-radius: 15px;
	margin:10px;
	box-shadow: 0 0 10px 0 pink;
}

.chart{
	display: flex;
	width:35vw;
	height:40vh;
	border: 1px solid pink;
	margin:10px;
	border-radius: 15px;
	box-shadow: 0 0 10px 0 pink;

}

.chart2{
	display: flex;
	align-items: center;
	width: 26vw;
	height: 40vh;
	border: 1px solid pink;
	margin:10px;
	border-radius: 15px;
	box-shadow: 0 0 10px 0 pink;
}
</style>