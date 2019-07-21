<template>
  <div>
    <Card class="div-card">
      <div class="div-header">
        <div class="div-header-title">
          <h1>Jquery To Do List</h1>
        </div>
        <div class="div-header-comment">
          <h3><i>Simple Todo List with adding and filter by diff status.</i></h3>
        </div>
      </div>
     
      <div class="div-footer">
        <Button size="large" class="div-footer-button" @click="filterItems(1)">All</Button>
        <Button size="large" class="div-footer-button" @click="filterItems(2)">Active</Button>
        <Button size="large" class="div-footer-button-complete" @click="filterItems(3)">Complete</Button>
      </div>
    </Card>
  </div>
</template>

<script>
export default {
  name: 'AddCheck',
  data () {
    return {
      single: false,
      items: [],
      itemsByStatus: [],
      itemName: '',
      tableStatus: 1,
    }
  },
  methods: {
   
  }
}
</script>

<style scoped>

</style>
