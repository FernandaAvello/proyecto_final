import axios from 'axios'

export const getEmployees = ({commit}) => {
  return axios.get('employee.json')
    .then((response) => {
      commit('SET_EMPLOYEES', response.data)
    })
  .catch(() => console.log('error'))
}
export const getEmployeesByDepartment = ({commit}) => {
  return axios.get('employeedepartmenthistory.json')
    .then((response) => {
      commit('SET_EMPLOYEES_BY_DEPARTMENT', response.data)
    })
  .catch(() => console.log('error'))
}
export const getEmployeePayHistory = ({commit}) => {
  return axios.get('employeepayhistory.json')
    .then((response) => {
      commit('SET_EMPLOYEES_PAY_HISTORY', response.data)
    })
  .catch(() => console.log('error'))
}
