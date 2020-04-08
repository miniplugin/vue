<template>
  <div class="home">
    <v-icon
      size="200"
      color="accent"
    >mdi-vuetify</v-icon>
    <HelloWorld msg="Vue.js App을 사용하는 사이트 입니다." />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    HelloWorld
  }
}
</script>
<style>
.home {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
