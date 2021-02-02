<template>
  <div id="app">
    <Nav></Nav>
    <Tab></Tab> 
  </div>
</template>

<script>

import Nav from './components/Nav.vue'
import Tab from './components/Tab.vue'

export default {
  name: 'App',
  components: {
    Nav,
    Tab
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
