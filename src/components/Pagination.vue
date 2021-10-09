<template>
  <div>
    <Pagination
        v-model="page"
        :maxPage="pages"
        update="page"
    />
  </div>
</template>

<script>
import Pagination from "@2alheure/vue-pagination";
import {mapGetters} from "vuex"

export default {
  components: {
    Pagination
  },
  data() {
    return {
      page: 1
    }
  },
  computed: mapGetters(["pages"])
}
</script>

<style scoped>

</style>