<template>
	<el-form ref="form" class="form" label-width="80px">
		<input-el></input-el>
		<select-el></select-el>
		<component :is="comType"></component>
		<el-form-item>
			<el-button type="primary" @click="onSubmit" class="btn">保存</el-button>
		</el-form-item>
	</el-form>
</template>

<script>
import Bus from 'assets/js/bus'
import InputEl from 'components/formEL/inputEl'
import SelectEl from 'components/formEL/selectEl'

export default {
	props: {
		prop: {
			type: Object
		},
		index: {
			type: [String, Number]
		}
	},
	data() {
		return {
			form: []
		}
	},
	components:{
		InputEl,
		SelectEl
	},
	mounted () {
		Bus.$on('push', res => {
			this.form.push(res)
		})
	},
	methods: {
    onSubmit() {
			console.log(this.form);
			this.$message('提交完成')
		},
		inputBlur() {
			this.isShowInput = false;
		},
		mouseEnter() {
			console.log( 'enter',this.$store.state.dragType)
			if(this.$store.state.dragType == 'leftDrag' ) {
				this.$emit("updataTem", this.index);
			}else if( this.$store.state.dragType == 'rightDrag' && this.$store.state.isEnter) {
				this.$emit('rightUpdataTem',{ nowData:this.prop, index:this.index })
			} 
		},
		mouseDown(evt) {
			if(!this.isDrag) return  
			this.$store.state.dragType = "rightDrag";
			this.dragEle = document.createElement("div");
			this.pos.offsetX = evt.offsetX;
			this.pos.offsetY = evt.offsetY;
			let moveLeft = evt.pageX - evt.offsetX;
			let moveTop = evt.pageY - evt.offsetY;
			this.dragEle.css({
				width: `200px`,
				left: `${moveLeft}px`,
				top: `${moveTop}px`,
				height: "50px",
				'pointer-events': 'none'
			});
			//用于解决双击事件 和 单击事件冲突
			this.setDragTime = setTimeout(() => {
				this.dragEle.addClass("rightDragEvent");
				document.querySelector("body").append(this.dragEle);
				this.$emit('rightUpdataTem',{key:'mouseDown',nowData:this.prop,index:this.index})
				this.$store.state.isEnter = true
			}, 250);
			this.downTiem = new Date().getTime();
			this.bindDragMoveEvent();
		},
		mouseMove(evt) {
			console.log( 'tem mouseMove')
			let moveLeft = evt.pageX - this.pos.offsetX;
			let moveTop = evt.pageY - this.pos.offsetY;
			this.dragEle.css({
				left: `${moveLeft}px`,
				top: `${moveTop}px`
			});
		},
		mouseUp() {
			console.log('tem mouseUp')
			let upTime = new Date().getTime();
			if (upTime - this.downTiem >= 250) { //点击事件间隔小于 250 毫秒 不执行 mouseup 事件 
				this.$emit('rightRenderTem')
				this.$store.state.isEnter = false
				if (this.$store.state.whetherDelete) {
						this.$emit("updataDelete", this.index);
				}
			} else {
				this.$store.state.dragType = null;
				clearTimeout(this.setDragTime);
			}
			this.unbindDragMoveEvent();
			let ele = document.querySelector(".rightDragEvent");
			if (ele) {
				document.querySelector("body").removeChild(ele);
			}
		},
		bindDragMoveEvent() {
			document.addEventListener("mousemove", this.mouseMove);
			document.addEventListener("mouseup", this.mouseUp);
		},
		unbindDragMoveEvent() {
			document.removeEventListener("mousemove", this.mouseMove);
			document.removeEventListener("mouseup", this.mouseUp);
		}
	},
	computed: {
		comType() {
			switch (this.prop.type) {
				case "input":
						return InputEl;
				case "select":
						return InputEl;
				default:
						break;
			}
		}
	}
}

</script>

<style lang="stylus" scoped>
@import '~assets/common.styl';

.form {
	margin-top 20px
	.el-form-item {
		margin-bottom 10px
	}

	.btn {
		margin-top 10px
	}
}
</style>
