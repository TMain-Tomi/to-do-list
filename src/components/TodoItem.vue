<template>
    <div >
      <div class="class1" @mouseenter="enterm" @mouseleave="leavem">
        <span class="div-body-data-table-dl-dt-del" v-if="ItemData.el.isSelected">{{ItemData.index + 1}}. </span>
        <span v-else>{{ItemData.index + 1}}. </span>
        <Checkbox v-model="ItemData.el.isSelected" size="large" class="div-body-data-table-dl-dt-checkbox" style="position:relative" @on-change="clickTese(ItemData.el.id)" >
            <span v-if="!ItemData.el.isEditing" @dblclick="editName(ItemData.index)">
            <del class="div-body-data-table-dl-dt-del" v-if="ItemData.el.isSelected">{{ItemData.el.itemName}}</del>
           
            <span v-else>{{ItemData.el.itemName}}</span>
           
            </span>

            <Input v-else v-model="ItemData.el.itemName" :autofocus="true" class="div-body-data-table-dl-dt-input" size="small" @on-blur="itemOnBlur(ItemData.index)" @on-enter="itemOnBlur(ItemData.index)"/>
             <button class="display" v-bind:class="{display1}" @click="remove(ItemData.el.id)">&times;</button>
        </Checkbox>
           </div>
    </div>
</template>
<script>
export default {
  name: 'TodoItem',
  props: ['ItemData'],
  data(){
      return {
        display1:false
      }
  },
  methods: {
    editName(index) {
     this.$store.commit("editName",index)
    },
    itemOnBlur(index) {
      this.$store.commit("itemOnBlur",index)
    },
     enterm(){
      this.display1=true;
     },
     leavem(){
       this.display1=false;
     },
     clickTese(index){
       this.$store.dispatch('clickTese',index)
     },
     remove(index){
       console.log(index);
        this.$store.dispatch('remove',index)
     }
  }
}
</script>
