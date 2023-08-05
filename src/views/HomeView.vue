<template lang="pug">
#HomeView
  HomeImages
</template>

<script>
  import HomeImages from '../components/HomeImages'

  export default {
    components: {
      HomeImages,
    },
  }
</script>
<style lang="scss" scoped>
@import '@/styles/main.scss';
#HomeView {
  padding: 8% 5%;
}
</style>
