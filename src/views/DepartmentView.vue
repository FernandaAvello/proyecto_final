<template lang="pug">
#DepartmentView
  DepartmentList
</template>
<script>
import DepartmentList from '../components/DepartmentList'
import { mapActions } from 'vuex'

export default {
  components: {
    DepartmentList
  },
  methods: {
    ...mapActions('DepartmentStore', ['getDepartments'])
  },
  created () {
    this.getDepartments()
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
#DepartmentView {
  padding: 2% 5%;
}
</style>