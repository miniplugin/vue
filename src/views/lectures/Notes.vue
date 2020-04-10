<template>
  <v-container
    fluid
    grid-list-md
  >
    <v-flex xs12>
      {{itemsPerPage}} // 페이지 변수 내용 확인
    </v-flex>
    <v-layout>
      <v-flex xs5>
        <v-text-field
          v-model="title"
          label="제목"
        ></v-text-field>
      </v-flex>
      <v-flex xs5>
        <v-text-field
          v-model="content"
          label="내용"
        ></v-text-field>
      </v-flex>
      <v-flex xs2>
        <v-btn
          color="success"
          @click="post"
        >저장</v-btn>
      </v-flex>
    </v-layout>
    <v-data-iterator
      content-tag="tag"
      row
      wrap
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :sort-by="sortBy.toLowerCase()"
      :sort-desc="sortDesc"
    >
      <template v-slot:item="props">
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h4>{{props.item.id}} - {{props.item.title}}</h4>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              {{props.item.content}}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="del(props.item)">삭제</v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </template>
    </v-data-iterator>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    itemsPerPageArray: [5, 10, 15],
    page: 1,
    itemsPerPage: 5,
    items: [],
    sortDesc: true,
    sortBy: 'id',
    id: 2,
    title: '',
    content: ''
  }),
  mounted () {
    this.items.push({
      id: 1, title: '제목1', content: '내용1'
    })
    this.items.push({
      id: 2, title: '제목2', content: '내용2'
    })
  },
  methods: {
    post () {
      // 등록
      this.id = this.id + 1
      this.items.push({
        id: this.id, title: this.title, content: this.content
      })
      this.title = ''
      this.content = ''
    },
    get () {
      // 조회
    },
    put () {
      // 수정
    },
    del (item) {
      // 삭제
      const index = this.items.indexOf(item)
      this.items.splice(index, 1)
    }
  }
}
</script>
