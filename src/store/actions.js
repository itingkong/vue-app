import * as types from './mutation-types'

export const setInputValue = function({commit, state}, modeProp) {
  commit(types.SET_FORM_PROP, modeProp)
}