import { createRouter, createWebHashHistory } from 'vue-router'
import Film from '../views/Film.vue'
import Cinema from '../views/Cinema.vue'
import Center from '../views/Center.vue'
import Detail from '../views/Detail.vue'

const routes = [
  {
    path: '/film',
    component: Film,
    name: 'film'
  },
  {
    path: '/detail/:id',
    component: Detail
  },
  {
    path: '/cinema',
    component: Cinema
  },
  {
    path: '/center',
    component: Center
  },
  {
    path: '/:kerwin', // 修正视频的错误，
    redirect: {
      name: 'film'
    }
  }
]

const router = createRouter({
  // history: createWebHistory(process.env.BASE_URL),
  history: createWebHashHistory(),
  // mode  :history , mode :hash
  routes
})

router.beforeEach((to, from, next) => {
  if (to.fullPath === '/center') {
    console.log('拦截')
  } else {
    next()
  }
})

export default router
