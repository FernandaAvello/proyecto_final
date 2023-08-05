<template lang="pug">
#DepartmentList
  v-breadcrumbs(:items="itemsBreadcrumbs" divider="/")
  v-data-table(:headers="headers" :items="departments" :items-per-page="5" class="elevation-0" hide-default-footer :page="page")
    template(v-slot:item.actions="{ item }")
      v-btn.text-capitalize(color="primary" @click="goToDepartmentEmployee(item.DepartmentID)") Ver empleados
  v-pagination.my-10(v-model="page" :length="pageCount" circle prev-icon="mdi-chevron-left" next-icon="mdi-chevron-right" @click="page++")
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      page: 1,
      itemsBreadcrumbs: [
        { text: 'Home', disabled: false, href: 'home' },
        { text: 'Departamentos', disabled: true }
      ],
      headers: [
        { text: 'Identificador', value: 'DepartmentID', align: 'center', class: "v-data-table__header" },
        { text: 'Nombre departamento', value: 'Name', sortable: false, class: "v-data-table__header" },
        { text: 'Grupo', value: 'GroupName', sortable: false, class: "v-data-table__header" },
        { text: 'Acciones', value: 'actions', align: 'center', sortable: false, class: "v-data-table__header" },
      ]
    }
  },
  methods: {
    goToDepartmentEmployee (id) {
      this.$router.push({ name: 'departmentEmployee', params: { id }})
    }
  },
  computed: {
    ...mapGetters('DepartmentStore', ['departments']),
    pageCount () {
      return Math.ceil(this.departments.length/5)
    }
  }
}
</script>
<style lang="scss">
@import '@/styles/main.scss';
</style>