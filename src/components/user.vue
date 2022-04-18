<template>
    <div class="">
        <div v-if="User != null">
      Вы зашли под номером - {{User.phoneNumber}}
      <button @click="signout()">Выход</button>
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
    // props:['user'],
    computed:{
      User(){
        return store.state.user
      },
       Group(){
            return store.state.group93
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
         store.dispatch("bindGroup93");
    }
   }  
</script>