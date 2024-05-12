<template>
<h2 class="mt-5">¡Bienvenido {{ this.name }}!</h2>
Pones un formulario donde se solicite la fecha, número de personas y la hora.
</template>

<script>
import { mapState } from 'vuex'
export default {
  computed: {
    ...mapState('user', ['name']),
  }
}
</script>

<style>

</style>