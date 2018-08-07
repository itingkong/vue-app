<template>
	<div class="form-wrap">
		<p class="title">新建表单</p>
		<el-form ref="form" class="form" label-width="80px">
			<input-el></input-el>
			<select-el></select-el>
			<el-form-item>
				<el-button type="primary" @click="onSubmit" class="btn">保存</el-button>
			</el-form-item>
		</el-form>
	</div>
</template>

<script>
import Bus from 'assets/js/bus'
import InputEl from 'components/formEL/inputEl'
import SelectEl from 'components/selectEl/selectEl'

export default {
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
    }
	}
}

</script>

<style lang="scss" scoped>
	@import 'assets/common.scss';

	.form-wrap {
		width: 60%;
		height: $l-100;
		padding: 20px;
		border-radius: 4px;
		border: 1px solid $color;
		.title {
			font-weight: 700;
			height: 30px;
			line-height: 30px;
			border-bottom: 1px solid $color;
		}
		.form {
			margin-top: 20px;
			.el-form-item {
				margin-bottom: 10px;
			}

			.btn {
				margin-top: 10px;
			}
		}
	}

</style>
