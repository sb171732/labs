import Vue from 'vue'
import Vuex from 'vuex'
import { vuexfireMutations, firestoreAction } from 'vuexfire'
import { db } from './db'
import firebase from 'firebase/app'

Vue.use(Vuex);

export const store = new Vuex.Store({
    state: {
        notes: [],
        tovar: [],
        menu: [],
        menuSecond: [],
        user: null,
        shopCart:[],
        group20A: [],
        group93: [],
    },
    mutations: {
        ...vuexfireMutations,
       getUserInfo(state,user){
            state.user = user
       },
       addCart(state,tovar){
            state.shopCart.push(tovar)
       }
    },
    actions: {
        bindGroup20A: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('group20A', db.collection('20.A'))
        }),
        bindGroup93: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('group93', db.collection('9.3'))
        }),
        bindMenuSec: firestoreAction(({ bindFirestoreRef }) => {
            return bindFirestoreRef('menuSecond', db.collection('secondMenu'))
        }),
        Shopping: ({commit}, payload) => {
            commit('addCart',payload);  
          // return db.collection('notes').add(payload)
        },
        addNote: firestoreAction((context, payload) => {
            return db.collection('notes').add(payload)
        }),
        addTovarKraski: firestoreAction((context, payload) => {
            return db.collection('tovar').add(payload)
        }),
        deleteFromTovar: firestoreAction((context, payload) => {
            db.collection('tovar')
                .doc(payload)
                .delete()
        }),
        getLoginStatus({commit}){
            let vm = this
            firebase.auth().onAuthStateChanged(function(user) {
              if (user) {
                vm.user = user
                commit('getUserInfo',user)
                console.log("// User is signed in by Phone Number : ", user.phoneNumber)
              } else {
                vm.user = null
                console.log("// No user is signed in.")
              }
            });
       },
       initFirebase(){
        //  const firebaseApp =
          firebase.initializeApp({
            apiKey: "AIzaSyDC4qJty0l_AMa7kN-TP__cGh0cRH9BKok",
            authDomain: "rusik-magaz17.firebaseapp.com",
            databaseURL: "https://rusik-magaz17-default-rtdb.asia-southeast1.firebasedatabase.app",
            projectId: "rusik-magaz17",
            storageBucket: "rusik-magaz17.appspot.com",
            messagingSenderId: "37682391596",
            appId: "1:37682391596:web:6aac1cbd5020814ab0ff89"
          });
        },
    }
})

