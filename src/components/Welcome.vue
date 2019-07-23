<template>
    <div>
        <input type="text" v-model="name">
        <button @click="goto()">跳转</button>
        <p>welcome</p>
      
    </div>
</template>
<script>
export default {
    data(){
        return{
            name:''
        }
    },
    methods:{
        goto(){
            this.$router.push({name:'homepage',params:{name:this.name}})
        }
    }
}

</script>
