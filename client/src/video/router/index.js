import Vue from 'vue'
import Router from 'vue-router'
import home from '../pages/home'
import videos from '../pages/videos'
import videoPlay from '../pages/videoPlay'
import videoUpload from '../pages/videoUpload'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/videos',
      name: 'videos',
      component: videos
    },
    {
      path: '/videoPlay',
      name: 'videoPlay',
      component: videoPlay
    },
    {
      path: '/videoUpload',
      name: 'videoUpload',
      component: videoUpload
    }
  ]
})
