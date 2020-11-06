import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'
import { errorHandler } from '@/utils'
import '@/plugins/moment'
import '@/plugins/vuelidate'
import "@/style.css"
import Vuetify from '@/plugins/vuetify'

Vue.config.productionTip = false
Vue.config.errorHandler = errorHandler

new Vue({
  router,
  store,
  vuetify: Vuetify,
  render: h => h(App)
}).$mount('#app')
