import Vue from 'vue'
import App from './App.vue'
import { BootstrapVue, IconsPlugin, FormInputPlugin  } from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'
import { CarouselPlugin } from 'bootstrap-vue'


Vue.use(CarouselPlugin)
Vue.use(BootstrapVue)
Vue.use(FormInputPlugin)
Vue.use(IconsPlugin)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
