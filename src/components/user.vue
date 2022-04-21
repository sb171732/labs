<template>
    <div class="">
        <div v-if="User != null">
      Вы зашли как - {{User.email}}
      <button @click="signout()">Выход</button>
       <h3>Uid : {{ User.uid }}</h3>
       <h3>ФИО : <span v-for="g of Group" :key="g.id">
            <span v-if="g.uid===User.uid">{{ g.fio }}</span>
         </span> </h3>  
    </div>
    <h3 v-else>Вы не авторизованы! <br>
      <router-link to="/">Войти</router-link>
      <br>
      <router-link to="/signup">Регистрация</router-link>
    </h3>
  
    </div>
</template>
<script>
  import firebase from 'firebase'
  import {store} from '../store'
  export default {
    name: 'app',
    data(){
      return {
        
      }
    },
    // props:['user'],
    computed:{
      User(){
        return store.state.user
      },
       Group(){
            return store.state.group20A
          },
    },
    methods:{
      signout(){
        firebase.auth().signOut();
        this.$router.push({path:'/'})
        window.location.reload(); //reload on signout !
      },
      
    },
    created(){
         store.dispatch("bindGroup20A");
    }
   }  
</script>