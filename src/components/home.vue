<template>
  <div class="">
     <h3>Главная</h3>
  </div>
</template>
<script>
import {store} from '../store'
export default {
    data(){
        return {
            activeName: 'first'
        }
    },
    computed:{
      Menu(){
          return store.state.menu
      },
    },
    methods:{
     

    }
}
</script>
<style>
  
</style>