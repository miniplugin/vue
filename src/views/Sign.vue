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
        <sign-in
          v-if="type"
          @changeType="type = !type"
        ></sign-in>
        <sign-up
          v-else
          @changeType="type = !type"
        ></sign-up>
        <!-- <v-card>
          <v-card-title>
            로그인
          </v-card-title>
          <v-card-text>
            <v-text-field
              label="email"
              v-model="email"
            >
            </v-text-field>
            <v-text-field
              label="password"
              v-model="password"
              type="password"
            >
            </v-text-field>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="signInWithGoogle"
            >
              <v-icon>mdi-google</v-icon>
              구글로그인
            </v-btn>
            <v-btn
              color="primary"
              @click="signInEmail"
            >
              <v-icon>mdi-email</v-icon>
              메일로그인
            </v-btn>
            <v-btn
              color="primary"
              @click="signOut"
            >
              <v-icon>mdi-logout</v-icon>
              로그아웃
            </v-btn>
          </v-card-actions>
        </v-card> -->
      </v-flex>
    </v-layout>
  </v-container>
</template>
<style scoped>
.border-none {
  box-shadow: none;
}
</style>
<script>
import SignIn from '@/components/auth/signIn'
import SignUp from '@/components/auth/signUp'

export default {
  components: {
    SignIn, SignUp
  },
  data () {
    return {
      type: true,
      email: '',
      password: ''
    }
  },
  methods: {
    async signInWithGoogle () {
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
      // console.log(r)
    },
    async signOut () {
      const r = await this.$firebase.auth().signOut()
      console.log(r)
    },
    async signInEmail () {
      const r = await this.$firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
      console.log(r)
    }
  }
}
</script>
