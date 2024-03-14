<template>
<div class="outer">
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

</div>
</template>

<script setup lang="ts">
import charts from '@/components/charts/index.vue'
import chart2 from '@/components/chart2/index.vue'
import chart3 from '@/components/chart3/index.vue'
import Card from '@/components/card/index.vue'
</script>


<style scoped>
.outer{
	display: flex;
	flex-direction: row;
	flex-wrap: wrap;
	}
.card{
	width: 25vw;
	height: 50vh;

}

.chart{
	width:25vw;
	height:50vh;

}

.chart2{
	width: 25vw;
	height: 50vh;

}
</style>