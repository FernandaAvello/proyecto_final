<template lang="pug">
#DepartmentEmployeeView
  DepartmentEmployeeList
</template>
<script>
import DepartmentEmployeeList from '../components/DepartmentEmployeeList'
import { mapActions } from 'vuex'

export default {
  components: {
    DepartmentEmployeeList
  },
  methods: {
    ...mapActions('EmployeeStore', ['getEmployees', 'getEmployeesByDepartment'])
  },
  async created () {
    await this.getEmployees()
    await this.getEmployeesByDepartment()
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
#DepartmentEmployeeView {
  padding: 2% 5%;
}
</style>