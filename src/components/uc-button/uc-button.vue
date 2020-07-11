<template>
  <div class="uc-button">
    <button 
    class="login-btn"
    :style="{background:bgColor}" 
    @click="$emit('click')">{{text}}</button>
  </div>
</template>
<script>
export default {
  name: "uc-button",
  data() {
    return {};
  },
  props: {
    text: {
      type: String,
      default: "按钮"
    },
    bgColor: {
      type: String,
      default: "#4c4f50"
    }
  }
};
</script>
<style scoped>
.login-btn {
  width: 4.65rem;
  height: 0.65rem;
  background: #4c4f50;
  color: #fff;
  text-align: center;
  line-height: 0.65rem;
  border-radius: 8px;
  display: block;
  margin-top: 0.62rem;
  font-size: 0.28rem;
  border: none;
  outline: none;
}
</style>