<template>
  <div id="app" class="container mx-auto flex flex-col h-full p-4">
    <header class="text-right">
      <button
        class="bg-purple-300 hover:bg-purple-400 text-gray-800 font-bold py-2 px-4 inline-flex items-center rounded"
        @click="getRandomQuote"
        type="button"
      >
        Get quote
        <img src="@/assets/icons/refresh.svg" alt="arrows" class="w-4 ml-2" />
      </button>
    </header>

    <main class="flex-auto">
      <AuthorQuote :quote="quote" />
    </main>

    <footer
      class="text-center text-gray-600 text-sm"
    >Developed by Pavlo Grydzhuk for a web dev course</footer>
  </div>
</template>

<script>
import AuthorQuote from "./components/AuthorQuote.vue";

export default {
  name: "App",
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
        .get("https://quote-garden.herokuapp.com/api/v2/quotes/random")
        .then((response) => (this.quote = response.data.quote));
    },
  },
  created() {
    this.getRandomQuote();
  },
};
</script>

<style>
html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
