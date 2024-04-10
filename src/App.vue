<template>
  <Navbar></Navbar>
  <router-view></router-view>
</template>

<script lang="ts">
import { defineAsyncComponent, defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  components: {
    Navbar: defineAsyncComponent(() => import (/* webpackChunkName: "Navbar" */ '@/modules/shared/components/Navbar.vue'))
  }
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
