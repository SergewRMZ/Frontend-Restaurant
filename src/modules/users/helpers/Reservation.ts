import TypeReservation from '@/interfaces/reservation-interface';
import Api from '@/api/users';
 
const Reservation = (() => {
    const createReservation = async (reservation: TypeReservation) => {
        try {
            const token = sessionStorage.getItem('TOKEN');
            if (!token) {
                throw new Error('No se encontró el token de autenticación');
            }

            const response = await Api.post('/reservation', reservation, {
                headers: {
                    'Authorization': `Bearer ${token}`
                }
            });

            if (response.status === 200) {
                return response.data;
            }

            else {
                console.log(response.statusText);
            }
            
        } catch (error: any) {
            throw error;
        }
    }

    return {
        createReservation
    }
})();

export default Reservation;