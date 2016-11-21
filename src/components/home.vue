<template>
	<div>
		<h1>Home</h1>
		<ul>
			<li v-for="(index, item) in dataList">
				{{ index + 1 }}<a v-link="{ path: '/article/' + item.id }">{{ item.title }}</a>
				<p>
					来源：{{item.src}}
				</p>
			</li>
		</ul>
		<a class="button" @click="next" v-show='more'>GO NEXT - {{pageNumber}}</a>
	</div>
</template>

<script>
	import _ from 'lodash';
	import util from '../libs/utils';
	import $ from 'webpack-zepto';
	export default {
		data: function(){
			return {
				dataList: [],
				pageNumber: 1,
				pageSize: 10,
				more: true
			}
		},
		ready: function(){
			this.getDataList();
		},
		methods: {
			getDataList: function(){
				this.$http.get('/djcf/article/list', {
					params:{
						pageNumber: this.pageNumber,
						pageSize: this.pageSize
					}
				})
					.then((response) =>{
						var ret = _.get(response.body, 'data.dataList') || [];
						var currentTotal = ret.length;
						var size = this.pageSize;
						if(currentTotal < size){
							this.more = false;
						}
						//this.$set('dataList', ret);
						this.dataList = this.dataList.concat(ret);
						this.pageNumber++;
					})
					.catch((response) =>{
						console.log(response.status);
					})
			},
			next: function(){
				console.log('next');
				this.getDataList();
			}
		},
		attached:function(){
      console.log("attached..");
   	},
		detached:function(){
      console.log("detached..");
			console.log($('#app').scrollTop());
   	},
		beforeDestroy:function(){
      console.log("beforeDestroy..");
   	},
		destroyed:function(){
    	console.log("destroyed..");
   	}
	}
</script>
