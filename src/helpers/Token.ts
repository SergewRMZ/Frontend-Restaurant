const Token = (() => {
  const getToken = () => {
    const token = sessionStorage.getItem('TOKEN');
    return token ? true : false;
  };

  // Aquí se tiene que validar que el token pertenezca al restaurante.
  const isValidToken = () => {
    
  }

  return {
    getToken
  }
})();

export default Token;