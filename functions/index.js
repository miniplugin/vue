/* eslint-disable no-unused-vars */
const functions = require('firebase-functions')
const admin = require('firebase-admin')
// // Create and Deploy Your First Cloud Functions
// // https://firebase.google.com/docs/functions/write-firebase-functions

admin.initializeApp()
const db = admin.firestore()

// console.log('admin.email : ', functions.config().admin.email)
exports.helloWorld = functions.https.onRequest((request, response) => {
  response.send('Hello from Firebase!')
})

exports.test = functions.https.onRequest(require('./test'))
// 사용자 CRUD 생성
exports.createUser = functions.auth.user().onCreate(async user => {
  const { uid, email, displayName, emailVerified, photoURL, disabled } = user
  const claims = { level: 2 }
  if (functions.config().admin.email === user.email && user.emailVerified) {
    claims.level = 0
  }
  await admin.auth().setCustomUserClaims(user.uid, claims) // .then(() => { async ~ await 사용으로 then 제거
  //  새로운 사용자 지정 클레임은 다음에 새 토큰이 발급 될 때 사용자의 ID 토큰으로 전파됩니다.
  // 파이어 스토어 db에 저장
  const d = {
    uid,
    email,
    displayName,
    emailVerified,
    photoURL,
    disabled
  }
  const r = await db.collection('users').doc(uid).set(d)
  return r
  // })
})
exports.deleteUser = functions.auth.user().onDelete(user => {
  return db.collection('users').doc(user.uid).delete()
})
