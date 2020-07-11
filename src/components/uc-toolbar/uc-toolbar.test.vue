<template>
  <div id="app">
    
    <h3>测试 toolbar </h3>
    
    <uc-toolbar></uc-toolbar>
    
    
  </div>
</template>
<script>
  import UcToolbar from './components/uc-toolbar/uc-toolbar.vue'
  export default {
    name: 'App',
    data:()=>({
    }),
    methods:{
      /* xx(content){
        console.log('xx');
        this.ipt=content
      } */
    },
    mounted(){
      // setTimeout(()=>this.list=['aa','bb','cc'],2000)
    },
    components: {
      UcToolbar
    }
  }
</script>

<style>
  
</style>
