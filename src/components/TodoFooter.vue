<template>
    <div class="div-footer">
        <Button size="large" class="div-footer-button" @click="filterItems(1)">All</Button>
        <Button size="large" class="div-footer-button" @click="filterItems(2)">Active</Button>
        <Button size="large" class="div-footer-button-complete" @click="filterItems(3)">Complete</Button>
      </div>
</template>
<script>
export default {
  name: 'TodoFooter',
  methods: {
    filterItems(status) {
     this.$emit('filterItems',status)
    }
  }
}
</script>
