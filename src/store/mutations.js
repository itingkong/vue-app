import * as types from './mutation-types'

const mutations ={
  [types.SET_FORM_PROP](state, modeProp) {
    state.modeProp = modeProp
  }
}

export default mutations