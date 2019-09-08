<template>
    <div>
        {{this.$store.state.number}}
        <button @click="add(3)">添加</button>
    </div>
</template>
<script>
import {mapActions} from 'vuex';
export default {
    methods:{
        ...mapActions({'add':'increment'})
    }
}
</script>