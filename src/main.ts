import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/index';
import Swal from '@/plugins/swal.plugin';

// Font awesome
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faUser, faUserCircle } from '@fortawesome/free-solid-svg-icons';

library.add(faUser, faUserCircle);

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.scss';
import 'animate.css';

createApp(App)
  .component('font-awesome-icon', FontAwesomeIcon)
  .use(router)
  .use(store)
  .use(Swal)
  .mount('#app')
