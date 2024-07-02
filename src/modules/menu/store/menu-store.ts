import Product from "@/interfaces/product-interface";
import Menu from "../helpers/Menu";

interface MenuState {
  products: Product[] | null,
  total: number | null
}
const MenuStore = {
  namespaced: true,

  state: (): MenuState => ({
    products: null,
    total: null,
  }),

  mutations: {
    setProducts (state: MenuState, products: Product[]) {
      state.products = products;
    },

    setTotal (state: MenuState, total: number) {
      state.total = total;
    }
  },

  actions: {
    async getProducts ({commit}:any, {page, limit}: {page: number, limit: number}) {
      try {
        const data = await Menu.getProducts(page, limit);
        commit('setProducts', data.products);
        commit('setTotal', data.total);
        console.log(data);
      } catch (error) {
        throw error;
      }
    }
  }
};

export default MenuStore;
