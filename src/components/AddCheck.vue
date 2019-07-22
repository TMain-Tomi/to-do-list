<template>
  <div>
    <Card class="div-card">
      <TodoHeader></TodoHeader>
      <div class="div-body">
        <Input type="text" size="large" class="div-body-input" v-model="$store.state.itemName"/>
        <Button type="primary" size="large" class="div-body-add-button" @click="addItem">Add</Button>
        <div class="div-body-data-table">
          <dl class="div-body-data-table-dl">
            <dt class="div-body-data-table-dl-dt" v-for="(el, index) in $store.state.itemsByStatus" :key="index">
              <TodoItem :ItemData="{el:el ,index:index}"></TodoItem>
            </dt>
          </dl>
        </div>
      </div>
    <TodoFooter @filterItems="filterItems"></TodoFooter>
    </Card>
  </div>
</template>

<script>
import TodoItem from './TodoItem.vue'
import TodoHeader from './TodoHeader.vue'
import TodoFooter from './TodoFooter.vue'
export default {
  name: 'AddCheck',
   components: {
    TodoItem,
    TodoHeader,
    TodoFooter
  },
  methods: {
   addItem() {
      if (this.$store.state.itemName !== '') {
        this.$store.commit("addItem",this.$store.state.itemName)
      } else {
        this.$Message.error('Can not add a null item');
      }
    },
    filterItems(status) {
     this.$store.commit("filterItems",status)
    }
  }
}
</script>

<style scoped>

</style>
