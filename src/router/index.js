import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Login from '@/components/loginandregister/Login.vue'
import Note from '@/components/loginandregister/Note.vue'
import NoteGet from '@/components/loginandregister/NoteGet.vue'
import ForgitPwd from '@/components/loginandregister/ForgitPwd.vue'
import FNoteGet from '@/components/loginandregister/FNoteGet.vue'
import SetNew from '@/components/loginandregister/SetNew.vue'
import Register from '@/components/loginandregister/Register.vue'
import RNoteGet from '@/components/loginandregister/RNoteGet.vue'
import RSetNew from '@/components/loginandregister/RSetNew.vue'
import ProductDetails from '@/ProductDetails.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/HelloWorld',
      component: HelloWorld
    },
    {
      path: '/Login',
      component: Login
    },
    {
      path: '/Note',
      component: Note
    },
    {
      path: '/NoteGet',
      component: NoteGet
    },
    {
      path: '/ForgitPwd',
      component: ForgitPwd
    },
    {
      path: '/FNoteGet',
      component: FNoteGet
    },
    {
      path: '/SetNew',
      component: SetNew
    },
    {
      path: '/Register',
      component: Register
    },
    {
      path: '/RNoteGet',
      component: RNoteGet
    },
    {
      path: '/RSetNew',
      component: RSetNew
    },
    {
      path: '/ProductDetails',
      component: ProductDetails
    },
  ]
})
