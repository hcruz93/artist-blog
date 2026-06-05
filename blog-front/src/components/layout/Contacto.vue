<!-- components/ContactoPage.vue -->
<template>
  <main class="container py-5">

    <!-- Hero -->
    <section class="mb-5 text-center text-md-start">
      <span class="text-danger fw-bold text-uppercase small d-block mb-3">Hablemos de barro y alma</span>
      <h2 class="display-5 fw-bold mb-4" style="max-width: 600px;">
        ¿Tienes un proyecto en mente o buscas una pieza única?
      </h2>
      <p class="text-secondary fs-5" style="max-width: 500px;">
        Nuestro taller es un espacio abierto para la creación. Escríbenos o visítanos para descubrir la belleza de lo hecho a mano.
      </p>
    </section>

    <!-- Grid principal -->
    <div class="row g-4 align-items-start">

      <!-- Formulario -->
      <div class="col-lg-7">
        <div class="bg-light rounded-3 shadow-sm p-4 p-md-5">
          <h3 class="fw-bold mb-4">Envíanos un mensaje</h3>
          <div class="d-flex flex-column gap-4">

            <div>
              <label class="form-label fw-semibold small text-secondary" :class="{ 'text-danger': focused === 'name' }">
                Nombre
              </label>
              <input
                v-model="form.name"
                type="text"
                class="form-control py-3 px-4"
                placeholder="Tu nombre completo"
                @focus="focused = 'name'"
                @blur="focused = null"
              />
            </div>

            <div>
              <label class="form-label fw-semibold small text-secondary" :class="{ 'text-danger': focused === 'email' }">
                Email
              </label>
              <input
                v-model="form.email"
                type="email"
                class="form-control py-3 px-4"
                placeholder="tu@email.com"
                @focus="focused = 'email'"
                @blur="focused = null"
              />
            </div>

            <div>
              <label class="form-label fw-semibold small text-secondary" :class="{ 'text-danger': focused === 'message' }">
                Mensaje
              </label>
              <textarea
                v-model="form.message"
                class="form-control py-3 px-4"
                placeholder="Cuéntanos qué tienes en mente..."
                rows="5"
                style="resize: none;"
                @focus="focused = 'message'"
                @blur="focused = null"
              ></textarea>
            </div>

            <div>
              <button
                class="btn btn-danger rounded-pill px-5 py-3 fw-bold shadow"
                @click="onSubmit"
              >
                Enviar mensaje
              </button>
            </div>

          </div>
        </div>
      </div>

      <!-- Info y redes -->
      <div class="col-lg-5 d-flex flex-column gap-5 ps-lg-4">

        <!-- Ubicación -->
        <div>
          <h4 class="fw-semibold mb-3 d-flex align-items-center gap-2">
            <i class="bi bi-geo-alt text-danger"></i> El Taller
          </h4>
          <p class="text-secondary mb-0">
            Calle de los Artesanos, 24<br/>
            Barrio de las Letras, 28014<br/>
            Madrid, España
          </p>
        </div>

        <!-- Horarios -->
        <div>
          <h4 class="fw-semibold mb-3 d-flex align-items-center gap-2">
            <i class="bi bi-clock text-danger"></i> Horarios
          </h4>
          <ul class="list-unstyled text-secondary d-flex flex-column gap-2">
            <li class="d-flex align-items-center gap-2">
              <span class="bullet"></span> Lunes a Viernes: 10:00 — 19:00
            </li>
            <li class="d-flex align-items-center gap-2">
              <span class="bullet"></span> Sábados: 11:00 — 14:00
            </li>
            <li class="d-flex align-items-center gap-2">
              <span class="bullet"></span> Domingos: Cerrado
            </li>
          </ul>
        </div>

        <!-- Contacto directo -->
        <div>
          <h4 class="fw-semibold mb-3 d-flex align-items-center gap-2">
            <i class="bi bi-at text-danger"></i> Contacto Directo
          </h4>
          <p class="text-secondary mb-0">
            <a href="mailto:hola@atelierartisanal.com" class="text-secondary text-decoration-none hover-primary d-block">
              hola@atelierartisanal.com
            </a>
            <a href="tel:+34912345678" class="text-secondary text-decoration-none hover-primary">
              +34 912 345 678
            </a>
          </p>
        </div>

        <!-- Redes sociales -->
        <div class="pt-4 border-top">
          <span class="text-danger fw-bold text-uppercase small d-block mb-4">Síguenos en redes</span>
          <div class="d-flex gap-3">
            <a
              v-for="social in socials"
              :key="social.icon"
              href="#"
              class="social-btn d-flex align-items-center justify-content-center rounded-circle border"
              @click.prevent="onSocialClick($event.currentTarget)"
            >
              <i :class="social.icon"></i>
            </a>
          </div>
        </div>

      </div>
    </div>

    <!-- Mapa -->
    <section class="mt-5 pt-4">
      <div class="position-relative rounded-3 overflow-hidden shadow" style="height: 500px;">
        <img
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuDG-ZD_769kJS33xLtlDyb-8orIHRHi-bvxrancNJfg82gYjsOJ5QjpUVsJLkZDIPr1qSIpls5HRAdRE8kDVrCescJJZ7aUgbgBo7_ImN1e3WC0wta3pCM7U9NDYLAAmytIru4hsWCzX6Vhy6jWO4Xesq2v4vuHSBQZeKS4lnAmeTV04_GLjby87VoNPgVEjJC5VnSLdn6eFqEa2wS-mz_B8qfO3pP9BIee3Lobj8saX0QCJIhe0TBEyqLH5NZ5Yznxc5gU1nCVg5I"
          alt="Mapa del taller"
          class="w-100 h-100 object-fit-cover map-img"
        />
        <div class="position-absolute bottom-0 start-0 m-4 bg-white rounded-3 shadow p-4 border" style="max-width: 280px;">
          <h5 class="fw-bold text-danger mb-2">Visita el Atelier</h5>
          <p class="text-secondary mb-0 small">
            Te esperamos en el corazón del Barrio de las Letras para compartir una taza de té y hablar de diseño.
          </p>
        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref } from 'vue'

const focused = ref(null)

const form = ref({
  name: '',
  email: '',
  message: ''
})

const socials = [
  { icon: 'bi bi-camera fs-5' },
  { icon: 'bi bi-pinterest fs-5' },
  { icon: 'bi bi-facebook fs-5' },
]

const onSubmit = () => {
  if (!form.value.name || !form.value.email || !form.value.message) return
  console.log('Formulario enviado:', form.value)
  form.value = { name: '', email: '', message: '' }
}

const onSocialClick = (el) => {
  el.style.transform = 'scale(0.9)'
  setTimeout(() => el.style.transform = 'scale(1)', 150)
}
</script>

<style scoped>
.bullet {
  width: 6px;
  height: 6px;
  background-color: #9a4025;
  border-radius: 1px;
  display: inline-block;
  flex-shrink: 0;
}
.social-btn {
  width: 48px;
  height: 48px;
  color: #536252;
  border-color: #dcc0b9 !important;
  transition: all 0.2s ease;
}
.social-btn:hover {
  background-color: #d4e4d0;
  color: #3c4a3c;
}
.map-img {
  filter: sepia(0.4) contrast(0.9) brightness(1.05);
}
.hover-primary:hover {
  color: #9a4025 !important;
}
</style>