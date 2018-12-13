import Vue from 'vue'
import App from './vue/App.vue'
import VueApexCharts from 'vue-apexcharts'
import BootstrapVue from 'bootstrap-vue'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

Vue.use(BootstrapVue)
Vue.use(VueApexCharts)

document.addEventListener('DOMContentLoaded', () => {
  return new Vue({
    el: '#dashboard',
    render: h => h(App)
  })
})
