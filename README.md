## Vue 웹앱 프로젝트

---

- 기술참조 Vuejs: https://kr.vuejs.org/v2/guide/components.html
- 기술참조 Vuetify: https://vuetifyjs.com/ko/components/toolbars/
- 기술참조2: Front-end 간단한 게시판 구현 ( VueJs + Vuetify). https://dollvin.tistory.com/61
- 기술참조3: Vue와 Firebase로 모던웹사이트 만들기. https://fkkmemi.github.io/talk/vf-000-intro/
- 기술참조4: 기술참조3의 Git소스. https://github.com/fkkmemi/vf
- 개발언어: Vue(Javascript 문법 확장판)
- 개발환경: VSCode IDE사용, vue create . 사용-
- Vue 프로젝트 설치시 vue-router, vuex 선택 이후 모두 default 선택.
- 실행환경: yarn serve = npm run serve (필요: npm i -g yarn)
- 배포환경: 구글파이어베이스 firebase deploy(필요:npm install -g firebase-tools)
- firebase 가이드: https://firebase.google.com/docs/guides?authuser=0
- plugins/axios.js 에서 로컬과 클라우드용 node서버 지정.(firebase functions는 노드js서버 기본설치됨.)
- 결과확인링크: https://covid19-kr.web.app/
- 작업결과소스: https://github.com/miniplugin/vue
- 같은의미: npm install = yarn install = yarn (package.json 의 의존성 패키지를 node_moudles 폴더에 설치해 준다.)

---

### 20200416 작업내역(아래)

- firebase인증(구글로그인) 인증 과 vuex 전역변수(상태변이) 통합 테스트.
- console firebase Database 접근설정변경

```
allow read;
allow write: if request.auth.uid != null;
```

- 게시판 로그인 인증 처리 OK.(수정한 파일들-아래)
- plugins/firebase.js ( 구글인증 hook 전 처리 onAuthStateChanged )
- store/index.js ( vuex 미들웨어로 로그인 user 와 token 전역변수 처리 )
- App.vue ( 상단에 vue조건 v-if="\$store.state.user" 으로 보이기, 숨기기 )
- /vies/lectures/Notes.vue 게시판 vue조건에 따라 쓰기/수정 보이기, 숨기기 )

### 20200415 작업내역(아래)

