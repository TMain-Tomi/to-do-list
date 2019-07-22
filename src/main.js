import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import Vuex from 'vuex'
import axios from 'axios'
import 'iview/dist/styles/iview.css';

Vue.prototype.$ajax=axios
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
    getdoList(state){
      
      axios.get('http://localhost:8080/dolists')
      .then(function (response) {
        console.log(response.data);
        console.log(JSON.stringify(response.data));
        state.itemsByStatus = JSON.parse(JSON.stringify(response.data));
      })
    },
    addItem(state,data){
      let item = {
        itemName: data,
        isSelected: state.tableStatus === 3 ? true : false,
        isEditing: false
      };
      state.items.push(item);
      state.itemsByStatus.push(item);
      axios.post('http://localhost:8080/dolists', {
        listValue: data,
        isEditing: false
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
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
      axios.put('http://localhost:8080/dolists', {
        index: data
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    },
    itemOnBlur(state,data){
      state.itemsByStatus[data].isEditing = false;
      axios.put('http://localhost:8080/dolists', {
        index: data
      })
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  }
})
new Vue({
  store,
  render: h => h(App),
}).$mount('#app')
