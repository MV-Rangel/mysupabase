<script setup>
import { ref } from 'vue';

const reservas = ref([]);

const adicionarReserva = (novaReserva) => {
  reservas.value.push({
    ...novaReserva,
    visible: true,
    id: Date.now() // identificador único
  });
};

const removerReserva = (id) => {
  const index = reservas.value.findIndex(r => r.id === id);
  if (index !== -1) {
    reservas.value[index].visible = false;
  }
};

defineExpose({ adicionarReserva });
</script>

<template>
  <div class="table-responsive">
    <table class="table">
      <thead>
        <tr>
          <th>Nome</th>
          <th>Matrícula</th>
          <th>Sala</th>
          <th>Data</th>
          <th>Horário</th>
          <th>Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reserva in reservas" 
            :key="reserva.id" 
            v-show="reserva.visible"
        >
          <td>{{ reserva.nome }}</td>
          <td>{{ reserva.matricula }}</td>
          <td>{{ reserva.sala }}</td>
          <td>{{ reserva.data }}</td>
          <td>{{ reserva.horario }}</td>
          <td>
            <button 
              @click="removerReserva(reserva.id)"
              class="btn btn-danger btn-sm"
            >
              <i class="bi bi-trash"></i>
            </button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
