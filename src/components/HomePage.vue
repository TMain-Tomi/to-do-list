<template>
    <div class="div-page">
        <div class="div-page-top">
            <!-- <button @click="goto()"> back</button> -->
            <router-link to="/welcome"><span class="div-page-top-span">back</span></router-link>

            <span class="div-page-top-name">{{$route.params.name}}</span>
        </div>
        <div class="div-page-content">
            <div class="div-page-content-left">
                <router-link :to="{name:'addcheck'}"><span class="div-page-top-doList">toDoList</span></router-link>
            </div>
            <div class="div-page-content-right">
                <router-view></router-view>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'HomePage',
  data(){
        return{
            name:'this'
        }
    },
  methods:{
     goto(){
            //this.$router.push('home/:'+this.name)
            this.$router.push({name:'home',params:{name:this.name}})
        }
  },
  components: {
   
  }
}
</script>