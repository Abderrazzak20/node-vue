import { createRouter, createWebHistory } from 'vue-router';
import homeVue from './components/home.vue';
import about from './components/about.vue'
import formulaireComponent from '../src/components/addFormulaire.vue'
import modifPage from '../src/components/modifiePage.vue'
const routes = [
  {
    
    path: '/',
    name: 'Home',
    component: homeVue,
  },
  {
    path: '/about',
    name: 'about',
    component: about,
  },
  {
    path: '/add/:id',
    name: 'formulaireComponent',
    component: formulaireComponent,
  },
  {
    path: '/modif/:id', // Usa il nome del parametro che desideri
    name: 'modifPage',
    component: modifPage,
    props: true, // Abilita il passaggio dei parametri come props
  },


 
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
