import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
      dragType: null, //判断拖拽的类型   leftDrag 表示左下的拖拽  rightDrag 表示右边的内容区域元素的拖拽
      whetherDelete: false,//是否执行 右侧拖拽出范围 删除
      isEnter : false , //是否可执行enter事件  tem.vue文件
  },
  mutations: {
  },
    //异步改变数据方法
  actions: {},
  //获取数据方法 主要对数据进行过滤处理
  getters: {}
})