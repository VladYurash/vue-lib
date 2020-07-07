import Vue from 'vue'
import App from './App.vue'
import router from './router'

Vue.config.productionTip = false

/* eslint-disable */
const Modal = {
  install(Vue) {
    this.event = new Vue()

    Vue.prototype.$modal = {
      show(modal, opt = {}) {
        Modal.event.$emit('show', modal, opt)
      },
      $event: this.event
    }
  }
}

Vue.use(Modal)

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
