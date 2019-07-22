import Vue from 'vue'
import App from './App.vue'
import iView from 'iview';
import Vuex from 'vuex'
import 'iview/dist/styles/iview.css';

Vue.config.productionTip = false
Vue.use(Vuex);
Vue.use(iView);
const store = new Vuex.Store({
  state: {
    items: [],
    itemsByStatus: [],
    itemName: '',
    tableStatus: 1
  },
  mutations:{
    addItem(state,data){
      let item = {
        itemName: data,
        isSelected: state.tableStatus === 3 ? true : false,
        isEditing: false
      };
      state.items.push(item);
      state.itemsByStatus.push(item);
      state.itemName = '';
    },
    filterItems(state,data){
      state.tableStatus = data;
      if (data === 1) {
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
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
