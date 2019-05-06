<template>
  <div id="app">
    <h1 class="text-center">Markdown Editor</h1>
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
  color: #2c3e50;
}
</style>
