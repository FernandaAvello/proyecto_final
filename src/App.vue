<template lang="pug">
v-app
  v-app-bar(app elevation="0" dark)
    h1.mx-4.white--text Compañía
    div.v-app-bar__desktop
      router-link.d-flex.mx-4(:to="{ name: 'home' }")
        span Inicio
      v-divider(vertical inset color="white")
      router-link.d-flex.mx-4(:to="{ name: 'department' }")
        span Departamentos
      v-divider(vertical inset color="white")
      router-link.d-flex.mx-4(:to="{ name: 'employee' }")
        span Empleados
      v-divider(vertical inset color="white")
      router-link.d-flex.mx-4(:to="{ name: 'shift' }")
        span Turnos
    v-spacer
    v-menu(bottom dark right)
      template(v-slot:activator="{ on, attrs }")
        v-btn.v-app-bar__mobile(icon dark v-bind="attrs" v-on="on")
          v-icon mdi-menu
      v-list
        v-list-item(:to="{ name: 'home' }" link)
          v-list-item-title.px-4 Inicio
        v-list-item(:to="{ name: 'department' }" link)
          v-list-item-title.px-4 Departamentos
        v-list-item(:to="{ name: 'employee' }" link)
          v-list-item-title.px-4 Empleados
        v-list-item(:to="{ name: 'shift' }" link)
          v-list-item-title.px-4 Turnos
  v-main
    router-view
  v-footer(padless)
    v-card.text-center.px-6(flat tile dark width="100%" height="50px")
      v-card-text.mt-2 {{ new Date().getFullYear() }} - #[strong M. Fernanda Avello]
</template>
</template>
<script>
export default {
  name: 'App',

  data: () => ({
    drawer: false,
    group: null,
    items: [
      { title: 'Home', icon: 'mdi-home-city' },
      { title: 'My Account', icon: 'mdi-account' },
      { title: 'Users', icon: 'mdi-account-group-outline' },
    ],
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-linkedin',
      'mdi-instagram'
    ]
  }),
};
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
.v-app-bar__mobile {
    display: none !important;
  }
  .v-app-bar__desktop {
    display: flex;
    align-items: center;
  }

@media (max-width: 600px) {
  .v-app-bar__mobile {
    display: block !important;
  }
  .v-app-bar__desktop {
    display: none !important;
  }
}
</style>

