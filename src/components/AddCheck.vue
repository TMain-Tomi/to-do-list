<template>
  <div>
    <Card class="div-card">
      <TodoHeader></TodoHeader>
      <div class="div-body">
        <Input type="text" size="large" class="div-body-input" v-model="itemName"/>
        <Button type="primary" size="large" class="div-body-add-button" @click="addItem">Add</Button>
        <div class="div-body-data-table">
          <dl class="div-body-data-table-dl">
            <dt class="div-body-data-table-dl-dt" v-for="(el, index) in itemsByStatus" :key="index">
              <TodoItem :ItemData="{el:el ,index:index}"></TodoItem>
            </dt>
          </dl>
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
import TodoItem from './TodoItem.vue'
import TodoHeader from './TodoHeader.vue'
export default {
  name: 'AddCheck',
   components: {
    TodoItem,
    TodoHeader
  },
  data () {
    return {
      items: [],
      itemsByStatus: [],
      itemName: '',
      tableStatus: 1,
    }
  },
  methods: {
   addItem() {
      if (this.itemName !== '') {
        let item = {
          itemName: this.itemName,
          isSelected: this.tableStatus === 3 ? true : false,
          isEditing: false
        };
        this.items.push(item);
        this.itemsByStatus.push(item);
        this.itemName = '';
      } else {
        this.$Message.error('Can not add a null item');
      }
    },
    filterItems(status) {
      this.tableStatus = status;
      if (status === 1) {
        this.itemsByStatus = JSON.parse(JSON.stringify(this.items));
      } else if (status === 2) {
        this.itemsByStatus = this.items.filter((item) => {
          return !item.isSelected;
        })
      } else if (status === 3) {
        this.itemsByStatus = this.items.filter((item) => {
          return item.isSelected;
        })
      }
    }
  }
}
</script>

<style scoped>

</style>
