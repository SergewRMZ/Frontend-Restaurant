<template>
  <div
    class="page-header align-items-start min-vh-100"
    :style="{
      backgroundImage: 'url(' + require('@/assets/Restaurante.webp') + ')',
    }"
    loading="lazy"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>

    <div class="container my-auto">
      <div class="row">
        <div class="col-lg-4 col-md-8 col-12 mx-auto">
          <div class="card z-index-0 fadeIn3 fadeInBottom">
            <div class="card-header z-index-2 header-form">
              <div class="border-radius-lg pe-1">
                <h4 class="text-black font-weight-bolder text-center mt-2 mb-0">
                  Iniciar Sesión
                </h4>
              </div>
            </div>

            <div class="card-body">
              <form @submit.prevent="handleSubmit">
                <div class="mb-3 text-start">
                  <label for="email" class="form-label"
                    >Correo</label
                  >
                  <input
                    id="email"
                    type="email"
                    v-model="email"
                    name="email"
                    class="form-control"
                    placeholder="Correo Electrónico"
                    required
                  />
                </div>

                <div class="mb-5 text-start">
                  <label for="password" class="form-label"
                    >Contraseña</label
                  >
                  <input
                    id="password"
                    type="password"
                    v-model="password"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                </div>

                <button class="btn btn-dark w-75" type="submit" :disabled="!isFormValid">Enviar</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  computed: {

    // Aquí se va a mapear el state, las propiedades del estado del objeto.
    // Se coloca el nombre del módulo, como se nombró en el archivo del store principal.

    ...mapState('user', ['message_error']),
    isFormValid() {
      return this.email.trim() !== "" && this.password.trim() !== "";
    },
  },

  methods: {

    // Aquí se van a mapear las acciones del objeto.

    ...mapActions('user', ['login']),

    async handleSubmit() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };

        await this.login(data);

        /** En caso de que el login sea correcto, se llama al router para cargar la vista 'HomeUsuario' */
        this.$router.push({ name: 'ReservacionUsuario' });
      } catch (error) {
        console.log(this.message_error);
      }
    },
  },
};
</script>

<style scoped>
  
</style>