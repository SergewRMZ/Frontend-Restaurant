<template>
  
  <div class="container pt-5">
    <div class="row">
      <!-- Columna izquierda: Información del usuario -->
      <div class="col-md-6">
        <div class="profile-container bg-light rounded shadow-sm p-4">
          <div class="mb-4">
            <h2 class="pb-2">Perfil</h2>
            <font-awesome-icon :icon="['fas', 'user-circle']" class="text-primary"
              style="width: 200px; height: 200px;" />
          </div>

          <div class="profile-info">
            <p class="fs-5 mb-1 fs-6"><strong class="color__strong">ID:</strong> {{ this.getUserId }}</p>
            <p class="fs-5 mb-1 fs-6"><strong class="color__strong">Nombre:</strong> {{ name }}</p>
            <p class="fs-5 mb-1 fs-6"><strong class="color__strong">Correo:</strong> {{ email }}</p>
          </div>
        </div>
      </div>

      <!-- Columna derecha: Reservaciones -->
      <div class="col-md-6 mt-4 mt-md-0">
        <div class="reservations-container bg-light rounded shadow-sm p-4">
            <div v-if="reservations">
            <h3 class="text-center mb-4">Reservaciones</h3>
            <div class="overflow-auto" style="max-height: 400px;">
              <div class="card mb-3" v-for="(reservation, index) in reservations" :key="index">
                <div class="card-body">
                  <h5 class="card-title text-center fw-semibold"> {{ formatDate(reservation.date) }}</h5>
                  <strong class="color__strong">id: </strong> {{ reservation.id }}<br>
                  <strong class="color__strong">Hora: </strong> {{ reservation.time }}<br>
                  <strong class="color__strong">Número de personas: </strong> {{ reservation.numberPeople }}<br>
                  <a href="#" class="btn btn-danger mt-3">Eliminar reservación</a>
                </div>
              </div>
            </div>
          </div>
          
          <div v-else>
            <h3>No tienes ninguna reservación pendiente</h3>

            <router-link 
              :to="{ name: 'ReservacionUsuario' }" 
              class="btn btn-primary">
                Realizar una reservación
            </router-link>

          </div>
        </div>
      </div> <!-- Fin de columna derecha -->


    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters, mapState } from 'vuex';

export default {
  name: 'Perfil',
  data() {
    
  },

  methods: {
    ...mapActions('reservation', ['getUserReservation']),

    formatDate(rawDate) {
      const dateObj = new Date(rawDate);
      const options = {
        year: 'numeric', month: 'long', day: 'numeric'
      };
      return dateObj.toLocaleDateString('es-ES', options); // Formatear como fecha local
    }

  },

  computed: {
    ...mapState('user', ['name', 'email']),
    ...mapState('reservation', ['reservations']),
    ...mapGetters('user', ['getToken', 'getUserId']),


  },

  async mounted () {
    await this.getUserReservation({ id: this.getUserId, token: this.getToken});
  },
};
</script>

<style scoped lang="scss">
  @import '@/css/colors.scss';

  .profile-container,
  .reservations-container {
    background-color: #252525;
    // background-image: url('@/assets/Restaurante2.webp');
    // background-size: cover;  /* Cubrir todo el contenedor */
    // background-position: center;  /* Centrar la imagen */
    // background-repeat: no-repeat;  /* No repetir la imagen */
  }

  .profile-info {
    color: #495057;
    text-align: left;
    /* Color de texto gris oscuro */
  }

  .color__strong {
    color: $color__blue;
  }

  .card-body {
    text-align: left; // Alinear texto a la izquierda dentro del cuerpo de la tarjeta
  }

  @media (min-width: 768px) {

    .profile-container,
    .reservations-container {
      padding: 20px;
    }
  }
</style>
