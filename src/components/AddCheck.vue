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
      <div class="div-body">
        <Input type="text" size="large" class="div-body-input" v-model="itemName"/>
        <Button type="primary" size="large" class="div-body-add-button" @click="addItem">Add</Button>
        <div class="div-body-data-table">
          <dl class="div-body-data-table-dl">
            <dt class="div-body-data-table-dl-dt" v-for="(el, index) in itemsByStatus" :key="index">
              <span class="div-body-data-table-dl-dt-del" v-if="el.isSelected">{{index + 1}}. </span>
              <span v-else>{{index + 1}}. </span>
              <Checkbox v-model="el.isSelected" size="large" class="div-body-data-table-dl-dt-checkbox">
                <span v-if="!el.isEditing" @dblclick="editItemName(index)">
                  <del class="div-body-data-table-dl-dt-del" v-if="el.isSelected">{{el.itemName}}</del>
                  <span v-else>{{el.itemName}}</span>
                </span>
                <Input v-else v-model="el.itemName" :autofocus="true" class="div-body-data-table-dl-dt-input" size="small" @on-blur="itemInputOnBlur(index)" @on-enter="itemInputOnBlur(index)"></Input>
              </Checkbox></dt>
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
    },
    editItemName(index) {
      this.itemsByStatus[index].isEditing = true;
    },
    itemInputOnBlur(index) {
      this.itemsByStatus[index].isEditing = false;
    }
  }
}
</script>

<style scoped>

</style>
