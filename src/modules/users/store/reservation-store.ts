import TypeReservation from '@/interfaces/reservation-interface';
import Reservation from '../helpers/Reservation';

interface ReservationState {
    reservations: TypeReservation[] | null,
    message_error: string | null,
};

const ReservationStore = {
    namespaced: true,

    state: (): ReservationState => ({
        reservations: null,
        message_error: ''
    }),

    mutations: {
        setReservation(state: ReservationState, reservations: TypeReservation[]) {
            state.reservations = reservations;
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
                const data = await Reservation.createReservation(reservation,);
            } catch (error: any) {
                commit('setErrorMessage', error.response.data.error);
            }
        },

        async getUserReservation ({ commit }: any, { id, token }: { id: string, token: string }) {
            try {
                const data = await Reservation.getUserReservation(id, token);
                console.log(data);
                commit('setReservation', data);
            } catch (error: any) {
                commit('setErrorMessage', error.response.data.error);
            }
        }
    }
};

export default ReservationStore;