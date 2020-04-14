/* eslint-disable no-unused-vars */
/* const express = require('express')
const app = express() */
const app = require('express')()
const cors = require('cors')

// CORS 문제 처리
app.use(cors())

// RESTFul API CRUD
app.post('/', (req, res) => {
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
module.exports = app
