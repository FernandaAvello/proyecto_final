<template lang="pug">
#EmployeeDetail
  v-breadcrumbs(:items="itemsBreadcrumbs" divider="/")
  v-tabs(v-model="tab" align-with-title)
    v-tabs-slider(color="primary")
    v-tab Detalle
    v-tab Información de pago
  v-tabs-items(v-model="tab")
    v-tab-item
      .detail.mt-4.ml-10
        p #[strong Identificador:] {{ employee.businessentityid }}
        p #[strong Número Nacional:] {{ employee.nationalidnumber }}
        p #[strong Título de Trabajo:] {{ employee.jobtitle }}
        p #[strong Fecha de Nacimiento:] {{ employee.birthdate }}
        p #[strong Estado Civil:] {{ employee.maritalstatus }}
        p #[strong Género:] {{ employee.gender }}
        p #[strong Fecha de Contratación:] {{ employee.hiredate }}
        p #[strong Horas de Vacaciones:] {{ employee.vacationhours }}
    v-tab-item
      .detail.mt-4.ml-10
        p #[strong Identificador:] {{ payHistory.BusinessEntityID }}
        p #[strong Fecha de cambio de tarifa:] {{ formatDate(payHistory.RateChangeDate) }}
        p #[strong Tarifa:] ${{ payHistory.Rate }}
        p #[strong Frecuencia de pago:] {{ payHistory.PayFrequency }}
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  data () {
    return {
      tab: null,
      itemsBreadcrumbs: [
        { text: 'Home', disabled: false, link: true, exact: true, to: { name: 'home' } },
        { text: 'Empleados', disabled: false, link: true, exact: true, to: { name: 'employee' } },
        { text: 'Detalle Empleado', disabled: true }
      ],
    }
  },
  methods: {
    formatDate (date) {
      return new Intl.DateTimeFormat('cl-ES', { dateStyle: 'long' }).format(new Date(date))
    }
  },
  computed: {
    ...mapGetters('EmployeeStore', ['employees', 'employeesPayHistory']),
    employee () {
      const id = this.$route.params.id
      return this.employees.find(e => e.businessentityid === id)
    },
    payHistory () {
      const id = this.$route.params.id
      return this.employeesPayHistory.find(e => e.BusinessEntityID === id)
    }
  }
}
</script>