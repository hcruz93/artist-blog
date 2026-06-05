<script setup>
import { ref, computed } from 'vue'

const filtro = ref('all')

const obras = [
  {
    id: 1,
    categoria: 'ceramica',
    titulo: 'Jarra de Humo',
    descripcion: 'Pieza única moldeada a mano con técnicas de ahumado ancestral.',
    imagen: 'https://picsum.photos/600/800?random=1'
  },
  {
    id: 2,
    categoria: 'textiles',
    titulo: 'Manta Crepúsculo',
    descripcion: 'Tejida en telar de cintura con algodón orgánico.',
    imagen: 'https://picsum.photos/800/500?random=2'
  },
  {
    id: 3,
    categoria: 'madera',
    titulo: 'Utensilios Bosque',
    descripcion: 'Tallados a mano en nogal recuperado.',
    imagen: 'https://picsum.photos/600/500?random=3'
  },
  {
    id: 4,
    categoria: 'madera',
    titulo: 'Mesa Origen',
    descripcion: 'Mobiliario artesanal de madera sólida.',
    imagen: 'https://picsum.photos/600/500?random=4'
  },
  {
    id: 5,
    categoria: 'ceramica',
    titulo: 'Colección Tierra',
    descripcion: 'Juego de cuencos inspirados en los colores del valle.',
    imagen: 'https://picsum.photos/800/500?random=5'
  },
  {
    id: 6,
    categoria: 'textiles',
    titulo: 'Tapiz Botánico',
    descripcion: 'Bordado artesanal con motivos naturales.',
    imagen: 'https://picsum.photos/600/500?random=6'
  }
]

const obrasFiltradas = computed(() => {
  if (filtro.value === 'all') return obras

  return obras.filter(
    obra => obra.categoria === filtro.value
  )
})
</script>

<template>
  <div>
    <!-- HERO -->

    <section class="container py-5">
      <div class="row">
        <div class="col-lg-8">
          <h1 class="display-4 fw-bold mb-3">
            Obras con Alma
          </h1>

          <p class="lead text-muted">
            Una curaduría de piezas únicas donde el material dicta la forma y
            el tiempo se detiene en cada detalle.
          </p>
        </div>
      </div>
    </section>

    <!-- FILTROS -->

    <section class="container mb-5">
      <div class="d-flex flex-wrap gap-2">

        <button
          class="btn"
          :class="filtro === 'all'
            ? 'btn-dark'
            : 'btn-outline-dark'"
          @click="filtro = 'all'"
        >
          Todas las Obras
        </button>

        <button
          class="btn"
          :class="filtro === 'ceramica'
            ? 'btn-dark'
            : 'btn-outline-dark'"
          @click="filtro = 'ceramica'"
        >
          Cerámica
        </button>

        <button
          class="btn"
          :class="filtro === 'textiles'
            ? 'btn-dark'
            : 'btn-outline-dark'"
          @click="filtro = 'textiles'"
        >
          Textiles
        </button>

        <button
          class="btn"
          :class="filtro === 'madera'
            ? 'btn-dark'
            : 'btn-outline-dark'"
          @click="filtro = 'madera'"
        >
          Madera
        </button>

      </div>
    </section>

    <!-- GALERIA -->

    <section class="container pb-5">

      <div class="row g-4">

        <div
          v-for="obra in obrasFiltradas"
          :key="obra.id"
          class="col-md-6 col-lg-4"
        >
          <div class="card border-0 shadow-sm h-100 gallery-card">

            <img
              :src="obra.imagen"
              :alt="obra.titulo"
              class="card-img-top gallery-img"
            >

            <div class="card-body">

              <span class="badge bg-secondary mb-2 text-capitalize">
                {{ obra.categoria }}
              </span>

              <h5 class="card-title">
                {{ obra.titulo }}
              </h5>

              <p class="card-text text-muted">
                {{ obra.descripcion }}
              </p>

            </div>

            <div class="card-footer bg-transparent border-0 pb-3">
              <button class="btn btn-dark w-100">
                Consultar Disponibilidad
              </button>
            </div>

          </div>
        </div>

      </div>

    </section>

  </div>
</template>

<style scoped>
.gallery-card {
  transition: all .3s ease;
}

.gallery-card:hover {
  transform: translateY(-6px);
}

.gallery-img {
  height: 320px;
  object-fit: cover;
}
</style>