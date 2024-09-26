import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/components/Home.vue'
import Register from '@/components/users/Register.vue'
import AddArticle from '@/components/admin/AddArticle.vue'
import UpdateArticle from '@/components/admin/UpdateArticle.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      component: Home
    },
    {
      path: '/users/register',
      component: Register
    },
    {
      path: '/admin/addArticle',
      component: AddArticle
    },

    {
      path: '/admin/updateArticle/:id',
      component: UpdateArticle
    },
    
  ]
})

export default router
