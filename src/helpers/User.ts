import Api from "@/api/users";
import TypeUser from "@/interfaces/user-interface";

const User = (() => {
  const registerUser = async (user: TypeUser) => {
    try {
      const response = await Api.post('/auth/register', user);
      if (response.status === 200) {
        return response.data;
      }
  
      else {
        console.log(response.statusText);
      }

    } catch (error) {
      console.error(error);
      throw error;
    }
  }

  const loginUser = async (user: TypeUser) => {
    console.log(user);

    try {
      const response = await Api.post('/auth/login', user);
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