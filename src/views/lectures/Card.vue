<template>
  <v-layout class="ma-4">
    <v-flex>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <!-- <v-card-title primary-title>
          Card 컴포넌트 사용
        </v-card-title> -->
        <v-toolbar
          color="primary"
          dark
        >
          <v-toolbar-title>Card 컴포넌트 사용</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-arrange-bring-forward</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          {{card_text}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="orange"
          >Share</v-btn>
        </v-card-actions>
      </v-card>
      <v-divider class="ma-4"></v-divider>
      <v-card>
        <v-img
          src="https://cdn.vuetifyjs.com/images/cards/desert.jpg"
          aspect-ratio="2.75"
        ></v-img>
        <!-- <v-card-title primary-title>
          Card 컴포넌트 사용
        </v-card-title> -->
        <v-toolbar
          color="primary"
          dark
        >
          <v-toolbar-title>Card 컴포넌트 사용</v-toolbar-title>
          <v-spacer></v-spacer>
          <v-btn icon>
            <v-icon>mdi-arrange-bring-forward</v-icon>
          </v-btn>
        </v-toolbar>
        <v-divider></v-divider>
        <v-card-text>
          {{card_text}}
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn
            flat
            color="orange"
          >Share</v-btn>
        </v-card-actions>
      </v-card>
      <v-divider class="ma-4"></v-divider>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data () {
    return {
      card_text: '선형 프로그레스바를 표시. 프로그레스바의 색을 나타내는 문자열(마테리얼 이나 테마 색상 - primary, secondary, success, info, warning, error)이나 부울값(boolean) 이 가능. 부울값의 경우 컴포넌트 색상(컴포넌트가 지원할 경우 color prop으로 지정된 값)이나 primary 색상이 사용됨'
    }
  }
}
</script>
