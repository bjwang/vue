<template>
	<div id='app'>
		<div class="row">
			<div class="col-xs-offset-2 col-xs-8">
				<div class="page-header">
					<h2><a class="list-group-item" v-link="{ path: '/'}">Router Demo - 01</a></h2>
				</div>
			</div>
		</div>
		<div class="row">
			<div class="col-xs-2 col-xs-offset-2">
				<div class="list-group">
					<!--使用指令v-link进行导航-->
					<a class="list-group-item" v-link="{ path: '/home'}">Home</a>
					<a class="list-group-item" v-link="{ path: '/about'}">About</a>
					<a class='list-group-item' v-link="{ path: '/about/title' }">About title</a>
					<a v-link="{ path: '/about/file' }">File</a>
					<a v-link="{ path: '/reg' }">reg</a>
					<a v-link="{ path: '/login' }">login</a>
				</div>
			</div>
			<div class="col-xs-6">
				<div class="panel">
					<div class="panel-body">
						<!--用于渲染匹配的组件-->
						<router-view :is="view" keep-alive="" transition="fade" transition-mode="out-in"></router-view>
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<style>
	body {
		background-color: #f7f8f9;
	}
	.fade-transition {
	  transition: opacity .3s ease;
	}
	.fade-enter, .fade-leave {
	  opacity: 0;
	}
</style>
