<template>
    <ProductsCarousel></ProductsCarousel>
</template>

<script>
    
    import ProductsCarousel from './components/ProductsCarousel.vue'

    export default {
        name: 'App2',

        components: {
            ProductsCarousel 
        },

        devServer: {
            disableHostCheck: true
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