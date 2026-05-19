<template>
  <div>
    <Navbar />
    <Inicio />
    <h2>Bienvenido a mi página</h2>
  </div>
</template>

<script>
import Navbar from "./components/layout/Navbar.vue"
import Inicio from "./components/layout/Inicio.vue";

export default {
  components: {
    Navbar,
    Inicio
  }
}
</script>

