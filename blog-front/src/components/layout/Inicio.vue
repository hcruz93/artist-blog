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
            Mi nombre es Julián, y en este rincón del mundo, el tiempo se detiene. Utilizo técnicas ancestrales
            para moldear el barro y teñir fibras naturales, buscando siempre ese diálogo íntimo entre la materia
            prima y la intención del corazón. Cada obra es única, irrepetible, y nace de un profundo respeto por
            la sostenibilidad.
          </p>
          <a href="#" class="btn btn-outline-secondary d-inline-flex align-items-center gap-2">
            Conoce mi historia
            <i class="bi bi-arrow-right"></i>
          </a>
        </div>
        <div class="col-md-7 order-1 order-md-2">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKlvJMzyts43s2PfsXCBaq-j6wluSmL3PTJUnqjli2tYfOztPUbjYCpduJtkZxZJR-DMHJiM-0asbvfT9LeX6uu-5bvhfBgxkh13P4Wxaai1vM3icC7rNZix8_uu3T__8sPtRjODlgmjO7ufWNXFp1HqJoUgecW2ziyUIUh0703dbg1Ppx1hnj-ZcJ_-qwnrwFyWrkC7K8tfIl2kKnP6EvSGPenYVcrOeNbeKfaUqYoWxrJbw2M3PQ0s5OoER7LefKIsT5F6QmsBY"
            alt="El artista trabajando"
            class="img-fluid rounded-3 shadow"
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
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuA1nuhZ2mEG_seadwIAH4qeiMO4fVB3gZSiAtJNlpAbsplJ2SvvYgl2iaia836YrafGcM2gQhN-DaCre5u3-opK7Eam7EfwUTkvatdW_TM6XuSkg48L-BJfzoULoJdNV6b2nRviSZJ90Ujqe8tuHv5rKEN9vL-3Cqf06jiurHrh008JnR9OcDNElPkQvKMeZD_Y6hPq6Sp4IQ5wtySZjAPLbmYTQ2fPEddX3CWIyN1iMHQEbzV1nJSFc583zBYRH7ZBVcJFag32Eok"
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
                <div class="obra-card position-relative overflow-hidden rounded-3 shadow" style="height: 200px;">
                  <img
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAfsValWnJYj8F0ufZmKJtSeYg8geNXzW_0oRX7oEWLsoEopRNXGlu8oj-ep_hYSDpnClUMysrBqIQhpCjO7wnShZG-EP_qMe5aagNucBCFCiQRyYPSv0v3iCrPbLQ-xHFzcJCbiK4nQsZrFYqpAdnQPqvSdfQDJWU6shnlG1ioN8f-dqWqJKrRE_z5n4zZEgIBp0Xs2E_yxioZkEJp7JkSmlYkib3WBLgfoj5iu42SmpIwuAvwR1siiFOl6lZ9Vj1VrD7N7FRY0"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA2egOpeRs4kjDcHn0q-9rFwlyLUvg-dCfqDsJeUAo7TKep1mcM6IyvgdnF_RAcTIlViBLybezsEMNqMMwAxQVqwQ25N_MDUPf0kwsLtPQFCdyF11T3rirBDidj8C0bcAyF57Pmr3FDM1-LMyQJEjUVdLS6r_FVlyspZg9V5U9htV1qV8M8ts2KdeTca-KcdLWoVPNoBoSl-ILdU5upxm0cffup1ObPUmzmXKbmXpwqWrRp3btSP9-JBNVICrYlTBOfzRzWbEhUh0Q"
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
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC5Tx3G6_jhHBe2--w7RMWy1Q47mL5dWo5aGkr3U-A7HB2qw2JJNtCZEr5RTAhvTqrOLUP1H3OphC2Ty6JDm5jtZJ50xsCV8kdOY83xOfHVpl15X4uHi0Jvm39md2YkFR7WhZokoTpUTVHEHdL6Lo2VSIYOw_a8Obadzv-QQfEKqUIF5JTthS90eRvWE0mf-ehprHbeZudmX_ZVtipUFgF8e_OhwNcofgeUl7A-PNW9qq_IeHNZzDfgHTJvrPCp8uI-4"
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
import { ref, onMounted, onUnmounted } from 'vue'

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

<style scoped>
.hero-section {
  height: 819px;
}
.hero-img {
  object-position: center;
  filter: brightness(0.85);
}
.obra-card .obra-img {
  transition: transform 0.6s ease;
}
.obra-card:hover .obra-img {
  transform: scale(1.05);
}
.obra-overlay {
  background: linear-gradient(to top, rgba(0,0,0,0.6), transparent);
}
.obra-hover {
  background: rgba(0,0,0,0.2);
  opacity: 0;
  transition: opacity 0.3s ease;
}
.obra-card:hover .obra-hover {
  opacity: 1;
}
</style>