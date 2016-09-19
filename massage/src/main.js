import Vue from 'vue'
import Router from 'vue-router'
import App from './App'
import main from './components/main.vue'
import detail from './components/detail.vue'

Vue.use(Router)
var router = new Router()

router.map({
  '/': {
    component: main
  },
  '/detail/:id': {
    component: detail
  }
})

router.redirect({
  '*': '/'
})

router.start(App, '#app')
