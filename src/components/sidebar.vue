<template>
    <div class="common main">
        <div class="sidebar">
            <ul class="navbar">
                <li class="item"
                    v-for="(item, index) in listData"
                    :key="index">{{item.text}}</li>
            </ul>
        </div>
    </div>
</template>

<script>
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
    }
}
</script>

<style lang="scss" scoped>
@import 'assets/common.scss';

.main {
    padding: 20px;
    @include flex-sb-fs;
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
            }
        }
    }
}
</style>
