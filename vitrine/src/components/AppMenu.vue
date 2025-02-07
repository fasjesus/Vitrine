<template>
  <div class="menu-dropdown">
    <button id="menu-button" @click="toggleMenu" aria-label="Abrir menu">
      <span>MENU</span> ☰
    </button>
    <div class="dropdown-content" v-show="menuOpen" @mouseleave="menuOpen = false">
      <router-link to="/form">Cadastrar</router-link>
      <router-link to="/students">Alunos</router-link>
      <router-link to="/professors">Professores</router-link>
      <router-link to="/listing">Projetos</router-link>
      <router-link to="/">Início</router-link>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      menuOpen: false, // Estado para controlar se o menu está aberto
    };
  },
  methods: {
    toggleMenu() {
      this.menuOpen = !this.menuOpen; // Alterna entre abrir/fechar o menu
    },
  },
};
</script>

<style scoped>
/* Estilização do menu */
.menu-dropdown {
  position: relative;
}

#menu-button {
  background: none;
  border: none;
  color: white;
  font-size: 1rem;
  font-weight: bold;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 5px;
}

#menu-button:hover {
  color: #cce4ff;
}

.dropdown-content {
  position: absolute;
  top: 100%;
  right: 0;
  background-color: #63a8ed;
  min-width: 160px;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  border-radius: 5px;
  z-index: 10;
  text-align: left;
  display: block; 
}

.dropdown-content a {
  color: white;
  padding: 10px 15px;
  display: block;
  text-decoration: none;
  font-size: 14px;
  transition: background-color 0.3s ease;
}

.dropdown-content a:hover {
  background-color: #1e67b4;
}
</style>
