<template lang="pug">
#ShiftView
  ShiftList(:shifts="shifts")
</template>
<script>
import ShiftList from '../components/ShiftList'
import { mapActions, mapGetters } from 'vuex'

export default {
  components: {
    ShiftList
  },
  methods: {
    ...mapActions('ShiftStore', ['getShifts']),
  },
  computed: {
    ...mapGetters('ShiftStore', ['shifts'])
  },
  created () {
    this.getShifts()
  }
}
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
#ShiftView {
  padding: 2% 5%;
}
</style>