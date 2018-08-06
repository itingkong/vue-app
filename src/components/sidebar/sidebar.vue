<template>
    
    <div class="sidebar">
        <ul class="navbar">
            <li class="item"
                v-for="(item, index) in listData"
                :key="index"
                @click="listenToSidebat">{{item.text}}</li>
        </ul>
    </div>
</template>

<script>
import Bus from 'assets/js/bus'

export default {
    data() {
        return {
            listData :[{
                class: 'input',
                lable: '姓名',
                text: '文本框'
            },{
                class: 'select',
                lable: '省份',
                text: '下拉框'
            },{
                class: 'radio',
                lable: '性别',
                text: '单选框'
            },{
                class: 'textarea',
                lable: '自我介绍',
                text: '多行文本框'
            }]
        }
    },
    methods: {
        listenToSidebat (e) {
            let val = e.target.innerText
            Bus.$emit('val', val)
        }
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/common.scss';

.sidebar {
	width: 15%;
	height: $l-100;
	.navbar {
		width: $l-100;
		height: $l-100;
		padding: 10px;
		border: 1px solid $color;
		.item {
			width: $l-100;
			line-height: $lh-36;
			margin: 8px 0;
			background: $bg-blue;
			border-radius: 4px;
			text-align: center;
			color: $color-w;
			cursor: pointer;
		}
	}
}
</style>
