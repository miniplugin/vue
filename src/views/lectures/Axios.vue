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
      <v-flex xs12>
        <v-toolbar color="primary">
          Axios CRUD 사용 예
        </v-toolbar>
      </v-flex>
      <!--
      줄나눔: row
      줄나눔: wrap
      -->
      <v-flex xs3>
        <v-card>
          <v-card-title>
            Create
          </v-card-title>
          <v-textarea
            label="내용을 입력하세요"
            v-model="textCreate"
            rows="10"
          ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="create"
            >저장</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title>
            Read
          </v-card-title>
          <v-textarea
            label="내용을 입력하세요"
            v-model="textRead"
            rows="10"
          ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="read"
            >읽기</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title>
            Update
          </v-card-title>
          <v-textarea
            label="내용을 입력하세요"
            v-model="textUpdate"
            rows="10"
          ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="update"
            >수정</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
      <v-flex xs3>
        <v-card>
          <v-card-title>
            Delete
          </v-card-title>
          <v-textarea
            label="내용을 입력하세요"
            v-model="textDelete"
            rows="10"
          ></v-textarea>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn
              color="primary"
              @click="del"
            >삭제</v-btn>
          </v-card-actions>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
export default {
  data () {
    return {
      textCreate: '',
      textRead: '',
      textUpdate: '',
      textDelete: ''
    }
  },
  // promise 프로미스 처리: 자바스크립트에서 비동기 처리에 사용되는 객체 - 처리 순서로 됨 리턴값 .then() 매서드 사용
  // async 비동기 처리: promise보다 처리 코드 단순, async ~ await 사용
  methods: {
    /* create () {
      this.$axios.post('http://localhost:5001/covid19-kr/us-central1/test')
        .then(r => { this.textCreate = r.data })
        .catch(e => console.error(e.message))
    }, */
    async create () {
      // this.$toasted.show('hello toasted')
      // this.$toasted.global.error('잘못된 정보입니다.')
      const r = await this.$axios.post('https://us-central1-covid19-kr.cloudfunctions.net/test/wef')
      this.textCreate = r.data
    },
    async read () {
      /* this.$axios.get('http://localhost:5001/covid19-kr/us-central1/test/1234')
        .then(r => { this.textRead = r.data })
        .catch(e => console.error(e.message)) */
      try {
        const r = await this.$axios.get('https://us-central1-covid19-kr.cloudfunctions.net/test/1234')
        this.textRead = r.data
      } catch (e) {
        console.error(e.message)
      }
    },
    update () {
      this.$axios.put('https://us-central1-covid19-kr.cloudfunctions.net/test/1234')
        .then(r => { this.textUpdate = r.data })
        .catch(e => console.error(e.message))
    },
    del () {
      this.$axios.delete('https://us-central1-covid19-kr.cloudfunctions.net/test/1234')
        .then(r => { this.textDelete = r.data })
        .catch(e => console.error(e.message))
    }
  }
}
</script>
