<template>
  <div>
    <Pagination
        v-model="page"
        :maxPage="pages"
        :update="changePage"
    />
  </div>
</template>

<script>
import Pagination from "@2alheure/vue-pagination";
// import {mapGetters} from "vuex"

export default {
  components: {
    Pagination
  },
  data() {
    return {
      page: this.$store.getters.page
    }
  },
  watch: {
    page() {
      return this.$store.commit("updatePage", {
        value: this.page
      })
    }
  },
  methods: {
  },
  // computed: mapGetters(["pages"])
  computed: {
    pages() {
      return this.$store.getters.pages
    },
    changePage() {
      return this.$store.dispatch("fetchHeroes", {
        value: this.$store.getters.page
      })
    }
  }
}
</script>

<style scoped>

</style>