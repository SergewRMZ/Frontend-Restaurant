<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container">
      <a class="navbar-brand" href="#">Logo</a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'home' }"
              >Home</router-link
            >
          </li>

          <li class="nav-item">
            <router-link class="nav-link" :to="{ name: 'carta' }"
              >Menú</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="!this.isLogged"
              :to="{ name: 'login-user' }"
              >Iniciar Sesión</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="!this.isLogged"
              :to="{ name: 'register-user' }"
              >Registrarse</router-link
            >
          </li>
          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="this.isLogged"
              :to="{ name: 'ReservacionUsuario' }"
              >Reservación</router-link
            >
          </li>

          <li class="nav-item">
            <router-link
              class="nav-link"
              v-if="this.isLogged"
              v-on:click="logoutAction"
              :to="{ name: 'home' }"
              >Cerrar Sesión</router-link
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  data() {
    return {};
  },

  computed: {
    ...mapState("user", ["message_error", "isLogged", "token"]),
  },

  methods: {
    ...mapActions("user", ["logout"]),

    async logoutAction() {
      // Muestras una ventana de carga
      await this.logout();
    },
  },
};
</script>

<style scoped>
div a {
  margin: 0 20px;
  text-decoration: none;
  font-weight: bold;
}

div .router-link-exact-active {
  color: #1472b9;
}
</style>