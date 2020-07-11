<template>
  <div id="app">
    <Loading v-show="$root.bLoading"/>
    <Header v-show="$root.bNav" />
    <!-- <Home /> -->
    <!-- <follow/> -->
    <!-- <column/> -->
    <!-- <Login/> -->
    <!-- <reg/> -->
    <!-- <user /> -->
    <router-view></router-view>
    <Footer v-show="$root.bFoot" />
  </div>
</template>
<script>
import Loading from "./components/loading";
import Header from "./layouts/header.vue";
// import Home from "./pages/home.vue"
// import Follow from "./pages/follow.vue"
// import Column from "./pages/colmn.vue";
// import Login from "./pages/login.vue";
// import Reg from "./pages/reg.vue";
// import User from "./pages/user.vue";

import Footer from "./layouts/footer.vue";

export default {
  name: "App",
  data: () => ({}),
  methods: {},
  mounted() {},
  components: {
    Header,
    // Home,
    // Follow,
    // Column,
    // Login,
    // Reg
    // User
    Footer,
    Loading
  },
  watch: {
    $route: {
      //路由监听
      handler(to) {
        let path = to.path;
        if (/home|follow|column|xx/.test(path)) {
          this.$root.bNav = this.$root.bFoot = true;
        }
        if (/detail|login|reg/.test(path)) {
          this.$root.bNav = this.$root.bFoot = false;
        }
        if (/user/.test(path)) {
          this.$root.bNav = false;
          this.$root.bFoot = true;
        }
      },
      immediate: true
    }
  }
};
</script>

<style>
</style>
