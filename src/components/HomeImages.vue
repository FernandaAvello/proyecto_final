<template lang="pug">
v-container(fluid)
  v-row
    v-col(lg="4" md="4" sm="1" xs="1")
      router-link.d-flex(to="/departamentos")
        v-img(src="@/assets/departamentos.jpg" height="300px" width="300px")
    v-col(lg="4" md="4" sm="1" xs="1")
      router-link.d-flex(to="/empleados")
        v-img(src="@/assets/empleados.jpg" height="300px" width="300px")
    v-col(lg="4" md="4" sm="1" xs="1")
      router-link.d-flex(to="/turnos")
        v-img(src="@/assets/turnos.jpg" height="300px" width="300px")
</template>
