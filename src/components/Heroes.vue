<template>
  <div class="container">
    <h2>People form JSON placeholder</h2>
    <div class="card">
      <div class="heroes" v-for="hero in allHeroes" :key="hero.id">
        <p><img :src="hero.image" width="450" height="450" alt=""></p>
        <h3>{{ hero.name }}</h3>
        <h4>Species: {{ hero.species }}</h4>
        <h4>From: {{ hero.origin.name }}</h4>
      </div>
    </div>
  </div>
</template>

<script>
import {mapGetters, mapActions} from "vuex"

export default {
  async mounted() {
    await this.$store.dispatch("fetchHeroes", {
      value: this.$store.getters.page
    })
  },
  methods: mapActions(["fetchHeroes"]),
  computed: mapGetters(["allHeroes"])
}
</script>

<style scoped>
.container {
  width: 1000px;
  margin: 0 auto;
}
.card {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  padding: 10px;

}
.heroes {
  width: 30%;
  margin-bottom: 20px;
  border: 1px solid #000;
  border-radius: 16px;
}

</style>