<template>
  <div class="edit-wrap">
    <p>索引：{{form.index}}</p>
    <el-form ref="form" :model="form" label-width="60px">
      <el-form-item label="标签名">
        <el-input v-model="form.lable"></el-input>
      </el-form-item>
      <el-form-item label="属性">
        <el-input v-model="form.prop" placeholder="只能输入字母"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit" class="btn">保存</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import Bus from 'assets/js/bus'

export default {
  data() {
    return {
      form: {
        lable: '',
        prop: ''
      }
    }
  },
  mounted() {
    Bus.$on('set', res => {
      this.form = res
    })
  },
  methods: {
    onSubmit() {
      Bus.$emit('form', this.form)
      console.log('form===='+ this.form);
    }
  }
}
</script>

<style lang="scss" scoped>
@import 'assets/common.scss';

.edit-wrap {
  width: 20%;
  height: 100%;
  border: 1px solid $color;
  border-radius: 4px;
  padding: 10px 5px;
  .el-form-item {
    margin-bottom: 10px;
  }

  .btn {
    margin-top: 10px;
  }
}
</style>
