<!-- components/AppFooter.vue -->
<template>
  <footer class="bg-light mt-5">
    <div class="container py-5 text-center d-flex flex-column align-items-center gap-3">

      <h4 class="fw-bold fs-5">Atelier Artisanal</h4>

      <nav class="d-flex gap-4 mt-2 mb-2">
        <a href="#" class="text-secondary text-decoration-none small fw-semibold hover-primary">Materiales</a>
        <a href="#" class="text-secondary text-decoration-none small fw-semibold hover-primary">Privacidad</a>
        <a href="#" class="text-secondary text-decoration-none small fw-semibold hover-primary">Sostenibilidad</a>
      </nav>

      <p class="text-secondary small mb-0">© 2024 Atelier Artisanal. Hecho a mano con alma y tierra.</p>

      <div class="d-flex gap-3">
        <a href="#" class="text-secondary footer-icon">
          <i class="bi bi-share fs-5"></i>
        </a>
        <a href="#" class="text-secondary footer-icon">
          <i class="bi bi-envelope fs-5"></i>
        </a>
      </div>

    </div>
  </footer>
</template>

<script setup>
</script>

<style scoped>
.hover-primary:hover,
.footer-icon:hover {
  color: #9a4025 !important;
  transition: color 0.2s ease;
}
</style>