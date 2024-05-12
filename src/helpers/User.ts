import usersApi from "@/api/users";
import TypeUser from "@/interfaces/user-interface";

const User = (() => {
  const registerUser = async (user: TypeUser) => {
    try {
      const response = await usersApi.post('/register', user);
      if (response.status === 200) {
        return response.data;
      }
  
      else {
        console.log(response.statusText);
      }

    } catch (error) {
      console.error('Error al registrar el usuario');
      throw error;
    }
  }

  const loginUser = async (user: TypeUser) => {
    console.log(user);

    try {
      const response = await usersApi.post('/login', user);
      if(response.status === 200)
        return response.data;

      else
        console.log(response.statusText);
    } catch (error) {
      console.error('Error al iniciar sesión');
      throw error;
    }
  };

  return {
    registerUser,
    loginUser
  }
})();


export default User;