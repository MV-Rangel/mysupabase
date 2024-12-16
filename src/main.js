import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import { getUsers } from './supabase.js';

// Dentro de um método ou componente
const buscarUsuarios = async () => {
  const usuarios = await getUsers();
  if (usuarios) {
    // faça algo com os usuários
    console.log(usuarios);
  }
};
buscarUsuarios()
createApp(App).mount('#app')
