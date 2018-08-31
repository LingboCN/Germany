import Vue from 'vue'
import Router from 'vue-router'
import Main from './views/Main'
import NewsTop from './views/NewsTop'
import User from './views/User'
import NotFound from './views/NotFound'
import LogIn from './views/LogIn'
import SignUp from './views/SignUp'

Vue.use(Router);

export default new Router({
  routes: [
      {path: '/', component: Main },
      {path: '/main', component: Main },
      {path: '/newstop', component: NewsTop },
      {path: '/user', component: User, children: [
          {path: '', component: LogIn },
          {path: 'login', component: LogIn },
          {path: 'signup', component: SignUp }
          ]},
      {path: '*', component: NotFound },
  ]
})
