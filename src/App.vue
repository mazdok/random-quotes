<template>
  <div id="app" class="container mx-auto flex flex-col h-full p-4">
    <AppAlert :show="show" :options="alertOptions" />

    <AppHeader />

    <main class="flex-auto">
      <transition :name="transitionName">
        <router-view></router-view>
      </transition>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AppFooter from "./components/AppFooter.vue";
import AppAlert from "./components/AppAlert.vue";
import Constants from '@/constants.js';

export default {
  name: "Home",
  components: {
    AppHeader,
    AppFooter,
    AppAlert,
  },
  data: () => {
    return {
      show: false,
      alertOptions: null,
      transitionName: null,
    };
  },
  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.transitionName = to.path === Constants.ROUTE_ROOT ? "fadeUp" : "fadeDown";
      },
    },
  },
  created() {
    this.$bus.$on("alert", (data) => {
      this.show = false;
      clearTimeout(clear);

      this.show = true;
      this.alertOptions = data;
      const clear = setTimeout(() => (this.show = false), Constants.ALERT_DUARATION);
    });
  },
};
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Nunito+Sans:ital,wght@0,200;1,400;1,700&display=swap');

html,
body {
  height: 100%;
  width: 100%;
  padding: 0;
  margin: 0;
}

#app {
  font-family: 'Nunito Sans', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
