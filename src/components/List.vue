<template>
    <div>
        <li v-for="(list,index) in lists" :key="index">{{list}}</li>
    </div>
</template>
<script>
import axios from 'axios'
export default {
    data(){
        return {lists:[]}
    },
    mounted(){
       axios.get('/list').then(res=>{
            this.lists = res.data;
       })
    }
}
</script>



