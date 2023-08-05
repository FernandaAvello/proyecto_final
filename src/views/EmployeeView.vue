<template lang="pug">
#EmmployeeView
  EmployeeList
</template>
<script>
import EmployeeList from '../components/EmployeeList'
import { mapActions } from 'vuex'

export default {
  components: {
    EmployeeList
  },
  methods: {
    ...mapActions('EmployeeStore', ['getEmployees'])
  },
  created () {
    this.getEmployees()
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
#EmmployeeView {
  padding: 2% 5%;
}
</style>