import Vue from 'vue'
import Router from 'vue-router'

// Layouts
import documentation from '@/layouts/documentation'

// Pages
import docDefaultPage from '@/pages/documentation/index'

Vue.use(Router)

export default new Router({
  routes: [
    { path: '/', name: 'Documentation', component: documentation, children: [
        { path: '', name: 'Doc default page', component: docDefaultPage }
      ]
    }
  ]
})
