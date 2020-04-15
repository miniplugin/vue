/* eslint-disable no-unused-vars */
/* const express = require('express')
const app = express() */
const app = require('express')()
const cors = require('cors')
require('express-async-errors')

// 미들웨어: CORS 문제 처리
app.use(cors())
// 미들웨어: 로그인 인증 처리
app.use(require('../middlewares/verifyToken'))

// RESTFul API CRUD
app.post('/', async (req, res) => {
  /* const a = 3
  if (a === 3) throw Error('access denied') */
  // console.log(JSON.stringify(req.headers))
  res.send('post ok')
})
app.get('/', (req, res) => {
  res.send('get ok')
})
app.get('/:id', (req, res) => {
  res.send('get ok ' + req.params.id)
})
app.put('/:id', (req, res) => {
  res.send('put ok ' + req.params.id)
})
app.delete('/:id', (req, res) => {
  res.send('delete ok ' + req.params.id)
})

// 미들웨어: 에러처리
app.use(require('../middlewares/error'))

module.exports = app
