import Vue from 'vue'
import Router from 'vue-router'
import 'iview/dist/styles/iview.css';
import Welcome from './components/Welcome'
import Home from './components/Home'
import HomePage from './components/HomePage'
import AddCheck from './components/AddCheck'
import Myname from './components/Myname'
Vue.use(Router)

export default new Router({
    routes: [
        { path: '/',name:'welcome', component: Welcome },
        //{ path: '/home/:name',name:'home', component: Home },
        { path: '/homepage/:name',name:'homepage', component: HomePage , props:true,children:[
            { path: '/addcheck',name:'addcheck', component: AddCheck },
            { path: '/myname',name:'myname', component: Myname}
        ]},
        //{ path: '/homepage',name:'homepage', component: HomePage }
    ]
})