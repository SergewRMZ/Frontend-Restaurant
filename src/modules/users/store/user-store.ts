import User from "@/helpers/User";
import TypeUser from "@/interfaces/user-interface";

// Estado del usuario, definir las propiedades que controlarán el estado de usuario.
// El usuario puede estar loggeado, tener o no el token o recibir un mensaje de error.

// Aquí se dfine el tipo de dato del estado del usuario.
interface UserState {
  isLogged: boolean,
  token: string | null,
  name: string | null,
  message_error: string | null
}

const UserStore = {
  namespaced: true, // Permite encapsular todo este código como un módulo. Todo lo que hay aquí será accedido solo por el nombre del módulo User


  // Estado inicial, carga los valores del localStorage del navegador.
  state: (): UserState => ({
    isLogged: localStorage.getItem('logged') === 'true',
    token: sessionStorage.getItem('TOKEN') || null,
    name: localStorage.getItem('nombre') || null,
    message_error: '',
  }),

  // Las mutaciones son las que cambian el estado del objeto
  mutations: {
    setLoggedIn(state: UserState, isLogin: boolean) {
      state.isLogged = isLogin;
      localStorage.setItem('logged', isLogin.toString());
    },

    setToken(state: UserState, token:string | null) {
      state.token = token;
      sessionStorage.setItem('TOKEN', token!);
    },

    setName(state: UserState, name: string | null) {
      state.name = name;
      localStorage.setItem('nombre', name!);
    },

    setMessage(state: UserState, message:string | null) {
      state.message_error = message;
    }
  },

  // Las actions son los métodos o las funciones que se van a ejecutar. 
  // Llamadas al backend por ejemplo.

  /** La llamada commit(nombreMutation, valor) tienes que poner el nombre de la mutation
   * y el parámetro que le vas a mandar.
   */

  actions: {
    async login ({ commit }:any, user:TypeUser) {
      try {
        const data = await User.loginUser(user);
        commit('setToken', data.token); 
        commit('setLoggedIn', true); 
        commit('setName', data.user.name);
      } 
      
      catch (error:any) {
        commit('setMessage', error.response.data.error);
        throw error;
      }
    },

    async logout ({ commit }: any) {
      sessionStorage.removeItem('TOKEN');
      commit('setLoggedIn', false);
      await new Promise (resolve => setTimeout(resolve, 500));
    }
  }
}

export default UserStore;