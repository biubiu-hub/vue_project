<template>
  <div class="uc-input">
   <input :type="type" :value="value" @input="$emit('input',$event.target.value)">
   <span>{{label}}</span>
  </div>
</template>
<script>
export default {
  name: "uc-input",
  props:{
    type:{
        type:String,
        default:'text'
    },
    value:{
        type:String,
        default:'',
    },
    label:{
        type:String,
        default:'内容'
    }
  },
  methods:{
     
  }
};
</script>
<style scoped>
.uc-input {
  height: 0.95rem;
  position: relative;
  border-bottom: 1px solid #e5e7e8;
}
.uc-input input {
  padding-left: 1.24rem;
  width: 4.54rem;
  height: 100%;
  font-size: 0.4rem;
  text-indent: 0.5rem;
}
.uc-input span {
  width: 1.23rem;
  height: 0.49rem;
  position: absolute;
  top: 0.26rem;
  left: 0;
  border-right: 1px solid #676868;
  color: #676868;
  font-size: 0.25rem;
  line-height: 0.49rem;
  text-align: center;
}
</style>