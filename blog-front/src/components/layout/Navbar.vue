<!-- components/AppHeader.vue -->
<template>
  <header class="bg-white shadow-sm sticky-top">
    <nav class="navbar navbar-expand-md container py-3">
      
      <!-- Logo -->
      <a class="navbar-brand fw-bold fs-4 text-danger" href="#">
        tltk_art
      </a>

      <!-- Toggler mobile -->
      <button
        class="navbar-toggler border-0"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navMenu"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Links -->
      <div class="collapse navbar-collapse" id="navMenu">
        <ul class="navbar-nav mx-auto gap-3">
          <li class="nav-item">
            <a class="nav-link active fw-semibold" href="#">Inicio</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#">Biografía</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#">Galería</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#">Blog</a>
          </li>
          <li class="nav-item">
            <a class="nav-link text-secondary" href="#">Contacto</a>
          </li>
        </ul>

        <!-- Iconos -->
        <div class="d-flex align-items-center gap-3 ms-auto">
          <button class="btn btn-link text-danger p-0" @click="onSearch">
            <i class="bi bi-search fs-5"></i>
          </button>
          <button class="btn btn-link text-danger p-0" @click="onCart">
            <i class="bi bi-bag fs-5"></i>
          </button>
        </div>
      </div>

    </nav>
  </header>
</template>

<script setup>
const onSearch = () => {
  console.log('Abrir búsqueda')
}

const onCart = () => {
  console.log('Abrir carrito')
}
</script>