import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const ShiftStore = {
  namespaced: true,
  state: {
    shifts: []
  },
  getters,
  mutations,
  actions
}

export default ShiftStore