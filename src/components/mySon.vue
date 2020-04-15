<template>
  <v-card>
    <v-card-title primary-title>
      아들 이름: {{name}}
    </v-card-title>
    <v-card-actions>
      <v-spacer></v-spacer>
      <v-btn @click="call">call</v-btn>
    </v-card-actions>
  </v-card>
</template>
<script>
export default {
  props: ['name'], // 부모 -> 자식변수로 데이터 전달
  methods: {
    call () {
      this.$emit('help') // 자식 -> 부모메서드로 데이터 전달
    }
  }
}
</script>
