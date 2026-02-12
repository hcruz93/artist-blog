<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary px-4">
    
    <!-- Logo -->
    <a class="navbar-brand fw-bold" href="#">
      tltk_art
    </a>

    <!-- Botón responsive -->
    <button
      class="navbar-toggler"
      type="button"
      data-bs-toggle="collapse"
      data-bs-target="#navbarMenu"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <!-- Links -->
    <div class="collapse navbar-collapse" id="navbarMenu">
      
      <!-- Centro -->
      <ul class="navbar-nav mx-auto">
        <li class="nav-item">
          <a class="nav-link" href="#">Products</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Features</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Resources</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Plans & Pricing</a>
        </li>
      </ul>

      <!-- Derecha -->
      <div class="d-flex">
        <a class="nav-link text-white me-3" href="#">Log In</a>
        <button class="btn btn-outline-light">
          Get Started
        </button>
      </div>
    </div>
  </nav>
</template>
