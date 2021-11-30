import Vue from 'vue'
import VueRouter from 'vue-router'
import Accueil from '../pages/accueil.vue'
import Communes from '../pages/communes.vue'
import Association from '../pages/association.vue'
import Editions from '../pages/editions.vue'
import Liens from '../pages/liens.vue'
import Mentions_Legales from '../pages/mentions_legales.vue'
import Politique_Confidentialite from '../pages/politique_confidentialite.vue'
import Press_Book from '../pages/press_book.vue'
import Rejoindre from '../pages/rejoindre.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Accueil',
    component: Accueil,
  },

  {
    path: '/communes',
    name: 'Communes',
    component: Communes,
  },

  {
    path: '/association',
    name: 'Association',
    component: Association,
  },

  {
    path: '/editions',
    name: 'Editions',
    component: Editions,
  },

  {
    path: '/liens',
    name: 'Liens',
    component: Liens,
  },

  {
    path: '/mentions_legales',
    name: 'Mentions Legales',
    component: Mentions_Legales,
  },

  {
    path: '/politique_confidentialite',
    name: 'poltique_confidentialite',
    component: Politique_Confidentialite,
  },

  {
    path: '/press_book',
    name: 'press_book',
    component: Press_Book,
  },

  {
    path: '/rejoindre',
    name: 'rejoindre',
    component: Rejoindre,
  },
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
