<script setup>



</script>

<template>
  <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
          <h2>Reserva de salas</h2>
        </a>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-end" id="navbarNav">
        <div class="d-flex align-items-center justify-content-around">
          <form class="d-flex me-3 w-75" role="search" @submit.prevent="buscar">
            <div class="input-group">
              <input
                v-model="termoBusca"
                class="form-control me-2"
                type="search"
                placeholder="Buscar..."
                aria-label="Search"
              />
              <button class="btn btn-outline-success" type="submit">
                <i class="bi bi-search"></i>
              </button>
            </div>
          </form>
          <a
            href="#"
            class="nav-link"
            data-bs-toggle="modal"
            data-bs-target="#exampleModal"
            
          >
            <i class="bi bi-plus-circle fs-2 mx-2"></i>
          </a>
          <a href="#" class="nav-link" >
            <i class="bi bi-person-circle fs-2 mx-2"></i>
          </a>
        </div>
      </div>
    </div>
  </nav>

  <Modal ref="modalRef" />
</template>
