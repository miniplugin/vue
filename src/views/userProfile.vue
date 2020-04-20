<template>
  <v-container grid-list-xs>
    <v-layout
      row
      wrap
      align-center
      justify-center
    >
      <v-flex
        xs12
        sm5
        class="hidden-xs-only"
      >
        <v-card class="border-none">
          <v-img src="http://webassets.dothome.co.kr/metro/image/small_logo.png"></v-img>
        </v-card>
      </v-flex>

      <v-flex
        xs12
        sm7
      >
        <p>userProfile page</p>
        <div v-if="$store.state.user">
          {{ JSON.stringify($store.state.claims, null, 2) }}
          <v-btn
            color="success"
            @click="logout"
          >로그아웃</v-btn>
          <v-btn
            color="primary"
            @click="tokenUpdate"
          >토큰재로딩</v-btn>
        </div>
        <div v-else>
          로그인 이 필요합니다.
          {{ JSON.stringify($store.state.claims, null, 2) }}
          <v-btn
            color="success"
            v-bind:to="'/sign'"
          >로그인</v-btn>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  methods: {
    async tokenUpdate () {
      const user = this.$firebase.auth().currentUser
      await user.getIdToken(true)
      await this.$store.dispatch('getUser', user)
    },
    logout () {
      this.$store.state.claims = null
      this.$firebase.auth().signOut()
    }
  }
}
</script>
