<template>
  <transition v-if="show" name="bounce" tag="div">
    <div class="fixed flex justify-center left-0 right-0">
      <div
        :class="['alert', 'p-2', 'items-center', 'leading-none', 'rounded-full', 'flex', 'lg:inline-flex', `alert-${options.type}`]"
        role="alert"
      >
        <span class="font-semibold mx-2 text-left flex-auto">{{options.text}}</span>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  props: {
    show: Boolean,
    options: {
      type: Object,
      default: () => {
        return {
          type: "error",
          text: "Oops! Something went wrong",
        };
      },
    },
  },
};
</script>

<style lang="postcss" scoped>
.alert {
  top: 0.15rem;
}

.alert-error {
  @apply bg-red-800 text-red-100;
}

.alert-default {
  @apply bg-gray-800 text-gray-100;
}
</style>