import { NavigationGuardNext, RouteLocationNormalized } from 'vue-router'; // Importar los tipos necesarios de Vue Router
import Token from '@/helpers/Token';

// Se obtiene el token, en caso de no obtener el token se regresa al login
const isAuthenticatedGuard = async (to: RouteLocationNormalized, from: RouteLocationNormalized, next: NavigationGuardNext) => {
  if (Token.getToken())
    next()

  else {
    next({name: 'login-admin'});
  }
};

export default isAuthenticatedGuard;
