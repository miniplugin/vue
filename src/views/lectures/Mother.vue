<template>
  <v-card>
    <!-- html kebab case -->
    <my-son
      name="callOn"
      @help="listenOn"
    ></my-son>
    <my-son
      name="callOff"
      @help="listenOff"
    ></my-son>
    <v-card-text>일반 main.js 모듈 전역변수확인: {{$global}}</v-card-text>
    <v-card-text>Vuex store 모듈 전역변수확인: {{$store.state.title}}</v-card-text>
    <my-doughter></my-doughter>
    <v-card-text>
      <v-alert
        v-model="call"
        type="success"
      >
        I'm a success alert.
      </v-alert>
    </v-card-text>
  </v-card>
</template>

<script>
// javascript camel case
import MySon from '@/components/mySon'
import MyDoughter from '@/components/myDoughter'

export default {
  components: {
    MySon,
    MyDoughter
  },
  data () {
    return {
      call: false
    }
  },
  methods: {
    listenOn () {
      this.call = true
      this.$store.commit('setTitle', 'logined')
      this.$global = 'logined'
    },
    listenOff () {
      this.call = false
      this.$store.commit('setTitle', 'not login')
      this.$global = 'not login'
    }
  }
}
</script>
