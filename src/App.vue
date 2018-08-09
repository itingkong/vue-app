<template>
	<div id="app">
		<div class="common main">
			<div class="sidebar">
				<ul class="navbar">
					<li class="item"
						v-for="(item, index) in toolList"
						:key="index"
						:prop="item"
						@mousedown="dragStart($event,item)"
					>{{item.tagName}}</li>
				</ul>
			</div>
			<div class="form-wrap">
				<p class="title">新建表单</p>
				<new-form v-for="(item, index) in dataList"
									@mouseleave="mouseLeave" 
									@mouseenter="mouseEnter"
									:key="index"
									:prop="item"
									:index="index"
									@updataTem="updataTem"
									@updataDelete="updataDelete"
									@rightUpdataTem="rightUpdataTem"
									@rightRenderTem="rightRenderTem"></new-form>
			</div>
			<Editor></Editor>
		</div>
	</div>
</template>

<script>
import './dom-expand.js'
import Sidebar from 'components/sidebar/sidebar'
import newForm from 'components/newForm/newForm'
import Editor from 'components/editor/editor'

export default {
	name: 'App',
	components: { 
		// Sidebar,
		newForm,
		Editor
	},
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
			dataList: [],
			nowData: null,
			targetIndex:null,//右侧目标元素的下标
			isRender:null,
			pos: {
				offsetX: 0,
				offsetY: 0
			},
		}
	},
	methods: {
		dragStart(e, item) {
			this.$store.state.dragType = 'leftDrag'
			this.nowData = item
			this.cloneTag = document.createElement("div")
			let tagText = e.target.innerText
			this.cloneTag.innerText = tagText
			this.pos.offsetX = e.offsetX;
			this.pos.offsetY = e.offsetY;
			let moveLeft = e.pageX - e.offsetX;
			let moveTop = e.pageY - e.offsetY;
			
			this.cloneTag.addClass("newItem")
			this.cloneTag.css({
				left: `${moveLeft}px`,
				top: `${moveTop}px`,
			});
			this.cloneTag.addClass("newItem")
			document.querySelector("body").appendChild(this.cloneTag)
			this.bindDragMoveEvent()
		},
		mouseMove() {
			let moveLeft = event.pageX - this.pos.offsetX;
			let moveTop = event.pageY - this.pos.offsetY;
			this.cloneTag.css({
					left: `${moveLeft}px`,
					top: `${moveTop}px`
			});
		},
		mouseUp() {
			// console.log('up')
			// console.log(this.nowData)
			if(this.$store.state.dragType == 'leftDrag') {
				if(this.isRender) {
					this.dataList.splice(this.targetIndex, 1, this.nowData)
					console.log(">>>>" + this.nowData)
				}else if(this.isRender == null){
				}else {
					this.dataList.splice(this.targetIndex, 1)
				}
			}

			this.unbindDragMoveEvent()
			let ele = document.querySelector('.newItem')
			if( ele ) {
					document.querySelector('body').removeChild(ele)
			}
			this.$store.state.dragType = null
			this.targetIndex = null
			this.nowData = null
			this.isRender = null
		},
		mouseLeave() {
			this.$store.state.whetherDelete = this.$store.state.dragType === 'rightDrag' ? true : false
			this.isRender = this.$store.state.dragType === 'leftDrag' ? false : true
		},
		mouseEnter() {
			this.$store.state.whetherDelete = this.$store.state.dragType === 'rightDrag' ? false : true
			this.isRender = this.$store.state.dragType === 'leftDrag' ?  true : false
		},
		//数据更新 用于添加右侧的内容
		updataTem( value ) {
				this.isRender = true
				if( this.targetIndex != null) {
						console.log(value,'============不为 null==================')
						this.dataList.splice(this.targetIndex,1)
						this.dataList.splice(value,0,{isRender : false, name:'', type:''})
				}else {
						console.log(value,'============为 null==================')
						this.dataList.splice(value,0,{isRender : false, name:'', type:''})
				}
				this.targetIndex = value;
		},
		//右侧方框的数据更新事件  用于右侧的拖拽排序
		rightUpdataTem(obj) {
				if( obj.key == 'mouseDown') {
						this.dataList.splice(obj.index,1,{ isRender : false, name:'', type:''})
						this.nowData = obj.nowData
				}else {
						this.dataList.splice(this.targetIndex,1)
						this.dataList.splice(obj.index,0,{ isRender : false, name:'', type:''})
				}
				this.targetIndex = obj.index

		},
		//右侧拖拽的渲染
		rightRenderTem() {
				this.dataList.splice( this.targetIndex,1,this.nowData)
				this.nowData = null
				this.targetIndex = null
				this.$store.state.dragType = null
		},
		bindDragMoveEvent() {
			document.bind("mousemove", this.mouseMove);
			document.bind("mouseup", this.mouseUp)
			// document.addEventListener("mouseup", this.mouseUp())
		},
		unbindDragMoveEvent() {
			document.unbind("mousemove", this.mouseMove);
			document.unbind("mouseup", this.mouseUp);
			// document.removeEventListener("mouseup", this.mouseUp);
		}
	}
}
</script>

<style lang="stylus" scoped>
@import '~assets/common.styl'
#app {
	width: 100%
	height: 100%
	font-family: 'Avenir', Helvetica, Arial, sans-serif
	-webkit-font-smoothing: antialiased
	-moz-osx-font-smoothing: grayscale
	.main {
		padding 20px
		flex-sb-fs()
		user-select none
		.sidebar {
			width 15%
			height $l-100
			.navbar {
				width $l-100
				height $l-100
				padding 10px;
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
		.form-wrap {
			width 60%;
			height $l-100
			padding 20px
			border-radius 4px
			border: 1px solid $color
			.title {
				font-weight 700
				height 30px
				line-height 30px
				border-bottom 1px solid $color
			}
		}
	}
}
</style>
