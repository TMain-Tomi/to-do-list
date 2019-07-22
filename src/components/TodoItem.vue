<template>
    <div>
        <span class="div-body-data-table-dl-dt-del" v-if="ItemData.el.isSelected">{{ItemData.index + 1}}. </span>
        <span v-else>{{ItemData.index + 1}}. </span>
        <Checkbox v-model="ItemData.el.isSelected" size="large" class="div-body-data-table-dl-dt-checkbox">
            <span v-if="!ItemData.el.isEditing" @dblclick="editName(ItemData.index)">
            <del class="div-body-data-table-dl-dt-del" v-if="ItemData.el.isSelected">{{ItemData.el.itemName}}</del>
            <span v-else>{{ItemData.el.itemName}}</span>
            </span>
        </Checkbox>
    </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: ['ItemData'],
  methods: {
    editName(index) {
     this.$store.commit("editName",index)
    },
    itemOnBlur(index) {
      this.$store.commit("itemOnBlur",index)
    }
  }
}
</script>
