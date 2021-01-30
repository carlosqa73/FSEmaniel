<template>
   <Avatar></Avatar>
</template>

<script>
    
    import Avatar from './components/Avatar.vue'

    export default {
        name: 'AppAvatar',

        components: {
            Avatar
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