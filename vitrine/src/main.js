import { createApp } from 'vue';
import './assets/css/styles.css';
import App from './App.vue';
import router from './router/index.js'; // configuração das rotas

// Cria a aplicação Vue e monta no elemento com id 'app'
createApp(App)
  .use(router) 
  .mount('#app');
