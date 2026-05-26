<template>
  <div>
    <!-- Hero -->
    <section class="hero-section position-relative d-flex align-items-center justify-content-center overflow-hidden">
      <img
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA3l89bSPqsArI4Q-2bp8zcfmbvZ9tLv62-kaPBk8PtX7BO4mNazV8MsXUTKW5rFmQMlmXQDDdc7klQ_o8XtHME5wyvtHwy_sYNYzp93DdEuIjL30p69FtwQspA7GKNr5T1sgHsTRwonOMqPbsa9_8h6dJarwvUg91dis0CCmHF5qIbRfLMs0wTbIlNtjpoDofNyRhRDKejiVP0kI-aK6xu2IJayXqKEGgmWxzqobnBxzVPY_mBePJ2I5T6tXOzm2n3z2bqkmrLYmA"
        alt="Taller de artesanía"
        class="hero-img position-absolute w-100 h-100 object-fit-cover"
        ref="heroImg"
      />
      <div class="position-absolute top-0 start-0 w-100 h-100 bg-dark opacity-25"></div>
      <div class="position-relative text-center text-white px-3 z-1">
        <h1 class="display-4 fw-bold mb-4">Creaciones con alma y tierra</h1>
        <p class="fs-5 mx-auto mb-5 opacity-90" style="max-width: 600px;">
          Donde cada imperfección cuenta una historia y cada pieza es un testimonio del tiempo y la dedicación manual.
        </p>
        <button class="btn btn-danger px-5 py-3 fw-semibold shadow">
          Explorar Colección
        </button>
      </div>
    </section>

    <!-- Sobre el Artista -->
    <section class="py-5 container">
      <div class="row align-items-center g-4">
        <div class="col-md-5 order-2 order-md-1">
          <span class="text-danger fw-bold text-uppercase small">La Esencia</span>
          <h2 class="fw-bold mt-2 mb-3">Sobre el Artista</h2>
          <hr class="border-danger w-25 border-2 opacity-100 mb-4">
          <p class="text-secondary mb-4">
            Mi nombre es Gabriel Gutiérrez Santillan y, en este rincón del mundo, 
            el tiempo se detiene para dar vida a lo que imagino. A través del barro, 
            la nobleza de la cartonería y el sutil entrelazado de los textiles, 
            busco siempre un diálogo íntimo entre la materia prima y la intención del corazón. 
            Cada obra es única, irrepetible, 
            y nace de un profundo respeto por los oficios manuales y 
            la paciencia que cada pieza merece.
          </p>
          <a href="#" class="btn btn-outline-secondary d-inline-flex align-items-center gap-2">
            Conoce mi historia
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
        <div class="col-md-7 order-1 order-md-2">
          <img
            src="@/assets/images/perfil_2.webp"
            alt="El artista trabajando"
            class="img-fluid rounded-3 shadow"
            style="width: 90%"
          />
        </div>
      </div>
    </section>

    <!-- Últimas Obras -->
    <section class="py-5 bg-light">
      <div class="container">
        <div class="d-flex justify-content-between align-items-end mb-4">
          <div>
            <h2 class="fw-bold mb-1">Últimas Obras</h2>
            <p class="text-secondary mb-0">Fragmentos de tierra convertidos en piezas de vida.</p>
          </div>
          <button class="btn btn-link text-danger d-none d-md-block">Ver todas</button>
        </div>

        <div class="row g-3">
          <!-- Item grande -->
          <div class="col-md-6">
            <div class="obra-card position-relative overflow-hidden rounded-3 shadow h-100">
              <img
                src="@/assets/images/galeria_1.webp"
                alt="Vasija de barro"
                class="w-100 h-100 object-fit-cover obra-img"
              />
              <div class="position-absolute bottom-0 start-0 end-0 p-4 text-white obra-overlay">
                <span class="small fw-bold text-warning d-block mb-1">GRES / TORNO</span>
                <h3 class="fs-4 fw-semibold mb-0">Vasija Ánima</h3>
              </div>
            </div>
          </div>

          <!-- Items pequeños -->
          <div class="col-md-6">
            <div class="row g-3 h-100">
              <div class="col-12">
                <div class="obra-card position-relative overflow-hidden rounded-3 shadow" style="height: 450px;">
                  <img
                    src="@/assets/images/galeria_2.webp"
                    alt="Tejido artesanal"
                    class="w-100 h-100 object-fit-cover obra-img"
                  />
                  <div class="position-absolute bottom-0 start-0 end-0 p-3 text-white obra-overlay">
                    <h3 class="fs-5 fw-semibold mb-0">Tapiz de Lino Indigo</h3>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="obra-card position-relative overflow-hidden rounded-3 shadow" style="height: 200px;">
                  <img
                    src="@/assets/images/galeria_3.webp"
                    alt="Herramientas"
                    class="w-100 h-100 object-fit-cover obra-img"
                  />
                  <div class="obra-hover position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <span class="text-white border border-white px-3 py-1 small fw-bold">Ver Detalles</span>
                  </div>
                </div>
              </div>
              <div class="col-6">
                <div class="obra-card position-relative overflow-hidden rounded-3 shadow" style="height: 200px;">
                  <img
                    src="@/assets/images/galeria_4.webp"
                    alt="Cuenco de madera"
                    class="w-100 h-100 object-fit-cover obra-img"
                  />
                  <div class="obra-hover position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                    <span class="text-white border border-white px-3 py-1 small fw-bold">Ver Detalles</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>

    <!-- Newsletter -->
    <section class="py-5 container text-center" style="max-width: 800px;">
      <i class="bi bi-flower1 text-danger fs-1 d-block mb-3"></i>
      <h2 class="fw-bold mb-3">Únete al Gremio</h2>
      <p class="text-secondary mb-4">
        Recibe historias sobre procesos creativos, nuevos lanzamientos y talleres presenciales en nuestro atelier.
      </p>
      <div class="d-flex flex-column flex-md-row gap-3 justify-content-center">
        <input
          v-model="email"
          type="email"
          class="form-control"
          placeholder="Tu correo electrónico"
          style="max-width: 400px;"
        />
        <button class="btn btn-secondary px-4 fw-semibold" @click="onSubscribe">
          Suscribirme
        </button>
      </div>
    </section>

  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted, reactive } from 'vue'

const heroImg = ref(null)
const email = ref('')

const onScroll = () => {
  if (heroImg.value) {
    heroImg.value.style.transform = `translateY(${window.scrollY * 0.4}px)`
  }
}

const onSubscribe = () => {
  if (!email.value) return
  console.log('Suscrito:', email.value)
  email.value = ''
}

onMounted(() => window.addEventListener('scroll', onScroll))
onUnmounted(() => window.removeEventListener('scroll', onScroll))
</script>