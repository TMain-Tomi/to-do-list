import Vue from 'vue'
import Vuex from 'vuex'
Vuex.use(Vuex)
const store = new Vuex.Store({
    state:{
        items: [],
        itemsByStatus: [],
        itemName: '',
        tableStatus: 1
    },
    mutations:{}
})
