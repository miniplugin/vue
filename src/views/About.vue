<template>
  <div class="about">
    <h1>뷰Vue 사이트에 관해서</h1>
    <v-alert
      type="primary"
      :value="true"
      v-for="(data,index) in arrays"
      v-bind:key="index"
    >
      <span>
        title {{data}} 을 볼 수 있습니다.
      </span>
    </v-alert>
  </div>
</template>

<script>
export default {
  data () {
    return {
      arrays: [1, 2, 3, 4, 'www', 'xxxxxxx']
    }
  }
}
</script>
