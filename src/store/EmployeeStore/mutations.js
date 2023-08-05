const mutations = {
  'SET_EMPLOYEES' (state, value) {
    state.employees = value
  },
  'SET_EMPLOYEES_BY_DEPARTMENT' (state, value) {
    state.employeesByDepartment = value
  },
  'SET_EMPLOYEES_PAY_HISTORY' (state, value) {
    state.employeesPayHistory = value
  }
}
export default mutations
