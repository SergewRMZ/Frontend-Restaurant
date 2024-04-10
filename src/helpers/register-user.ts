import usersApi from "@/api/users";
import User from "@/interfaces/user-interface";

// export const User = (() => {

// })();
const registerUser = async (user: User) => {
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

export default registerUser;