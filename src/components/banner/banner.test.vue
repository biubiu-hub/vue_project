<template>
  <div id="app">
    <h2>测试轮播图</h2>
    <banner :data="bannerData" collectionName="banner"/>
  </div>
</template>

<script>
import Banner from "./components/banner/banner.vue";

export default {
  name: "App",
  data:()=>({
    bannerData:[]
  }),
  methods: {
  },
  mounted(){
      setTimeout(()=>this.bannerData=[{_id:1,banner:'/images/img_1.jpg',title:'titl1',sub_title:'subtitle1'},{_id:2,banner:'/images/img_1.jpg',title:'titl2',sub_title:'subtitle2'},{_id:3,banner:'/images/img_1.jpg',title:'titl3',sub_title:'subtitle3'}],2000)

  },
  components: {
    Banner
  },
};
</script>

<style>
</style>
