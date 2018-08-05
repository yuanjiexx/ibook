<template>
  <div id="app">
    <router-link to="/HelloWorld"><button>{{wor}}</button></router-link>
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      hel: 'index',
      wor: 'person'
    }
  },
  components: {

  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
  button { position:absolute; top:0; right:0;}
</style>
