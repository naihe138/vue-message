/**
 * @file storeJS
 * @author 何文林
 * @date 16/9/18
 */
import Vue from 'vue'
import Vuex from 'vuex'

// 告诉 vue “使用” vuex
Vue.use(Vuex)

const state = {
  list: []
}

const mutations = {
  ADD_ITEM (state, obj) {
    state.list.push(obj)
  }
}
export default new Vuex.Store({
  state,
  mutations
})
