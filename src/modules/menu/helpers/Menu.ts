import Api from "@/api/users";


const Menu = (() => {
  const getProducts = async (page: number, limit: number) => {
    try {
      const response = await Api.get('/products', {params: {page, limit} });
      if (response.status === 201) return response.data;
      else throw new Error (response.statusText);
    } catch (error) {
      console.error(error);
    }
  };

  const getCategories = async () => {
    try {
      const token = sessionStorage.getItem('TOKEN');

      if (!token) {
        throw new Error(`No se encontró el token de autenticación`);
      }

      const response = await Api.get('/categories', { params: {page: 1, limit: 10} });
      if (response.status === 200)
        return response.data;

      else 
        console.log(response.statusText);

    } catch (error) {
      throw error;
    }
  };

  return {
    getProducts,
    getCategories
  }
})();

export default Menu;