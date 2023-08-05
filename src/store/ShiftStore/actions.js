import axios from '@/plugins/axios'

export const getShifts = ({commit}) => {
  return axios.get('shift.json')
    .then((response) => {
      commit('SET_SHIFTS', response.data)
    })
  .catch(() => console.log('error'))
}