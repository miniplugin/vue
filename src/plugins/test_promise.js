/* eslint-disable no-unused-vars */
// 동기 함수 (아래)
/* const foo = () => {
  console.log('foo')
  const i = 111
  const j = 333
  const k = 555
  for (let i = 0; i < 10; i++) j++
  console.log(i + j + k)
} */

// 비동기 함수 예 = promise 함수 (아래)
const longFunc = (i) => {
  return new Promise((resolve, reject) => {
    const time = Math.random() * 1000
    // console.log(time)
    setTimeout(() => {
      resolve(i)
    }, time)
    // return reject(Error('강제에러발생'))
    // resolve(i)
  })
}

const foo = async () => { // foo = async () => longFunc(i) 비동기
  for (let i = 0; i < 10; i++) {
    // const r = await longFunc(i) // 비동기 함수 return 결과 확인
    // 동기 함수 결과 직접 확인
    await longFunc(i)
      .then(r => {
        console.log('비동기-순차진행 ' + r)
      })
      .catch(e => {
        console.error(e.message)
      })
  }
  return 'done'
}

/* const foo = () => { // foo = () => longFunc(i) 동기함수(기본값)
  for (let i = 0; i < 10; i++) {
    longFunc(i)
      .then(r => {
        console.log('동기-비순차진행 ' + r)
      })
      .catch(e => {
        console.error(e.message)
      })
  }
} */

/* foo() // 비동기 함수 return 순차진행 결과 확인 시 주석 해제
  .then(r => {
    console.log(r)
  })
  .catch(e => {
    console.error(e.message)
  }) */

export default {
  foo
}
