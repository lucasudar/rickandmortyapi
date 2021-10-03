<template>
  <div>
    <ul class="pagination">
      <li class="pagination-item">
        <button
            type="button"
            @click="onClickFirstPage"
            :disabled="isInFirstPage"
        >
          First
        </button>
      </li>

      <li class="pagination-item">
        <button
            type="button"
            @click="onClickPreviousPage"
            :disabled="isInFirstPage"
        >
          &laquo;
        </button>
      </li>

      <li
          v-for="page in pages"
          class="pagination-item"
          :key="page.name"
      >
        <button
            type="button"
            :class="{ active: isPageActive(page.name) }"
            @click="onClickPage(page.name)"
            :disabled="page.isDisabled"
        >
          {{ page.name }}
        </button>
      </li>

      <li class="pagination-item">
        <button
            type="button"
            @click="onClickNextPage"
            :disabled="isInLastPage"
        >
          &raquo;
        </button>
      </li>

      <li class="pagination-item">
        <button
            type="button"
            @click="onClickLastPage"
            :disabled="isInLastPage"
        >
          Last
        </button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    maxVisibleButtons: {
      type: Number,
      required: false,
      default: 5
    },
    totalPages: {
      type: Number,
      required: true
    },
    perPage: {
      type: Number,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    }
  },
  computed: {
    startPage() {
      if (this.currentPage === 1) {
        return 1;
      }

      if (this.currentPage === this.totalPages) {
        return this.totalPages - this.maxVisibleButtons;
      }

      return this.currentPage - 1;
    },
    pages() {
      const range = [];

      for (
          let i = this.startPage;
          i <= Math.min(this.startPage + this.maxVisibleButtons - 1, this.totalPages);
          i++
      ) {
        range.push({
          name: i,
          isDisabled: i === this.currentPage
        });
      }
      return range;
    },
    isInFirstPage() {
      return this.currentPage === 1;
    },
    isInLastPage() {
      return this.currentPage === this.totalPages;
    }
  },
  methods: {
    onClickFirstPage() {
      this.$emit('pagechanged', 1);
    },
    onClickPreviousPage() {
      this.$emit('pagechanged', this.currentPage - 1);
    },
    onClickPage(page) {
      this.$emit('pagechanged', page);
    },
    onClickNextPage() {
      this.$emit('pagechanged', this.currentPage + 1);
    },
    onClickLastPage() {
      this.$emit('pagechanged', this.totalPages);
    },
    isPageActive(page) {
      return this.currentPage === page;
    }
  }
}
</script>

<style scoped>
.pagination {
  list-style-type: none;
}

.pagination-item {
  display: inline-block;
  padding: 10px;
}
button {
  font-size: 15px;
  padding: 3px 13px;
  color: black;
  background-color: white;
  border: 1px solid #5e5e5e;
  transition-duration: 0.4s;
}

.active {
  background-color: #4CAF50;
  color: white;
}
.pagination-item button:hover:not(.active) {
  background-color: #4CAF50;
  color: white;
}
</style>