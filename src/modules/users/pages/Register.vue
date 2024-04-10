
<template>
  <div class="container-sm mt-5 w-50">
    <div class="row">
      <div class="col">
        <div class="card bg-dark text-white shadow">
          <div class="card-body">
            <h5 class="card-title">Registrarse</h5>

            <form @submit.prevent="handleSubmit">
              <div class="mb-3">
                <label for="name" class="form-label" >Nombre</label>
                <input v-model="name" id="name" name="name" type="text" class="form-control" required>
              </div>

              <div class="mb-3">
                <label for="email" class="form-label">Correo</label>
                <input v-model="email" id="email" name="email" type="email" class="form-control" required>
              </div>

              <div class="mb-3">
                <label for="password" class="form-label">Password</label>
                <input v-model="password" id="password" type="password" class="form-control" required>
              </div>

              <button class="btn btn-primary" type="submit" :disabled="!isFormValid">Enviar</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import registerUser from '@/helpers/register-user';
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
    };
  },

  computed: {
    isFormValid () {
      return this.name.trim() !== '' && this.email.trim() !== '' && this.password.trim() !== '';
    }
  },

  methods: {
    async handleSubmit() {
      
      try {
        const data = await registerUser({ 
          name: this.name, 
          email: this.email, 
          password: this.password
        });
      } 
      
      catch (error) {
        console.error(error);
      }
      
    }
  }
};

</script>

<style scoped>
  
</style>