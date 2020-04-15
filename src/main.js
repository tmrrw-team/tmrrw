import Vue from 'vue'
import Vue2TouchEvents from 'vue2-touch-events'

import './plugins/composition-api'

import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

Vue.use(Vue2TouchEvents)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
