<template>
  <div class="w3-padding">
    <h2>Регистрация</h2>
    <el-input type="text" v-model="phNo" placeholder="mail"></el-input><br><br>
    <el-input type="password" v-model="pass" placeholder="Пароль"></el-input><br><br>
    <el-button id="sign-in-button" @click="sendOtp" plain type="warning">Зарегаться</el-button>
    
  </div>
</template>

<script>
  import firebase from 'firebase'
  export default {
    data(){
      return{
        phNo: '',
        pass: '',
        appVerifier : '',
        otp : ''
      }
    },
    methods :{
      sendOtp(){
       
          //
         // let countryCode = '+7' //india
          let phoneNumber =this.phNo
          //
          // let appVerifier = this.appVerifier
          //
          firebase.auth().createUserWithEmailAndPassword(phoneNumber, this.pass)
            .then(function (confirmationResult) {
              // SMS sent. Prompt user to type the code from the message, then sign the
              // user in with confirmationResult.confirm(code).
             // window.confirmationResult = confirmationResult;
              console.log(confirmationResult);
              //
               this.$router.push({path:'/ user'})
            }).catch(function (error) {
            // Error; SMS not sent
              console.log(error)
            // ...
            alert('Error ! SMS not sent')
            // this.$route.push({path:'/ user'})
          });
        
      },
      //
    
    },
    created(){
      
    }
  }
</script>