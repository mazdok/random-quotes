<template>
  <div class="max-w-screen-md mx-auto flex justify-center items-center flex-col h-full">
    <template v-if="quoteId">
      <span class="text-gray-600">Author</span>
      <h1 class="font-bold text-3xl mb-10">{{quoteId}}</h1>
    </template>

    <template v-if="quotes && quotes.length">
      <transition-group name="fadeUp" tag="ul">
        <li v-for="quote in quotes" :key="quote._id" class="mb-10 group">
          <AuthorQuote
            :quote="quote"
            :hasFooter="false"
            @quoteClicked="handleQuoteClick"
            class="hover:bg-gray-100 cursor-pointer rounded transition ease-in-out duration-300"
          />
          <div class="text-right">
            <span class="text-xs invisible group-hover:visible">Press to copy</span>
          </div>
        </li>
      </transition-group>

      <button
        class="btn btn-secondary btn-spin-img mb-8"
        type="button"
        @click="fetchQuotes()"
        :disabled="isDisabled"
      >
        Load more
        <img v-if="loading" src="@/assets/icons/refresh.svg" alt="arrows" class="w-4 ml-2" />
      </button>
    </template>

    <div v-else>
      <p v-if="!loading">No quotes found for this author...</p>
      <p v-else>Loading...</p>
    </div>
  </div>
</template>

<script>
import AuthorQuote from "@/components/AuthorQuote.vue";
import Constants from "@/constants.js";

export default {
  name: "AuthorQuotes",
  props: {
    quotesPerPage: {
      type: Number,
      default: 3,
    },
  },
  components: {
    AuthorQuote,
  },
  data: () => {
    return {
      quoteId: null,
      quotes: [],
      loading: false,
      page: 1,
      isDisabled: false,
    };
  },
  created() {
    this.quoteId = this.$route.params.id;

    this.loading = true;
    this.fetchQuotes();
  },
  beforeDestroy() {
    this.page = 1;
    this.isDisabled = false;
  },
  methods: {
    fetchQuotes() {
      this.loading = true;
      this.axios({
        method: "get",
        url: Constants.API_AUTHOR_QUOTES.replace("quoteId", this.quoteId),
        params: {
          page: this.page,
          limit: this.quotesPerPage,
        },
      })
        .then(({ data: { quotes } }) => {
          this.isDisabled = !quotes.length;
          this.quotes.push(...quotes);
          this.page++;
        })
        .catch(() => this.$bus.$emit("error"))
        .finally(() => (this.loading = false));
    },
    handleQuoteClick(quote) {
      this.$copyText(quote.quoteText).then(() => {
        this.$bus.$emit("alert", { type: "default", text: "Copied!" });
      });
    },
  },
};
</script>