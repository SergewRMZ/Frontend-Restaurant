import User from "@/helpers/User";
import TypeUser from "@/interfaces/user-interface";

interface UserState {
  isLogged: boolean,
  token: string | null,
  userId: string | null, 
  name: string | null,
  email: string | null,
  message_error: string | null
}

const UserStore = {
  namespaced: true, // Permite encapsular todo este código como un módulo. Todo lo que hay aquí será accedido solo por el nombre del módulo User

  state: (): UserState => ({
    isLogged: sessionStorage.getItem('logged') === 'true',
    token: sessionStorage.getItem('TOKEN') || null,
    userId: sessionStorage.getItem('userId') || null,
    name: sessionStorage.getItem('nombre') || null,
    email: sessionStorage.getItem('email') || null,
    message_error: '',
  }),

  mutations: {
    setLoggedIn(state: UserState, isLogin: boolean) {
      state.isLogged = isLogin;
      sessionStorage.setItem('logged', isLogin.toString());
    },

    setToken(state: UserState, token:string | null) {
      state.token = token;
      sessionStorage.setItem('TOKEN', token!);
    },

    setUserId(state: UserState, id: string | null) {
      state.userId = id;
      sessionStorage.setItem('userId', id!);
    },

    setName(state: UserState, name: string | null) {
      state.name = name;
      sessionStorage.setItem('nombre', name!);
    },

    setEmail (state: UserState, email: string | null) {
      state.email = email;
      sessionStorage.setItem('email', email!);
    },

    setMessage(state: UserState, message:string | null) {
      state.message_error = message;
    },

    clearErrorMessage (state: UserState) {
      state.message_error = '';
    }
  },

  actions: {
    async login ({ commit }:any, user:TypeUser) {
      try {
        const data = await User.loginUser(user);
        console.log(data);
        commit('setToken', data.token); 
        commit('setLoggedIn', true); 
        commit('setName', data.user.name);
        commit('setEmail', data.user.email);
        commit('setUserId', data.user.id);

      } catch (error:any) {
        commit('setMessage', error.response.data.error);
        throw error;
      }
    },

    async registerUser ({commit}: any, user:TypeUser) {
      try {
        const data = await User.registerUser(user);
        console.log(`Usuario registrado ${data}`);
      } catch (error: any) {
        throw error;
      }
    },

    async logout ({ commit }: any) {
      sessionStorage.removeItem('TOKEN');
      sessionStorage.removeItem('logged');
      sessionStorage.removeItem('userId');
      sessionStorage.removeItem('nombre');
      sessionStorage.removeItem('email');
      commit('setLoggedIn', false);
      await new Promise(resolve => setTimeout(resolve, 500));
    }
  },

  getters: {
    getToken(state: UserState) {
      return state.token;
    },

    getUserId(state: UserState) {
      return state.userId;
    }
  }
}

export default UserStore;
