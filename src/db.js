import firebase from 'firebase/app'
import 'firebase/firestore'


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCcO8ZixVO0j_lCvkZOOlfLtsGACwN_DI8",
  authDomain: "t123123-d72c8.firebaseapp.com",
  projectId: "t123123-d72c8",
  storageBucket: "t123123-d72c8.appspot.com",
  messagingSenderId: "513267015854",
  appId: "1:513267015854:web:b83eed4c88fdf7b9234d3f",
  measurementId: "G-J1R9569M9K"
};
// Initialize Firebase
//firebase.initializeApp(firebaseConfig);
export const db = firebase
    .initializeApp(firebaseConfig)
    .firestore()

const { TimeStamp, GeoPoint } = firebase.firestore
export { TimeStamp, GeoPoint }