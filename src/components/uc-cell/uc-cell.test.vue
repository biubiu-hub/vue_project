<template>
  <div id="app">
    <h2>测试 cell</h2>
    <uc-cell :data="cellData" :index="cellData.index" collectionName="follow"/>
    <uc-cell :data="cellData" />
    <uc-cell v-for="(item,index) of list" :data="item" :index="index" :key="item.id" collectionName="home" :isAdd="true" @add-item="add(item,index)"/>
  </div>
</template>


<script>
import UcCell from "./components/uc-cell/uc-cell.vue";

export default {
  name: "App",
  data: () => ({
    list: [
      { _id: 1, title: "xx", des: "00" },
      { _id: 2, title: "xx2", des: "002" }
    ],
    cellData: { _id: 3, title: "xx3", des: "003", index: 0 }
    // cellData:{_id:3,title:'xx3',des:'003',index:1},
  }),
  methods: {
    add(item,index){
      console.log('add',item,index)
    }
  },
  mounted() {
    // setTimeout(() => this.list = ["aa", "bb", "cc"], 2000);
  },
  components: {
    UcCell
  }
};
</script>

<style>
</style>
