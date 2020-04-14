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
      <v-toolbar color="lime">
        <!-- v-on:click="test" = @click="test" -->
        <v-app-bar-nav-icon @click="navDrawer"></v-app-bar-nav-icon>
        <v-toolbar-title>Vue 앱</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items class="hidden-sm-and-down">
          <v-btn>
            <router-link to="/">Home</router-link>
          </v-btn>
          <v-btn>
            <router-link to="/lectures/card">Lectures</router-link>
          </v-btn>
        </v-toolbar-items>
        <v-btn icon>
          <v-icon>mdi-dots-vertical</v-icon>
        </v-btn>
      </v-toolbar>
    </v-card>
    <v-content>
      <router-view />
    </v-content>
  </v-app>
</template>
<script>
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
