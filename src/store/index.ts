import { createStore } from "vuex";
import UserStore from '@/modules/users/store/user-store';
import ReservationStore from "@/modules/users/store/reservation-store";

export default createStore({
  modules: {
    user: UserStore  ,
    reservation: ReservationStore  
  }
});