<template lang="pug">
#EmployeeDetailView
  EmployeeDetail
</template>
<script>
import EmployeeDetail from '../components/EmployeeDetail.vue'
import { mapActions } from 'vuex'

export default {
  components: {
    EmployeeDetail
  },
  methods: {
    ...mapActions('EmployeeStore', ['getEmployees', 'getEmployeePayHistory'])
  },
  async created () {
    await this.getEmployees()
    await this.getEmployeePayHistory()
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
#EmployeeDetailView {
  padding: 2% 5%;
}
</style>