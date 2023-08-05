<template lang="pug">
#EmployeeList
  v-breadcrumbs(:items="itemsBreadcrumbs" divider="/")
  .d-flex
    v-text-field.mr-4(v-model="search" type="number" label="Buscar por Identificador" single-line hide-details outlined dense)
    v-text-field.mr-4(type="date" label="Fecha de contratación(Inicio)" single-line hide-details outlined dense)
    v-text-field(type="date" label="Fecha de contratación(Fin)" single-line hide-details outlined dense)
  v-btn.text-capitalize.mt-3(color="primary") Filtrar
  v-data-table.mt-5(:headers="headers" :items="employees" :items-per-page="5" class="elevation-0" hide-default-footer :page="page" :search="search")
    template(v-slot:item.actions="{ item }")
      v-btn.text-capitalize(color="primary" @click="goToEmployeeDetail(item.businessentityid)") Ver detalle
  v-pagination.my-10(v-model="page" :length="pageCount" circle prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right" @click="page++" :total-visible="10")
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      search: '',
      page: 1,
      itemsBreadcrumbs: [
        { text: 'Home', disabled: false, href: 'home' },
        { text: 'Empleados', disabled: true, href: 'employee' }
      ],
      headers: [
        { text: 'Identificador', value: 'businessentityid', align: 'center', sortable: true, class: "v-data-table__header" },
        { text: 'Cédula(Número Nacional)', value: 'nationalidnumber', sortable: false, class: "v-data-table__header" },
        { text: 'Fecha de contratación', value: 'hiredate', sortable: false, class: "v-data-table__header" },
        { text: 'Acciones', value: 'actions', sortable: false, align: 'center', class: "v-data-table__header" },
      ]
    }
  },
  computed: {
    ...mapGetters('EmployeeStore', ['employees']),
    pageCount () {
      return Math.ceil(this.employees.length/5)
    }
  },
  methods: {
    goToEmployeeDetail (id) {
      this.$router.push({ name: 'employeeDetail', params: { id }})
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/main.scss';
</style>