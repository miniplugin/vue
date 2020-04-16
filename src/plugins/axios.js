/* eslint-disable no-unused-vars */
import Vue from 'vue'
import axios from 'axios'

var localUrl = 'http://localhost:5001/covid19-kr/us-central1/'
var cloudUrl = 'https://us-central1-covid19-kr.cloudfunctions.net/'

const firebaseAPI = axios.create({
  baseURL: cloudUrl,
  timeout: 5000,
  headers: { 'X-Custom-Header': 'foobar' }
})

// 로그인 인증 되어 있는지 request 매번 확인
firebaseAPI.interceptors.request.use(
  function (config) {
    // request 요청을 보내기 전
    config.headers.authorization = Math.random()
    return config
  },
  function (error) {
    // request 요청 reject 에러 처리
    return Promise.reject(error)
  }
)

Vue.prototype.$axios = firebaseAPI
