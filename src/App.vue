<template>
  <div id="app" style="">
    <AddCheck/>
  </div>
</template>

<script>
import AddCheck from './components/AddCheck.vue'
export default {
  name: 'app',
  mounted:function(){
    this.getdoList()
  },
  methods:{
    getdoList:function(){
      this.$store.commit("getdoList")
    }
  },
  components: {
    AddCheck
  }
}
</script>

<style>
@import "./assets/css/style.css";
</style>
