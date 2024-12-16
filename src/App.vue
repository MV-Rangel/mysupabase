<script setup>
import Modal from './components/Modal.vue';
import Tabela from './components/Tabela.vue';
import NavBar from './components/NavBar.vue';
import { ref } from 'vue';

const modalRef = ref(null);
const tabelaRef = ref(null);

const abrirModal = () => {
  modalRef.value?.abrirModal();
};

const handleNovaReserva = (dados) => {
  tabelaRef.value?.adicionarReserva(dados);
};
</script>

<template>
  <NavBar @abrirModal="abrirModal" />
  <Modal 
    ref="modalRef"
    @adicionarReserva="handleNovaReserva" 
  />
  <Tabela ref="tabelaRef" />
</template>
