<template>
  <div class="max-w-screen-md mx-auto flex justify-center items-center h-full">
    <AuthorQuote v-if="quote" :quote="quote" />
    <p v-else>Loading...</p>
  </div>
</template>

<script>
import AuthorQuote from "../components/AuthorQuote";
import Constants from "@/constants.js"

export default {
  name: "Home",
  components: {
    AuthorQuote,
  },
  data: () => {
    return {
      quote: null,
    };
  },
  methods: {
    getRandomQuote() {
      this.axios
        .get(Constants.API_RANDOM_QUOTES)
        .then(({ data: { quote } }) => (this.quote = quote))
        .catch(() => {
          this.$bus.$emit("error");
        });
    },
  },
  created() {
    this.$bus.$on("get-random-quote", () => {
      this.getRandomQuote();
    });

    this.getRandomQuote();
  },
};
</script>