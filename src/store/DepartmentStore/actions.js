import axios from 'axios'

export const getDepartments = ({commit}) => {
  return axios.get('department.json')
    .then((response) => {
      commit('SET_DEPARTMENTS', response.data)
    })
  .catch(() => console.log('error'))
}
