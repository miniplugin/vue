<template>
  <v-card color="transparent">
    <v-form
      v-model="valid"
      ref="form"
      lazy-validation
    >
      <v-card-title primary-title>
        <span class="title">회원가입</span>
        <v-spacer></v-spacer>
        <span class="caption">또는&nbsp;<a @click="$emit('changeType')">로그인</a></span>
      </v-card-title>
      <v-card-actions>
        <v-btn
          color="primary"
          block
          @click="signInWithGoogle"
        >
          <v-icon>mdi-google</v-icon>
          <v-divider
            vertical
            class="mx-3"
          ></v-divider>
          구글 계정으로 가입
        </v-btn>
      </v-card-actions>
      <v-container
        grid-list-md
        fluid
      >
        <v-layout
          row
          wrap
        >
          <v-flex xs5>
            <v-divider class="mt-2"></v-divider>
          </v-flex>
          <v-flex
            xs2
            text-center
          >
            또는
          </v-flex>
          <v-flex
            xs5
            class="mt-2"
          >
            <v-divider></v-divider>
          </v-flex>
        </v-layout>
      </v-container>
      <v-card-text>
        <v-text-field
          label="성"
          v-model="form.firstname"
          :rules="[rule.required, rule.minLength(1),rule.maxLength(3)]"
        ></v-text-field>
        <v-text-field
          label="이름"
          v-model="form.lastname"
          :rules="[rule.required, rule.minLength(5),rule.maxLength(20)]"
        >
        </v-text-field>
        <v-text-field
          label="email"
          v-model="form.email"
          :rules="[rule.required, rule.minLength(7),rule.maxLength(50), rule.email]"
        >
        </v-text-field>
        <v-text-field
          label="password"
          v-model="form.password"
          :rules="[rule.required, rule.minLength(6),rule.maxLength(50)]"
          type="password"
        >
        </v-text-field>
        <div class="terms-text">이 페이지는 Google 개인정보처리방침 및 서비스 약관의 적용을 받습니다.</div>
      </v-card-text>
      <v-card-actions>
        <v-checkbox
          label="약관에 동의함"
          v-model="agree"
          :rules="[rule.agree]"
          required
        ></v-checkbox>
        <v-spacer></v-spacer>
        <v-btn
          color="primary"
          @click="signUpEmail"
          :disabled="!valid"
        >
          <v-icon>mdi-email</v-icon>
          회원가입
        </v-btn>
      </v-card-actions>
      <!-- <v-btn
        color="primary"
        block
        @click="signOut"
      >
        <v-icon>mdi-logout</v-icon>
        로그아웃
      </v-btn> -->
    </v-form>
  </v-card>
</template>
<style scoped>
.terms-text {
  font-size: 12px;
  font-weight: 200;
  color: #637282;
}
</style>
<script>
import router from '../../router'
export default {
  data () {
    return {
      valid: false,
      agree: false,
      form: {
        firstname: '',
        lastname: '',
        email: '',
        password: ''
      },
      rule: {
        required: v => !!v || '필수 입력값 입니다.',
        minLength: length => v => v.length >= length || '입력값은 ' + length + '글자 이상 이여야 합니다.',
        maxLength: length => v => v.length <= length || '입력값은 ' + length + '글자 이하 이여야 합니다.',
        email: v => /.+@.+/.test(v) || '이메일 형식이 필요합니다.',
        agree: v => !!v || '약관에 동의해야 합니다.'
      }
    }
  },
  methods: {
    async signInWithGoogle () {
      /* var routeData = 'http://www.google.co.kr/accounts?hl=ko'
      window.open(routeData, '_blank') */
      var provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider)
      // await this.$firebase.auth().currentUser.getIdToken(true) // 회원가입 즉시 토큰을 재발생 시키지 않는다.
      // console.log(r)
      router.push('/')
    },
    async signUpEmail () {
      if (!this.$refs.form.validate()) {
        return this.$toasted.global.error('입력 폼에 올바른 값을 작성해 주세요.')
      }
      // alert('준비중 입니다.') const r =
      await this.$firebase.auth().createUserWithEmailAndPassword(this.form.email, this.form.password)
      // console.log('signUpEmail', r)
      const user = this.$firebase.auth().currentUser
      const result = await user.updateProfile({
        displayName: this.form.firstname + this.form.lastname,
        photoURL: 'http://webassets.dothome.co.kr/metro/image/small_logo.png'
      })
      // await this.$firebase.auth().currentUser.getIdToken(true) // 회원가입 즉시 토큰을 재발생 시키지 않는다.
      await console.log('result', result)
      router.push('/')
    }/* ,
    async signOut () {
      const r = await this.$firebase.auth().signOut()
      console.log(r)
    } */
  }
}
</script>
