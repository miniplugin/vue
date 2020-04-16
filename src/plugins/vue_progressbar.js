import Vue from 'vue'
import VueProgressBar from 'vue-progressbar'

const options = {
  // 기본값으로 표현(아래 무시)
  /* color: '#bffaf3',
  failColor: '#874b4b',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  location: 'left',
  inverse: false */
}

Vue.use(VueProgressBar, options)
