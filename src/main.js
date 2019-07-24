import Vue from 'vue'
import App from './App.vue'
import iView from 'iview'
import Vuex from 'vuex'
import axios from 'axios'
import Router from 'vue-router'
import 'iview/dist/styles/iview.css'
import router from './router.js'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
import {Message} from 'iview'
import Button from "ant-design-vue/lib/button"
// import store from './store.js'
Vue.component(Button.name, Button)
Vue.prototype.$ajax=axios
Vue.config.productionTip = false
Vue.use(Antd)
Vue.use(Vuex);
Vue.use(iView);
Vue.use(Router)
const store = new Vuex.Store({
  state: {
    items: [],
    itemsByStatus: [],
    itemName: '',
    tableStatus: 1,
    errorMassage: ''
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
      .then( (response) =>{
        // console.log(response.data.Error)
        // if(response.data.Error!==''){
        //   context.commit('setErrorMassage',response.data.Error)
        // }else{
          if(response.data.Error!==undefined&& response.data.Error!==''){
            Message.error(response.data.Error)
          }else{
             context.commit('addItem',response)
          }
         
        // }
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
    setErrorMassage(state,data){
       this.state.errorMassage = data
    }
    ,
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
new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
