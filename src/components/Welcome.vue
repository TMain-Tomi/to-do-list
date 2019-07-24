<template>
  <div>
    <a-input placeholder="Basic usage"  v-model="name"/>
    <a-button type="primary"  @click="goto()">跳转</a-button>
    <p>welcome</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      name: ""
    };
  },
  methods: {
    goto() {
      this.$router.push({ name: "homepage", params: { name: this.name } });
    }
  }
};
</script>
