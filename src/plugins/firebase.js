/* eslint-disable no-unused-vars */
import Vue from 'vue'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'
// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '../../firebaseConfig'
// TODO: Replace the following with your app's Firebase project configuration

/* const firebaseConfig = {
  apiKey: 'xxx',
  authDomain: 'xxx.firebaseapp.com',
  databaseURL: 'https://xxx.firebaseio.com',
  projectId: 'xxx',
  storageBucket: 'xxx.appspot.com',
  messagingSenderId: 'xxx',
  appId: 'xxx'
} */

// Initialize Firebase
firebase.initializeApp(firebaseConfig)
// 파이어스토어 작동 확인 테스트
/* firebase
  .firestore()
  .collection('test')
  .add({ test: 'aaa' })
  .then(r => console.log(r))
  .catch(e => console.error(e)) */

Vue.prototype.$firebase = firebase
