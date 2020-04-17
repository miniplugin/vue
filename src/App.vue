<template>
  <v-app>
    <v-navigation-drawer
      v-model="drawer"
      fixed
      app
    >
      <!--
        속성 app: 화면크기에 맞게 네비크기 조정 속성
        속성 v-model: 화면에 토글 액션으로 보여주기/숨기기 drawer(true/false)
      -->
      <v-toolbar
        flat
        color="trasparent"
      >
        <v-toolbar-title>메뉴</v-toolbar-title>
      </v-toolbar>
      <v-divider></v-divider>
      <v-list>
        <v-list-group
          v-for="(item,index) in items"
          v-bind:key="index"
          v-model="item.active"
          :prepend-icon="item.icon"
          no-action
        >
          <v-divider></v-divider>
          <template v-slot:activator>
            <!-- <v-list-item
          v-for="(item,index) in items"
          v-bind:key="index"
          v-bind:to="item.url"
        > -->
            <v-list-item>
              <!-- <v-list-item-avatar>
                <v-icon>{{item.icon}}</v-icon>
              </v-list-item-avatar> -->
              <v-list-item-content>
                <v-list-item-title>{{item.title}}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </template>
          <v-list-item
            v-for="(subItem,index) in item.subItems"
            v-bind:key="index"
            v-bind:to="subItem.url"
          >
            <v-list-item-content>
              <v-list-item-title>{{subItem.title}}</v-list-item-title>
            </v-list-item-content>
            <v-list-item-action>
              <v-btn icon>
                <v-icon color="grey lighten-1">mdi-information</v-icon>
              </v-btn>
            </v-list-item-action>
          </v-list-item>
        </v-list-group>
      </v-list>
    </v-navigation-drawer>
    <v-card>
      <v-toolbar
        color="indigo"
        dark
      >
        <!-- v-on:click="test" = @click="test" -->
        <v-app-bar-nav-icon @click="navDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vue 앱 [{{$store.state.user ? $store.state.user.displayName : '비 로그인'}}]</v-toolbar-title>
        <!-- <v-toolbar-title>토큰[{{$store.state.token}}]</v-toolbar-title> -->
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn>
            <router-link to="/lectures/card">Lectures</router-link>
          </v-btn>
        </v-toolbar-items>
        <v-menu offset-y>
          <template v-slot:activator="{ on }">
            <v-btn
              icon
              v-on="on"
              v-if="!$store.state.user"
            >
              <v-icon>mdi-dots-vertical</v-icon>
            </v-btn>
            <v-btn
              icon
              v-on="on"
              v-else
            >
              <v-avatar
                size="38"
                color="grey lighten-4"
              >
                <img
                  :src="$store.state.user.photoURL"
                  alt="avatar"
                >
              </v-avatar>
            </v-btn>
          </template>
          <v-card width="320">
            <v-container grid-list-md>
              <v-layout
                row
                wrap
                v-if="$store.state.user"
              >
                <v-flex xs4>
                  <v-avatar
                    size="74"
                    color="grey lighten-4"
                  >
                    <img
                      :src="$store.state.user.photoURL"
                      alt="avatar"
                    >
                  </v-avatar>
                </v-flex>
                <v-flex xs8>
                  <v-card-text>
                    <span class="font-weight-bold">{{$store.state.user.displayName}}</span>
                    <br>
                    <span>{{$store.state.user.email}}</span>
                  </v-card-text>
                  <v-divider></v-divider>
                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn
                      color="success"
                      @click="signOut"
                    >
                      <v-icon>mdi-logout</v-icon>
                      로그아웃
                    </v-btn>
                  </v-card-actions>
                </v-flex>
              </v-layout>
              <v-layout
                v-else
                row
                wrap
                align-center
                justify-center
              >
                <v-spacer></v-spacer>
                <v-btn
                  color="primary"
                  @click="signInWithGoogle"
                >
                  <v-icon>mdi-login</v-icon>
                  로그인
                </v-btn>
              </v-layout>
            </v-container>
          </v-card>
        </v-menu>
      </v-toolbar>
    </v-card>
    <v-content>
      <vue-progress-bar></vue-progress-bar>
      <v-container
        grid-list-md
        v-if="$isFirebaseAuth"
      >
        <v-layout
          row
          wrap
          align-center
          justify-center
        >
          <v-card
            color="transparent"
            flat
          >
            <v-card-text class="text-xs-center">
              <v-progress-circular
                indeterminate
                color="primary"
              ></v-progress-circular>
            </v-card-text>
            <v-card-text class="text-xs-center">
              로딩 중 입니다.
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
import router from './router'
export default {
  name: 'App',
  data () {
    return {
      drawer: false,
      items: [ // javascript {object} = 2차원배열 형태 = [{key:value},{연관배열},{json형태오브젝트}...]
        {
          icon: 'mdi-home',
          title: 'Home',
          active: true,
          subItems: [
            {
              title: 'Home',
              url: '/'
            },
            {
              title: 'About',
              url: '/about'
            }
          ]
        },
        {
          icon: 'mdi-information-outline',
          title: 'Lectures',
          active: false,
          subItems: [
            {
              title: 'Card',
              url: '/lectures/card'
            },
            {
              title: 'Layout',
              url: '/lectures/layout'
            },
            {
              title: 'Notes',
              url: '/lectures/notes'
            },
            {
              title: 'Axios',
              url: '/lectures/axios'
            },
            {
              title: 'Mother',
              url: '/lectures/mother'
            }
          ]
        }
      ]
    }
  },
  methods: {
    navDrawer () {
      console.log('navDrawer 클릭')
      this.drawer = !this.drawer
    },
    async signInWithGoogle () {
      router.push('/sign')
      /* var provider = new this.$firebase.auth.GoogleAuthProvider()
      this.$firebase.auth().languageCode = 'ko'
      await this.$firebase.auth().signInWithPopup(provider) */
      // console.log(r)
    },
    async signOut () {
      const r = await this.$firebase.auth().signOut()
      console.log('logout: ', r)
    }
  }
}
</script>
<style>
.v-btn--contained {
  margin-right: 30px;
}
.v-btn a.router-link-exact-active {
  color: #42b983;
}
</style>
