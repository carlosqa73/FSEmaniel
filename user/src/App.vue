<template>
  <div id="app">
    <!--img alt="Vue logo" src="./assets/logo.png"-->
    <NewsCarousel></NewsCarousel>
  </div>
</template>

<script>
import NewsCarousel from './components/NewsCarousel.vue'

export default {
  name: 'App',
  components: {
    NewsCarousel
  }
}
</script>

<style>
#app {
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}
</style>
