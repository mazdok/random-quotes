<template>
  <blockquote v-if="quote" class="w-full" @click="quoteClicked(quote)">
    <p class="text-2xl border-l-4 border-orange-300 pl-12">{{ quote.quoteText }}</p>

    <router-link v-if="hasFooter" :to="{path: `quotes/${quote.quoteAuthor}`}">
      <footer class="quote-footer">
        <div class="px-3 py-5">
          <p class="font-bold text-lg">{{ quote.quoteAuthor }}</p>
          <cite class="text-gray-600 text-sm">{{ quote.quoteGenre }}</cite>
        </div>
        <img src="@/assets/icons/next.svg" alt="arrow" class="centered right-0 mr-4 w-4" />
      </footer>
    </router-link>
  </blockquote>
</template>

<script>
export default {
  name: "AuthorQuote",
  props: {
    quote: {
      type: Object,
    },
    hasFooter: {
      type: Boolean,
      default: true,
    },
  },
  methods: {
    quoteClicked(quote) {
      this.$emit('quoteClicked', quote)
    }
  }
};
</script>

<style scoped lang="postcss">
.quote-footer {
  @apply cursor-pointer ml-10 mt-16 text-gray-800 transition ease-in duration-100 relative;
}

.quote-footer > div {
  @apply transition ease-in duration-300;
}

.quote-footer:hover {
  @apply text-white;
}

.quote-footer:hover > div {
  @apply bg-gray-800;
}

.centered {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}
</style>
