import TypeReservation from '@/interfaces/reservation-interface';
import Reservation from '../helpers/Reservation';

interface ReservationState {
    reservation: TypeReservation | null,
    message_error: string | null,
};

const ReservationStore = {
    namespaced: true,

    state: (): ReservationState => ({
        reservation: null,
        message_error: ''
    }),

    mutations: {
        setReservation(state: ReservationState, reservation: TypeReservation) {
            state.reservation = reservation;
        },

        setErrorMessage (state: ReservationState, message_error: string | null) {
            state.message_error = message_error;
        },

        clearErrorMessage (state: ReservationState) {
            state.message_error = '';
        }
    },

    actions: {
        async createReservation ({commit}: any, reservation: TypeReservation) {
            try {
                const data = await Reservation.createReservation(reservation);
            } catch (error: any) {
                commit('setErrorMessage', error.response.data.error);
            }
            
        }
    }
};

export default ReservationStore;