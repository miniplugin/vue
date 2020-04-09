<template>
  <v-container
    fluid
    grid-list-md
  >
    <!-- 마진: grid-list-md 노트북용 여백 -->
    <v-layout
      row
      wrap
    >
      <!--
      줄나눔: row
      줄나눔: wrap
      -->
      <v-flex
        xs12
        sm6
        md4
        v-for="(data,index) in 9"
        v-bind:key="index"
      >
        <v-card color="red">
          <v-card-title
            primary-title
            v-if="!$vuetify.breakpoint.sm"
          >
            <!-- 화며크기= xs: 모바일, sm: tablet/i패드, md: 노트북이상 -->
            {{$vuetify.breakpoint.xs + ' ' + $vuetify.breakpoint.sm + ' ' + $vuetify.breakpoint.md}}
          </v-card-title>
          <v-card-text>
            선형 프로그레스바를 표시. 프로그레스바의 색을 나타내는 문자열(마테리얼 이나 테마 색상 - primary, secondary, success, info, warning, error)이나 부울값(boolean) 이 가능. 부울값의 경우 컴포넌트 색상(컴포넌트가 지원할 경우 color prop으로 지정된 값)이나 primary 색상이 사용됨
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>
<script>
export default {
  name: 'Layout',
  data () {
    return {

    }
  }
}
</script>
