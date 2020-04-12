<template>
  <v-container
    fluid
    grid-list-md
  >
    <!-- <v-flex xs12>
      {{itemsPerPage}} // 페이지 변수 내용 확인
    </v-flex> -->
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
      row
      wrap
      :items="items"
      :items-per-page.sync="itemsPerPage"
      :page="page"
      :sort-desc="sortDesc"
      :sort-by="sortBy.toLowerCase()"
    >
      <template v-slot:item="props">
        <v-flex xs12>
          <v-card>
            <v-card-title>
              <h3>{{props.item.title}}</h3>
              (작성일 : {{ props.item.rdate }})
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              {{props.item.content}}
            </v-card-text>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn @click="put(props.item.id)">수정</v-btn>
              <v-btn @click="del(props.item.id)">삭제</v-btn>
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
    sortBy: 'rdate',
    // id: 0, // firebase collection id 사용
    title: '',
    content: '',
    rdate: ''
  }),
  mounted () {
    /* this.items.push({
      id: 1, title: '제목1', content: '내용1'
    })
    this.items.push({
      id: 2, title: '제목2', content: '내용2'
    }) */
    /* this.$firebase.firestore().collection('notes').add({
      id: 1, title: '제목1', content: '내용1'
    })
    this.$firebase.firestore().collection('notes').add({
      id: 2, title: '제목2', content: '내용2'
    }) */
    this.get()
  },
  methods: {
    async post () {
      // 등록
      // this.id = this.id + 1
      /*
      this.items.push({
        id: this.id, title: this.title, content: this.content
      }) */
      // const today = new Date()
      const today = this.$moment(new Date()).format('YYYY-MM-DD, HH:mm:ss') // am,pm표시는 맨끝에 a 추가
      const r = await this.$firebase.firestore().collection('notes').add({
        title: this.title, content: this.content, rdate: today // firebase 컬렉션 id 사용 id: this.id
      })
      console.log('post', r)
      await this.get()
      this.title = ''
      this.content = ''
    },
    async get () {
      // 조회
      const snapshot = await this.$firebase.firestore().collection('notes').get()
      this.items = []
      snapshot.forEach(v => {
        // console.log('v.id', v.id)
        const { title, content, rdate } = v.data()
        // console.log('rdate', v.data().rdate.seconds)
        // const today = this.$moment(v.data().rdate.seconds).format('YYYY-MM-DD, HH:mm:ss')
        // console.log('today', today)
        this.items.push({
          title, content, rdate, id: v.id
        })
      })
      // console.log('snapshot', snapshot)
    },
    async put (id) {
      // 수정 doc(id).set 은 기존 자료 삭제 후 재등록 .update 가 해당 항목만 수정.
      const r = await this.$firebase.firestore().collection('notes').doc(id).update({
        title: this.title, content: this.content
      })
      await this.get()
      console.log('update', r)
      this.title = ''
      this.content = ''
    },
    async del (id) {
      // 삭제
      // const index = this.items.indexOf(id)
      // this.items.splice(index, 1)
      const r = await this.$firebase.firestore().collection('notes').doc(id).delete()
      await this.get()
      console.log('delete', r)
    }
  }
}
</script>
