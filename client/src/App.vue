<template>
  <div id="app">
    <Document/>
  </div>
</template>

<script>
import Document from './components/Document.vue'

export default {
  name: 'app',
  components: {
    Document
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
</style>
