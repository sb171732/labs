<template>
  <div class="w3-padding">
    <h2>Вход</h2>
     
     <el-input type="number" placeholder="+7 .. без кода страны" v-model="phNo"></el-input>
     <br>
     <br>
     <el-input placeholder="пароль" v-model="password"></el-input>
     <br><br>
     <el-button @click="login">Войти</el-button>
     <router-link class="w3-margin-left" to="/signup">Регистрация</router-link>
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data(){
      return{
        phNo: '',
        password: ''
      }
    },
    methods:{
      login(){
        let vm = this
        let countryCode = '+7' //india
        let email = countryCode + this.phNo + '@domainName.com'
        let password = this.password
        //
        firebase.auth().signInWithEmailAndPassword(email, password).then(function(){
          //route to home on success !
          vm.$router.push({path:'/home'})
        }).catch(function(error) {
          // Handle Errors here.
          var errorCode = error.code;
          var errorMessage = error.message;
          console.log(errorCode)
          console.log(errorMessage)
          // ...
          let errMsg = error.message.toLowerCase()
          while(errMsg.indexOf('email') != -1){
            errMsg = errMsg.replace("email address", "phone number");
          }
          //
          alert('Error: ' + errMsg)
        });
      }
    }
  }
</script>