/* eslint-disable no-unused-vars */
import Vue from 'vue'
// Firebase App (the core Firebase SDK) is always required and must be listed first
import * as firebase from 'firebase/app'
// Add the Firebase products that you want to use
import 'firebase/auth'
import 'firebase/firestore'
import firebaseConfig from '../../firebaseConfig'
import store from '../store'
import router from '../router'
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

// 파이어베이스 auth() 인증 훅 hook
// Vue.prototype.$isFirebaseAuth = false // 전역변수 처리
// firebase.auth().onAuthStateChanged(function (user) {
firebase.auth().onAuthStateChanged(user => {
  // Vue.prototype.$isFirebaseAuth = true
  // console.log('user: ', user)
  // store>index.js 에서 mutations 사용
  // store.commit('setUser', user)
  // store>index.js 에서 actions 사용
  store.dispatch('getUser', user).then(() => {
    // 비공개 사이트 처리시(아래)
    if (user) {
      // 로그인 시 처리
      // console.log('user-firebase.js : ', user)
      // router.push('/')
      // 레벨 처리
      // console.log('claims-firebase.js : ', store.state.claims)
    } else {
      // 비 로그인시 처리
      // router.push('/sign')
    }
  })
})
