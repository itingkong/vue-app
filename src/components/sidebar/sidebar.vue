<template>
	<div class="sidebar">
		<ul class="navbar">
			<li class="item"
				v-for="(item, index) in toolList"
				:key="index"
				:prop="item"
				@click="listenToSidebat"
				draggable
				@mousedown="dragStart($event,item)">{{item.tagName}}</li>
		</ul>
	</div>
</template>

<script>
import Bus from 'assets/js/bus'

export default {
	data() {
		return {
			toolList :[
				{
					type: 'input',
					name: '',
					tagName: '文本框'
				},{
					type: 'select',
					name: '',
					tagName: '下拉框'
				},{
					type: 'radio',
					name: '',
					tagName: '单选框'
				},{
					type: 'switch',
					name: '',
					tagName: '开关按钮'
				},{
					type: 'textarea',
					name: '',
					tagName: '多行文本框'
				}
			],
			nowData: null
		}
	},
	methods: {
		listenToSidebat (e) {
			let val = e.target.innerText
			console.log('index==>'+ e.target.index)
			Bus.$emit('val', val)
		},
		dragStart(e, item) {
			this.nowData = item
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/common.styl'

.sidebar {
	width 15%
	height $l-100
	.navbar {
		width $l-100
		height $l-100
		padding 10px
		border 1px solid $color
		border-radius 4px
		.item {
			width $l-100
			line-height $lh-36
			margin 8px 0
			background $bg-blue
			border-radius 4px
			text-align center
			color $color-w
			cursor pointer
		}
	}
}
</style>
