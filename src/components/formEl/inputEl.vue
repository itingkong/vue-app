<template>
  <div class="form-item-content" :index="data.index">
    <div class="handle">
      <span class="set" @click="set">O</span>
      <span class="delete" @click="del">X</span>
    </div>
    <el-form-item :label="data.lable" :prop="data.prop">
      <el-input></el-input>
    </el-form-item>
  </div>
</template>

<script>
import Bus from 'assets/js/bus'
export default {
  data() {
    return {
      data: {
        lable: '标签名',
        text: '',
        prop: '',
        index: 1
      }
    }
  },
  mounted() {
    Bus.$on('form', res => {
      if(res.index == this.data.index){
        console.log('res====>' +res)
        console.log(this.data.index)
        this.data = res
        Bus.$emit('push', res)
      }
    })
  },
  methods: {
    set(e) {
      Bus.$emit('set', this.data)
      console.log(e.target.nodeName)
    },
    del() {
      console.log('delete')
    }
  }
}  
</script>

<style lang="scss" scoped>
@import 'assets/common.scss';

</style>
