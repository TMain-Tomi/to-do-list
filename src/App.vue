<template>
  <div id="app" style>
    <router-view></router-view>
  </div>
</template>

<script>
import HomePage from "./components/HomePage.vue";
export default {
  name: "app",
  mounted: function() {
    this.getdoList();
  },
  methods: {
    getdoList: function() {
      this.$store.dispatch("getdoList");
    }
  },
  components: {
    // AddCheck
    HomePage
  }
};
</script>

<style>
@import "./assets/css/style.css";
</style>
