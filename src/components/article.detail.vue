<template lang='pug'>
	div
		h2 {{dataList.title}}
		.subtitle
			span {{dataList.src}}
			span {{getTime(dataList.createTime)}}
		.desc {{{dataList.content}}}	
</template>

<script>
	import _ from 'lodash';
	import $ from 'webpack-zepto';
	import moment from 'moment';
	export default {
		data: function(){
			return {
				dataList: {}
			}
		},
		ready: function(){
			this.getDataList();
		},
		methods: {
			getDataList: function(){
				let detailPath = '/djcf/article/detail?';
				this.$http.get(detailPath, {
					params: {
						articleId: this.$route.params.id
					}
				}).then((response) =>{
						var ret = _.get(response.body, 'data') || [];
						console.log(response.body);
						this.$set('dataList', ret)
					})
					.catch((response) =>{
						console.log(response.status);
					})
			},
			getTime (date) {
        return moment(date).format('YYYY-MM-DD HH:mm:ss')
      }
		}
	}
</script>
