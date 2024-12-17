<script setup>
import { ref } from 'vue';
import {deleteUser,deleteReservation} from "../supabase"
const reservas = ref([]);

const adicionarReserva = (novaReserva) => {
  reservas.value.push({
    ...novaReserva,
    visible: true,
    id: Date.now() // identificador único
  });
};

const removerReserva = async (id) => {
  
  
  const index = reservas.value.findIndex(r => r.id === id);
  if (index !== -1) {
    const reserva = reservas.value[index];
    reservas.value[index].visible = false;
    
    await deleteUser(reserva.matricula);
    await deleteReservation(reserva.matricula);
  }
  
};
console.log(reservas.value)
defineExpose({ adicionarReserva });
</script>

<template>
  <div class="table-responsive">
    <table class="table text-center">
      <thead>
        <tr>
          <th class="ths">Sala</th>
          <th class="ths">Nome</th>
          <th class="ths">Data</th>
          <th class="ths">Horário</th>
          <th class="ths">Começa em</th>
          <th class="ths">Termina em</th>
          <th class="ths">Ações</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="reserva in reservas" 
            :key="reserva.id" 
            v-show="reserva.visible"
         >
        <td class="ths">{{ reserva.sala }}</td>
          <td class="ths">{{ reserva.nome }}</td>
          <td class="ths">{{ reserva.data }}</td>
          <td class="ths">{{ reserva.horario }}</td>
          <td class="ths">starts in</td>
          <td class="ths">ends in</td>
          <td >
           
              <i class="bi bi-pencil-square ths me-2 text-success ths"></i>
            
             
              
              <i class="bi bi-trash ths text-danger"  @click="removerReserva(reserva.id)"></i>
            
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
