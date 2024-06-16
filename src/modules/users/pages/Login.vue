<template>
  <div
    class="page-header  min-vh-100"
    :style="{
      backgroundImage: 'url(' + require('@/assets/Restaurante.webp') + ')',
    }"
    loading="lazy"
  >
  
  <div class="overlay">
    <div class="login">
      <form class="form1" @submit.prevent="handleSubmit">
        <h1 class="h11">Iniciar sesión</h1>
        <label class="label1">Correo</label>
        <input class="input1" type="email" v-model="this.email">
        <label class="label1">Contraseña</label>
        <input  class="input1" type="password" v-model="this.password">
        <button class="button11" :disabled="!isFormValid">Ingresar</button>
      </form>
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
    ...mapState('user', ['message_error']),
    isFormValid() {
      return this.email.trim() !== "" && this.password.trim() !== "";
    },
  },

  methods: {
    ...mapActions('user', ['login']),

    async handleSubmit() {
      try {
        const data = {
          email: this.email,
          password: this.password,
        };

        console.log(data);

        await this.login(data);

        this.$router.push({ name: 'ReservacionUsuario' });
      } catch (error) {     
        
        
        alert("Correo o contraseña incorrecto");
        console.log(this.message_error);
      }
    },
  },
};
</script>

<style scoped>
  
</style>