import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const DepartmentStore = {
  namespaced: true,
  state: {
    departments: []
  },
  getters,
  mutations,
  actions
}

export default DepartmentStore