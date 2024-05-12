import { createStore } from "vuex";
import UserStore from '@/modules/users/store/user-store';

export default createStore({

  /**
   * Cada vez que se cree el store de otro objeto en la aplicación, debe de ir en modulos
   */
  modules: {
    user: UserStore    
  }
});