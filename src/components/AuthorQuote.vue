<template>
  <div v-if="quote" class="flex items-center h-full">
    <blockquote class="max-w-lg mx-auto">
      <p class="text-2xl border-l-4 border-orange-300 pl-12">{{ quote.quoteText }}</p>
      <footer class="quote-footer">
        <div class="px-3 py-5">
          <p class="font-bold text-lg">{{ quote.quoteAuthor }}</p>
          <cite class="text-gray-600 text-sm">{{ quote.quoteGenre }}</cite>
        </div>
        <img src="@/assets/icons/next.svg" alt="arrow" class="centered right-0 mr-4 w-4"/>
      </footer>
    </blockquote>
  </div>
</template>

<script>
export default {
  name: "quote",
  props: {
    quote: {
      type: Object,
    },
  },
};
</script>

<style scoped lang="postcss">
.quote-footer {
  @apply cursor-pointer ml-10 mt-16 text-gray-800 transition relative;
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
