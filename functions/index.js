/* eslint-disable no-unused-vars */
const functions = require('firebase-functions')
const admin = require('firebase-admin')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp()
console.log('admin.email : ', functions.config().admin.email)
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})
// 트리거 생성
exports.test = functions.https.onRequest(require('./test'))
exports.createUser = functions.auth.user().onCreate(user => {
  const set = { level: 2 }
  if (functions.config().admin.email === user.email && user.emailVerified) {
    set.level = 0
  }
  admin.auth().setCustomUserClaims(user.uid, set).then(() => {
    //  새로운 사용자 지정 클레임은 다음에 새 토큰이 발급 될 때 사용자의 ID 토큰으로 전파됩니다.
  })
})
