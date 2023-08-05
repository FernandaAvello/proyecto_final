<template lang="pug">
#DepartmentEmployeeList
  v-breadcrumbs(:items="itemsBreadcrumbs" divider="/")
  v-data-table(:headers="headers" :items="items" :items-per-page="5" class="elevation-0" hide-default-footer :page="page")
  v-pagination.my-10(v-model="page" :length="pageCount" circle prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right" @click="page++")
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      page: 1,
      itemsBreadcrumbs: [
        { text: 'Home', disabled: false, link: true, exact: true, to: { name: 'home' } },
        { text: 'Departamentos', disabled: false, link: true, exact: true, to: { name: 'department' } },
        { text: 'Empleados Departamento', disabled: true }
      ],
      headers: [
        { text: 'Identificador', value: 'businessentityid', align: 'center', class: "v-data-table__header" },
        { text: 'Cédula (Número nacional)', value: 'nationalidnumber', class: "v-data-table__header" },
        { text: 'Título de trabajo', value: 'jobtitle', class: "v-data-table__header" },
        { text: 'Fecha de contratación', value: 'hiredate', class: "v-data-table__header" },
        { text: 'Horas vacaciones', value: 'vacationhours', align: 'center', class: "v-data-table__header" },
      ]
    }
  },
  computed: {
    ...mapGetters('EmployeeStore', ['employees', 'employeesByDepartment']),
    pageCount () {
      return Math.ceil(this.items.length/5)
    },
    items () {
      const departmentID = this.$route.params.id // recupero el departmentID de la ruta
      const employeesInDepartment = this.employeesByDepartment.filter((e) => e.DepartmentID === departmentID).map((e) => e.BusinessEntityID) // recupero los empleados del departamento seleccionado
      const employees = []
      employeesInDepartment.forEach(e => {
        employees.push(this.employees.filter(emp => emp.businessentityid === e)[0]) // pusheo los empleados que se encontraron
      })
      return employees
    }
  },
}
</script>
<style lang="scss">
@import '@/styles/main.scss';
</style>