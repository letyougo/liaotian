<template>
  <div id="app">

    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app',
  computed(){
      this.$store.dispatch('init')
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  position: absolute;
  left: 0;
  top: 0;
  bottom:0;
  right: 0;
  padding: 20px;;
}
</style>
