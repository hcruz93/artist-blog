<!-- components/BiografiaPage.vue -->
<template>
  <main>

    <!-- Hero: Artista -->
    <section class="container pt-5 pt-md-5 pb-5">
      <div class="row align-items-center g-4">

        <div class="col-md-7 position-relative">
          <div class="overflow-hidden rounded-3 shadow">
            <img
              src="@/assets/images/bio_1.webp"
              alt="Manos del artista"
              class="img-fluid w-100 hero-artist-img"
            />
          </div>
          <div class="d-none d-md-block position-absolute bottom-0 end-0 translate-middle-x bg-light p-4 rounded-3 shadow" style="max-width: 280px; bottom: -30px !important;">
            <p class="text-secondary fst-italic mb-0 small">
              "En el silencio del taller, el barro dicta la forma y mis manos solo escuchan."
            </p>
          </div>
        </div>

        <div class="col-md-5 d-flex flex-column gap-3 mt-5 mt-md-0">
          <span class="text-danger fw-bold text-uppercase small">FUNDADOR & ARTESANO</span>
          <h1 class="display-4 fw-bold">Gabriel Gutíerrez</h1>
          <p class="text-secondary fs-5 lh-lg">
            Nacido en la Ciudad de México, mi camino comenzó entre la energía de 
            sus calles y la tranquilidad de mi hogar. Fue ahí donde, 
            experimentando con distintos materiales, descubrí la pasión por 
            transformar ideas en piezas hechas a mano.
          </p>
        </div>

      </div>
    </section>

    <!-- Quote -->
    <section class="bg-light py-5 border-top border-bottom">
      <div class="container text-center py-4">
        <div class="mx-auto" style="max-width: 700px;">
          <i class="bi bi-quote text-danger fs-1 d-block mb-3 opacity-50"></i>
          <h2 class="display-5 fst-italic fw-bold">La imperfección es el lenguaje de lo humano.</h2>
          <hr class="border-danger w-25 border-2 opacity-100 mx-auto mt-4">
        </div>
      </div>
    </section>

    <!-- Origen y Filosofía -->
    <section class="container py-5 my-5">
      <div class="row g-5 align-items-start">

        <div class="col-md-6 d-flex flex-column gap-4">
          <div>
            <h3 class="fw-bold text-danger mb-3">El Origen</h3>
            <p class="text-secondary lh-lg">
              Mi formación no comenzó en una academia, sino en el garaje de mi abuelo, donde el olor a serrín y cera de abeja era el perfume de cada tarde. Allí aprendí que la madera no se domina, se negocia con ella. Esta curiosidad inicial me llevó a recorrer talleres desde los Andes hasta el Alentejo, buscando la esencia de lo hecho a mano.
            </p>
          </div>
          <div class="bg-light p-4 rounded-3 shadow-sm">
            <h3 class="fw-semibold text-secondary mb-3">La Filosofía</h3>
            <p class="text-secondary mb-0">
              En Atelier Artisanal, rechazamos la producción en masa. Cada pieza que sale de mis manos lleva consigo horas de contemplación y la marca única de un momento irrepetible. No buscamos la perfección simétrica, sino la belleza de lo orgánico.
            </p>
          </div>
        </div>

        <div class="col-md-6 position-relative">
          <img
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDtPjywwGjWe0fW_GTYIAGx2jJ5z1rB2oiKRPklHCCW-XBVksIKzCIdnfGj2n8D6b6j6QMrF-KOtMRuZhyGoi9TTjziad6J-_n2HdFYqYFRFHiaMP7rT8Rgrgf1OuMe4bA2zllOSS_8gDKw1Fk9pBEgDkIMMcEYBPq5ERJ1uNxmrpVNjtEGUstazJTuxPEPE5llbkSHfnssWdJaQkGld-5LbMnAE_xKQ5OO5yXMFr6Nc54mtTpGy29BIUS2kioPwW5F5kWw2ZRfaLc"
            alt="Estudio del artista"
            class="img-fluid rounded-3 shadow w-100 studio-img"
          />
          <div class="d-none d-lg-flex position-absolute top-0 start-0 translate-middle bg-danger text-white rounded-circle align-items-center justify-content-center text-center fw-bold small badge-hecho"
               style="width: 110px; height: 110px; transform: rotate(-12deg) translate(-30%, 30%);">
            100% Hecho a Mano
          </div>
        </div>

      </div>
    </section>

    <!-- Materiales y Procesos -->
    <section class="py-5 bg-light">
      <div class="container">

        <div class="d-flex flex-column flex-md-row justify-content-between align-items-end mb-5 gap-3">
          <div>
            <span class="text-danger fw-bold text-uppercase small">Nuestra esencia</span>
            <h2 class="display-5 fw-bold mt-1">Materiales y Procesos</h2>
          </div>
          <p class="text-secondary mb-0" style="max-width: 400px;">
            La calidad comienza en la tierra. Solo trabajamos con proveedores que respetan el ciclo natural y la sostenibilidad del medio.
          </p>
        </div>

        <div class="row g-3">

          <!-- Barro -->
          <div class="col-md-6">
            <div class="material-card position-relative overflow-hidden rounded-3 shadow" style="height: 320px;">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDxpt26C80DgPQDEXlj2rtCzQwTtn22vHbc2ZpgHnft5xkoNDO3_153ckf1PMCD8nd9JFfI_-Wi-HQx7dwJ9giH6AFAuG6j0EpK5HFQVRokHQ7GN1xJqdQB0ZghLoKXAtutdYhkeMJA31T3PamCoJr2IF8E6RfRxqiziVP8l2zqGKQxbUQUk2sL0ji5J77dOsfhrcAUjYBteWcQ6UsKcbs4uvRKjRT1LKPWD4EE2HcjiBj9we_BPf1WZKTi9d0R-iaOWDGw8G1hga0"
                alt="Barro"
                class="w-100 h-100 object-fit-cover material-img"
              />
              <div class="position-absolute bottom-0 start-0 end-0 p-4 text-white material-overlay">
                <span class="small fw-bold opacity-75 d-block mb-1">#01</span>
                <h4 class="fs-5 fw-semibold mb-0">El Barro Sagrado</h4>
              </div>
            </div>
          </div>

          <!-- Lana -->
          <div class="col-md-3">
            <div class="material-card position-relative overflow-hidden rounded-3 shadow" style="height: 320px;">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCkiSWSjdVHtm2282We1V9jiivnuxNlSzLygzxy9qqXOBNUxGXQW9qWfTI2W7oc3rcz2c-WJ07_E61AVshKLZ0UL-OhNYSwM1XCBRua8sNQhBcCB48xmfIpJhssvjmzLqtaDHqnuF1BYevRnIr0EURWBqVAIsLIPXumg83txQRkWvm8vjI6wo9OXiPy5kdi9C9x8YXSd1G1WReKDyTZEBaSH7DnbivBEgjru2iPsFGPs8FF3-ima_LmctOL2FyftYAhAi6x8geP3UA"
                alt="Lana"
                class="w-100 h-100 object-fit-cover material-img"
              />
              <div class="position-absolute bottom-0 start-0 end-0 p-3 text-white material-overlay">
                <h4 class="fs-6 fw-semibold mb-0">Lana Virgen</h4>
              </div>
            </div>
          </div>

          <!-- Madera -->
          <div class="col-md-3">
            <div class="material-card position-relative overflow-hidden rounded-3 shadow" style="height: 320px;">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuAWgV-IuIE7EqgRtElXWhdEMuIJ2lL-04FZNC0LeBX2y_GF2LzHWSQkHNTEc7jGMIw1Q8eSICh14q0kowFptyjstmnxQKvd5zVRGHoGyNLdecjxM0R9EdYdQme4YNom-jxwUmLD26o8kI-aJhLzVA5SxCMEas0SG_OaY3zDPtY7Cpy7FC6aBzS87eaKK-G1eqVoCTf-4sclNQxo5tXyK6i7GAsTNWLD2J4Hob2MfUskP3y5BKBvwQ8q4DWaYMg4eoqiDq9BJMRelRA"
                alt="Madera"
                class="w-100 h-100 object-fit-cover material-img"
              />
              <div class="position-absolute bottom-0 start-0 end-0 p-3 text-white material-overlay">
                <h4 class="fs-6 fw-semibold mb-0">Madera Noble</h4>
              </div>
            </div>
          </div>

          <!-- El Tiempo -->
          <div class="col-12">
            <div class="bg-white rounded-3 shadow-sm p-4 p-md-5 d-flex flex-column flex-md-row align-items-center gap-4">
              <div class="flex-grow-1">
                <h4 class="fw-bold text-secondary mb-3">El Tiempo como Herramienta</h4>
                <p class="text-secondary mb-0">
                  No aceleramos el secado, ni forzamos los tintes. Cada proceso tiene su propio reloj interno. Creemos que la paciencia es el ingrediente invisible que otorga alma a nuestras creaciones.
                </p>
              </div>
              <div class="d-flex gap-3 flex-shrink-0">
                <div class="rounded-circle bg-light d-flex align-items-center justify-content-center" style="width: 90px; height: 90px;">
                  <i class="bi bi-thermometer-half text-secondary fs-2"></i>
                </div>
                <div class="rounded-circle bg-danger bg-opacity-10 d-flex align-items-center justify-content-center" style="width: 90px; height: 90px;">
                  <i class="bi bi-clock-history text-danger fs-2"></i>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>

  </main>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const email = ref('')

const onSubscribe = () => {
  if (!email.value) return
  console.log('Suscrito:', email.value)
  email.value = ''
}

// Scroll reveal
const revealSections = () => {
  document.querySelectorAll('.reveal-section').forEach(el => {
    const rect = el.getBoundingClientRect()
    if (rect.top < window.innerHeight - 100) {
      el.classList.add('visible')
    }
  })
}

onMounted(() => window.addEventListener('scroll', revealSections))
onUnmounted(() => window.removeEventListener('scroll', revealSections))
</script>