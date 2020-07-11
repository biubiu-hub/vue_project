<template>
  <div class="pages__padding">
    <uc-cell
      v-for="(item,index) of follow"
      :data="item"
      :index="index"
      :key="item._id"
      collectionName="follow"
    />
  </div>
</template>
<script>
import UcCell from "../components/uc-cell/uc-cell.vue";
// import axios from "axios";

export default {
  name: "follow",
  components: { UcCell },
  data() {
    return {
      follow: []
    }
  },
  mounted() {
    axios({
      url: "/api/goods/follow",
      params: {
        _limit: 15
      }
    }).then(res => res.data.err === 0 && (this.follow = res.data.data));
  }
};
</script>
<style scoped>
.follow {
  padding-top: 0.6rem;
}
</style>