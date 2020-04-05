## Vue 웹앱 프로젝트

---

- 기술참조1: Front-end 간단한 게시판 구현 ( VueJs + Vuetify). https://dollvin.tistory.com/61
- 기술참조2: Vue와 Firebase로 모던웹사이트 만들기. https://fkkmemi.github.io/talk/vf-000-intro/
- 개발언어: Vue(Javascript 문법 확장판)
- 개발환경: VSCode IDE사용, vue create . 사용-
- Vue 프로젝트 설치시 vue-router, vuex 선택 이후 모두 default 선택.
- 실행환경: yarn serve = npm run serve (필요: npm i -g yarn)
- 배포환경: 구글파이어베이스 firebase deploy(필요:npm install -g firebase-tools)
- 결과확인링크: https://covid19-kr.web.app/
- 같은의미: npm install = yarn install = yarn (package.json 의 의존성 패키지를 node_moudles 폴더에 설치해 준다.)

---

### 20200403 작업내역(아래)

- firebase init | deploy -> hosting 으로 생성한 Vue 프로젝트 배포.
- css framework 로 디자인 사용.(\$ vue add vuetify). 설치시 모두 No선택(Yes로 하면 router가 않됨.)
