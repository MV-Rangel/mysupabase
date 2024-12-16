import { createApp } from "vue";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.bundle.js';
import '../node_modules/bootstrap-icons/font/bootstrap-icons.css';
import App from "./App.vue";
import { getUsers } from "./supabase.js";

// Dentro de um método ou componente
const buscarUsuarios = async () => {
  const usuarios = await getUsers();
  if (usuarios) {
    // faça algo com os usuários
    console.log(usuarios);
  }
};
buscarUsuarios();
createApp(App).mount("#app");
