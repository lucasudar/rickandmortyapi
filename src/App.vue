<template>
  <img alt="Vue logo" src="./assets/logo.png">
  <Heroes/>
  <Pagination/>
</template>

<script>
import Heroes from "./components/Heroes";
import Pagination from "./components/Pagination";

export default {
  name: 'App',
  components: {Heroes, Pagination},
  data() {
    return {}
  },
  methods: {}
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  margin-top: 60px;
}

img {
  width: 150px;
  height: 100%;
}
</style>
