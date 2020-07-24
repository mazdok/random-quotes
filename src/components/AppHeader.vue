<template>
  <header class="text-right">
    <button v-if="backMode" class="btn btn-secondary" type="button" @click="goBack()">Go back</button>

    <button
      v-else
      :class="['btn btn-secondary', {'btn-spin-img': isSpinning}]"
      @click="getRandomQuote"
      type="button"
    >
      Get quote
      <img src="@/assets/icons/refresh.svg" alt="arrows" class="w-4 ml-2" />
    </button>
  </header>
</template>

<script>
export default {
  name: "Header",
  data: () => {
    return {
      backMode: false,
      isSpinning: false,
    };
  },
  methods: {
    getRandomQuote() {
      // much better to keep 'loading' state in a central store
      this.isSpinning = true;
      setTimeout(() => (this.isSpinning = false), 1000);
      
      this.$bus.$emit("get-random-quote");
    },
    goBack() {
      this.$router.go(-1);
    },
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.backMode = !!to.params.id;
      },
    },
  },
};
</script>