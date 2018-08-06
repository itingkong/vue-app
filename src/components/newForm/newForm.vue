<template>
    <div class="form-wrap">
        <p class="title">新建表单</p>
        <form class="form">
            <input type="text" :value="value">
        </form>
    </div>
</template>

<script>
    import Bus from 'assets/js/bus'
    export default {
        data() {
            return {
                value: ''
            }
        },
        mounted () {
            Bus.$on('val', res => {
                this.value = res
            })
        }
    }

</script>

<style lang="scss" scoped>
    @import 'assets/common.scss';

    .form-wrap {
        width: 80%;
        height: $l-100;
        padding: 20px;
        border-radius: 4px;
        border: 1px solid $color;
    }

</style>
