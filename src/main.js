import { createApp } from 'vue';

import './plugins/composition-api'
import './plugins/touch-events'

import App from './App.vue'
import router from './router'

createApp(App).use(router).mount('#app')
