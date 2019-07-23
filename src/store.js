import Vue from 'vue'
import Vuex from 'vuex'
Vuex.use(Vuex)
export default new Vuex.Store({
    state: {
        items: [],
        itemsByStatus: [],
        itemName: '',
        tableStatus: 1
      },
      actions:{
        getdoList(context){
          axios.get('http://localhost:8080/dolists')
          .then(function (response) {
            context.commit('getdoList',response)
          })
        },
        addItem(context,data){
          let item = {
            itemName: data,
            isSelected: this.state.tableStatus === 3 ? true : false,
            isEditing: false
          };
          axios.post('http://localhost:8080/dolists', {
            listValue: data,
            isSelecting: false
          })
          .then(function (response) {
            context.commit('addItem',response)
          })
          this.state.itemName = '';
        },
        clickTese(context,data){
          axios.put('http://localhost:8080/dolists/'+data)
          .then(function (response) {
            context.commit('clickTese',response)
          })
        },
        remove(context,data){
          axios.delete('http://localhost:8080/dolists/'+data)
          .then(function (response) {
            context.commit('remove',response)
          })
        }
      },
      mutations:{
        getdoList(state,response){
          store.commit('getItems',response)
        },
        addItem(state,response){
          store.commit('getItems',response)
        },
        clickTese(state,response){
          store.commit('getItems',response)
        },
        remove(state,response){
          store.commit('getItems',response)
        },
        getItems(state,response){
          state.itemsByStatus = JSON.parse(JSON.stringify(response.data));
          state.items =  JSON.parse(JSON.stringify(response.data));
        },
        filterItems(state,data){
          console.log(data)
          state.tableStatus = data;
          //debugger
          if (data === 1) {
           // console.log(state.items)
            state.itemsByStatus = JSON.parse(JSON.stringify(state.items));
          } else if (data === 2) {
            state.itemsByStatus =state.items.filter((item) => {
              return !item.isSelected;
            })
          } else if (data === 3) {
            state.itemsByStatus = state.items.filter((item) => {
              return item.isSelected;
            })
          }
        },
        editName(state,data){
          state.itemsByStatus[data].isEditing = true;
        },
        itemOnBlur(state,data){
          state.itemsByStatus[data].isEditing = false;
        }
      }
})
