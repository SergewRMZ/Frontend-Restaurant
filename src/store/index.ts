import { createStore } from "vuex";
import UserStore from '@/modules/users/store/user-store';
import ReservationStore from "@/modules/users/store/reservation-store";
import MenuStore from "@/modules/menu/store/menu-store";

export default createStore({
  modules: {
    user: UserStore,
    reservation: ReservationStore,
    menu: MenuStore
  }
});