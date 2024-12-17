<script setup>
import { ref, reactive } from "vue";
import { insertUser, insertReserva} from '../supabase';
const formData = reactive({
  nome: "",
  matricula: "",
  sala: "",
  data: "",
  horario: "",
});

const horarios = [
  "08:00",
  "09:00",
  "10:00",
  "11:00",
  "12:00",
  "13:00",
  "14:00",
  "15:00",
  "16:00",
  "17:00",
  "18:00",
  "19:00",
];

const salas = ["1", "2", "3", "4", "5", "6"];

// Define emits para comunicação com componente pai
const emit = defineEmits(["adicionarReserva"]);

const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    // Primeiro insere o usuário
    const userData = await insertUser(formData);
    
    if (userData) {
      // Depois insere a reserva com a matrícula do usuário
      const reservaData = await insertReserva(formData);
      
      if (reservaData) {
        emit('adicionarReserva', {...formData});
        handleCancel();
        const modal = bootstrap.Modal.getInstance(document.getElementById('exampleModal'));
        modal.hide();
      }
    }
  } catch (error) {
    console.error('Erro ao salvar dados:', error);
  }
  

  

  
};

const handleCancel = () => {
  Object.keys(formData).forEach((key) => {
    formData[key] = "";
  });
};

const modalRef = ref(null);

const abrirModal = () => {
  const modal = new bootstrap.Modal(modalRef.value);
  modal.show();
};

defineExpose({ abrirModal });
</script>

<template>
  <div
    class="modal fade"
    id="exampleModal"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="exampleModalLabel">Reservar Sala</h1>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <form @submit="handleSubmit" id="myForm">
          <div class="modal-body">
            <div class="row g-3">
              <div class="col-md">
                <div class="form-floating">
                  <input
                    v-model="formData.nome"
                    type="text"
                    class="form-control student_name"
                    id="floatingNameGrid"
                    placeholder="João Souza Silva"
                    required
                  />
                  <label for="floatingNameGrid">Nome</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating">
                  <input
                    v-model="formData.matricula"
                    type="number"
                    class="form-control"
                    id="floatingResgisterGrid"
                    placeholder="matrícula"
                    required
                  />
                  <label for="floatingResgisterGrid">Matrícula</label>
                </div>
              </div>
            </div>
            <div class="row g-3 my-3">
              <div class="col-md">
                <div class="form-floating">
                  <select
                    v-model="formData.sala"
                    class="form-select"
                    id="floatingRoomNumberGrid"
                    required
                  >
                    <option value="" selected disabled></option>
                    <option v-for="sala in salas" :key="sala">
                      {{ sala }}
                    </option>
                  </select>
                  <label for="floatingRoomNumberGrid">Sala</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating">
                  <input
                    v-model="formData.data"
                    type="date"
                    class="form-control"
                    id="floatingDateGrid"
                    required
                  />
                  <label for="floatingDateGrid">Data</label>
                </div>
              </div>
              <div class="col-md">
                <div class="form-floating">
                  <select
                    v-model="formData.horario"
                    class="form-select"
                    id="floatingSelectTimeGrid"
                    required
                  >
                    <option value="" selected disabled>
                      Selecione um horário
                    </option>
                    <option v-for="horario in horarios" :key="horario">
                      {{ horario }}
                    </option>
                  </select>
                  <label for="floatingSelectTimeGrid">Horário</label>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-outline-warning cancel_button"
              @click="handleCancel"
            >
              Cancelar
            </button>
            <button type="submit" class="btn btn-success">Salvar</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>
