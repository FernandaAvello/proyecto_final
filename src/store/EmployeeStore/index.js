import * as actions from './actions'
import mutations from './mutations'
import * as getters from './getters'

const EmployeeStore = {
  namespaced: true,
  state: {
    employees: [],
    employeesByDepartment: [],
    employeesPayHistory: []
  },
  getters,
  mutations,
  actions
}

export default EmployeeStore