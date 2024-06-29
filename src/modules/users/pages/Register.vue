<template>
  <div
    class="page-header align-items-start min-vh-100"
    :style="{
      backgroundImage: 'url(' + require('@/assets/Restaurante5.jpg') + ')',
    }"
    loading="lazy"
  >
    <div class="overlay">
      <div class="login">
        <form class="form1" @submit.prevent="handleSubmit">

          <h1 class="h11">Registrarse</h1>

          <label class="label1">Nombre</label>
          <input class="input1" v-model="name" id="name" name="name" type="text" required>

          <label class="label1">Correo</label>
          <input class="input1" v-model="email" id="email" name="email" type="email" required>

          <label class="label1">Contraseña</label>
          <input class="input1" v-model="password" id="password" type="password" required>

          <button class="button11" type="submit" :disabled="!isFormValid">
            Enviar</button>
        </form>
      </div>
    </div>

  </div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
  data() {
    return {
      name: "",
      email: "",
      password: "",
    };
  },

  computed: {
    isFormValid() {
      return (
        this.name.trim() !== "" &&
        this.email.trim() !== "" &&
        this.password.trim() !== ""
      );
    },
  },

  methods: {
    async handleSubmit() {
      try {
        const data = await registerUser({
          name: this.name,
          email: this.email,
          password: this.password,
        });

        await this.registerUser(data);
        this.$router.push({ name: 'login-user' });
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped></style>