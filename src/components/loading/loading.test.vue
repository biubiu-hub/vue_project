<template>
  <div id="app">
    <h2>c测试 loading</h2>
    
    <loading v-show="list.length==0" />
  </div>
</template>

<script>
import Loading from "./components/loading";

export default {
  name: "App",
  data: () => ({
    list: []
  }),
  methods: {},
  mounted() {
    setTimeout(() => this.list = ["aa", "bb", "cc"], 2000);
  },
  components: {
    Loading
  }
};
</script>

<style>
</style>
