<template>
  <v-app>
    <v-card>
      <v-toolbar color="lime">
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
        <v-toolbar-title>Title</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn>
          <router-link to="/">Home</router-link>|
        </v-btn>
        <v-btn>
          <router-link to="/about">About</router-link>
        </v-btn>
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
  data () {
    return {
    }
  }
}
</script>
<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-btn--contained {
  margin-right: 30px;
}
.v-btn a.router-link-exact-active {
  color: #42b983;
}
</style>
