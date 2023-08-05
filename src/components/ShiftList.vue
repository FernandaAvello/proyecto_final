<template lang="pug">
#ShiftList
  v-breadcrumbs(:items="itemsBreadcrumbs" divider="/")
  v-data-table(:headers="headers" :items="shifts" class="elevation-0" hide-default-footer)
    template(v-slot:item.StartTime="{ item }")
      p.mt-2 {{ item.StartTime }}
    template(v-slot:item.EndTime="{ item }")
      p.mt-2 {{ item.EndTime }}
    template(v-slot:item.ModifiedDate="{ item }")
      p.mt-2 {{ formatDate(item.ModifiedDate) }}
</template>
<script>
export default {
  props: {
    shifts: {
      type: Array,
      default: () => []
    }
  },
  data () {
    return {
      itemsBreadcrumbs: [
        { text: 'Home', disabled: false, href: 'home' },
        { text: 'Turnos', disabled: true }
      ],
      headers: [
        { text: 'Identificador', value: 'ShiftID', align: 'center', class: "v-data-table__header" },
        { text: 'Nombre del Turno', value: 'Name', class: "v-data-table__header" },
        { text: 'Hora Inicio', value: 'StartTime', class: "v-data-table__header" },
        { text: 'Hora Término', value: 'EndTime', class: "v-data-table__header" },
        { text: 'Fecha de Modificación', value: 'ModifiedDate', class: "v-data-table__header" },
      ]
    }
  },
  methods: {
    formatDate (date) {
      return new Intl.DateTimeFormat('cl-ES', { dateStyle: 'long' }).format(new Date(date))
    },
  }
}
</script>
<style lang="scss">
@import '@/styles/main.scss';
</style>