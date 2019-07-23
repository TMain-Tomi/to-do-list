<template>
  <div id="app" style="">
   <!-- <router-link to="/home/:name">welcome</router-link>
    <input type="text" v-model="name">
        <button @click="goto()">开始使用</button>
    <router-view></router-view> -->
    <!-- <AddCheck/> -->
    <router-view></router-view>
  </div>
</template>

<script>
// import AddCheck from './components/AddCheck.vue'
import HomePage from './components/HomePage.vue'
export default {
  name: 'app',
  mounted:function(){
    this.getdoList()
  },
  methods:{
    getdoList:function(){
      this.$store.dispatch('getdoList')
    }
  },
  components: {
    // AddCheck
    HomePage
  }
}
</script>

<style>
@import "./assets/css/style.css";
</style>
