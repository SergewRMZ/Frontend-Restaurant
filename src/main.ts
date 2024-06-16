import { createApp } from 'vue'
import App from './App.vue'
import router from './router/router';
import store from './store/index';
import Swal from 'sweetalert2';

import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './css/styles.scss';
import 'animate.css';

createApp(App)
  .use(router)
  .use(store)
  .mount('#app')
