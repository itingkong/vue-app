<template>
  <div class="form-item-content" :index="data.index">
    <div class="handle">
      <span class="set" @click="set">O</span>
      <span class="delete" @click="del">X</span>
    </div>
    <el-form-item :label="data.lable" :prop="data.prop">
      <el-select v-model="data" placeholder="请选择活动区域">
        <el-option label="区域一" value="shanghai"></el-option>
        <el-option label="区域二" value="beijing"></el-option>
      </el-select>
    </el-form-item>
  </div>
</template>

<script>
import Bus from 'assets/js/bus'
export default {
  data() {
    return {
      data: {
        lable: '活动区域',
        text: '',
        prop: '',
        index: 2
      }
    }
  },
  mounted() {
    Bus.$on('form', res => {
      if(res.index == this.data.index){
        this.data = res
        console.log('sele'+ res)
        Bus.$emit('push', res)
      }
    })
  },
  methods: {
    set(e) {
      Bus.$emit('set', this.data)
      console.log(e.target.innerText)
    },
    del() {
      console.log('delete')
    }
  }
}  
</script>

<style lang="scss" scoped>
@import 'assets/common.scss';
.el-form-item__content {
  .el-select {
    width: 100%;
  }
}
</style>