- 로그인 인증 처리 전 전역변수(상태변이) 기술 테스트.
- HTTP상태코드 내역 ( http://developer.mozilla.org/ko/docs/Web/HTTP/Status )
- 노드 express 에러 wrap 처리.( functions폴더 > npm install express-async-errors --save )
- require('express-async-errors') 사용법: https://www.npmjs.com/package/express-async-errors
- 미들웨어(node서버와 클라이언트사이)로 헤더값을 인터셉터 하는 방법: https://github.com/axios/axios
- firebase store(아래) - firebase init 때 functions 와 store 선택 ( /src/store/index.js 자동생성 )
- vuex: 뷰 템플릿 상태 관리 ( https://vuex.vuejs.org/kr/ ) - 로그인처리에 사용예정.(상태-변이-액션)

### 20200414 작업내역(아래)

- 로그인 인증 처리 전 nodejs 백엔드 서비스 구현.
- firebase 에서는 functions 에서 백엔드 서버로 nodejs를 기본으로 제공한다.
- firebase functions (=nodejs서버) 설치 후 백엔드 코드 구현. ( firebase init functions 설치 )
- 백엔드 API 서버 실행: 아래 ( firebase emulators:start --only functions )
- http://localhost:5001/covid19-kr/us-central1/helloWorld
- 크롬 RESTFul api툴 부메랑 확장프로그램 설치 ( Boomerang ) 및 RESTFul api CRUD 확인.
- 에러페이지 표시 모듈 사용 (npm install --save vue-toasted) 매번 try ~ catch 사용할 필요 없음.

### 20200413 작업내역(아래)

- firebase Authentication 에 구글 인증 구현. ( plugins/firebase.js > import 'firebase/auth' )
- 구글 console firebase 사이트에서 Database 규칙 인증 후 read, write 변경(아래)

```
  //allow read, write: if request.time < timestamp.date(2020, 5, 11);
  allow read, write: if request.auth.uid != null;
```

### 20200412 작업내역(아래)

- firebase 파이어스토어 DB에 CRUD 구현(결과URL: https://covid19-kr.web.app/lectures/notes ).
- 날짜관련 뷰-모먼트 모듈사용(아래 소스코드)

```javascript
// main.js
import VueMoment from 'vue-moment' // npm install --save vue-moment
Vue.use(VueMoment) // 사용예, https://codesandbox.io/s/k9v3qjvq73
```

```javascript
// Notes.vue
methods: {
    async post () {
      // 등록
      const today = this.$moment(new Date()).format('YYYY-MM-DD, HH:mm:ss')
      const r = await this.$firebase.firestore().collection('notes').add({ // DB입력 add 매서드
        title: this.title, content: this.content, rdate: today // firebase 컬렉션 자동생성 id 사용
      })
      console.log('post', r)
      await this.get() // 비동기 - 순서대로 출력용.
      this.title = ''
      this.content = ''
    },
    ...
}
```

- 작업예정: firebase 인증(auth)로 로그인 구현.

### 20200411 작업내역(아래)

- firebase 파이어스토어 DB Config file 로 원격 DB(몽고DB처럼 NoSql) 접근 확인.
- npm install --save firebase
- /firebaseConfig.js 파일 생성 후 .gitignore 민감정보 제외 설정.

### 20200410 작업내역(아래)

- vue 에서 동기(기본) 과 비동기(async > await) 함수 차이 확인.
- CRUD중 입력/삭제 기능 구현.

### 20200409 작업내역(아래)

- vuetify기반 v-list-group > template 태그로 2단 메뉴 만들기.
- vuetify기반 v-card 태그로 카드 디자인 만들기.
- 반응형 레이아웃 구조 만들기: v-container > v-layout > v-flex
- 반응형에서 보통 xs12 sm6 md4 3개 까지만 지정한다.

```
클래스 속성 및 기기별 Viewport 종류
- Extra small   xs	[mobile]	    < 600px
- Small	        sm	[tablet/pad]  600px > < 960px
- Medium	      md	[notebook]	  960px > < 1264px*
- Large	        lg	[desktop]	    1264px* > < 1904px*
- Extra large	  xl	[4k ultra-wides monitor]	> 1904px*
```

### 20200408 작업내역(아래)

- vuetify기반 네비게이션 드로어(v-navigation-drawer)로 토글 메뉴 만들기.

### 20200407 작업내역(아래)

- vuetify기반 툴바 만들기
- vuetify mdi icons not showing 버그.해결은 index.html에 아래 내용 추가.

```
<link href="https://cdn.jsdelivr.net/npm/@mdi/font@4.x/css/materialdesignicons.min.css" rel="stylesheet" />
```

### 20200405 작업내역(아래)

- Cannot find module 'eslint-plugin-vue' error 때문에 npm install --save-dev eslint@5.16 으로 다운설치.
- vuetify css프레임웍 패키지 재설치 설치 옵션 (아래)
- Choose a preset: Configure (advanced)
- Use a pre-made template? (will replace App.vue and HelloWorld.vue) No //Y로 선택하면 router가 안됨.
- Use custom theme? No
- Use custom properties (CSS variables)? No
- Select icon font - Material Icons
- Use fonts as a dependency (for Electron or offline)? Yes
- Use a-la-carte components? No
- Use babel/polyfill? Yes
- Select locale - Korean
- firebase login 후 firebase init(한번만 하면됨) 이후는 firebase deploy
- firebase init 옵션(아래)
- What do you want to use as your public directory? dist
- Configure as a single-page app (rewrite all urls to /index.html)? Yes //를 해야지만 vue라우트가 작동함.
- File dist/index.html already exists. Overwrite? No //주의 Yes하면, Vue에서 작업한 것이 아닌, firebase 초기파일로 덮어 쓰게 됩니다.
- Skipping write of dist/index.html

### 20200403 작업내역(아래)

- firebase init | deploy -> hosting 으로 생성한 Vue 프로젝트 배포.
- css framework 로 디자인 사용.(\$ vue add vuetify). 설치시 모두 No선택(Yes로 하면 router가 않됨.)
