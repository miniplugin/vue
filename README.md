## Vue 웹앱 프로젝트

---

- 기술참조1: https://vuetifyjs.com/ko/components/toolbars/
- 기술참조2: Front-end 간단한 게시판 구현 ( VueJs + Vuetify). https://dollvin.tistory.com/61
- 기술참조3: Vue와 Firebase로 모던웹사이트 만들기. https://fkkmemi.github.io/talk/vf-000-intro/
- 기술참조4: 기술참조3의 Git소스. https://github.com/fkkmemi/vf
- 개발언어: Vue(Javascript 문법 확장판)
- 개발환경: VSCode IDE사용, vue create . 사용-
- Vue 프로젝트 설치시 vue-router, vuex 선택 이후 모두 default 선택.
- 실행환경: yarn serve = npm run serve (필요: npm i -g yarn)
- 배포환경: 구글파이어베이스 firebase deploy(필요:npm install -g firebase-tools)
- 결과확인링크: https://covid19-kr.web.app/
- 작업결과소스: https://github.com/miniplugin/vue
- 같은의미: npm install = yarn install = yarn (package.json 의 의존성 패키지를 node_moudles 폴더에 설치해 준다.)

---

### 20200410 작업내역(아래)

- vue 에서 동기(기본) 과 비동기(async > await) 함수 차이 확인.

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
