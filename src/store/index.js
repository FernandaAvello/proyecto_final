import Vue from 'vue'
import Vuex from 'vuex'
import DepartmentStore from './DepartmentStore'
import EmployeeStore from './EmployeeStore'
import ShiftStore from './ShiftStore'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
    DepartmentStore,
    EmployeeStore,
    ShiftStore
  }
})
