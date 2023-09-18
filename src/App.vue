<template>

<div>
  <navbarComponent />
  <router-view></router-view> 
</div>


</template>

<script>
import navbarComponent from'./assets/navbar.vue'

export default {
  name: 'App',
  components: {
    navbarComponent,

  }
}
</script>

<style>

</style>
