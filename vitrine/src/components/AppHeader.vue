<template>
  <header>
    <div class="banner">
      <h1>Bem-vindo ao Sistema de Projetos</h1>
      <p>Desenvolvendo habilidades técnicas e sociais para o futuro!</p>
    </div>

    <div class="header-container">
      <nav class="nav-left">
        <ul>
          <li><router-link to="/">INÍCIO</router-link></li>
          <li><router-link to="/listing">PROJETOS</router-link></li>
          <li><router-link to="/students">ALUNOS</router-link></li>
          <li><router-link to="/professors">PROFESSORES</router-link></li>
        </ul>
      </nav>

      <div class="nav-right">
        <router-link to="/form">
          <a>CADASTRAR</a>
        </router-link>
        <AppMenu />
      </div>
    </div>
  </header>
</template>

<script>
import AppMenu from './AppMenu.vue';

export default {
  components: {
    AppMenu, 
  },
};
</script>

<style scoped>
/* Estilo geral do header */
header {
  font-family: Arial, sans-serif;
  background-color: #007bff;
  color: white;
  padding: 1rem;
  text-align: center;
}

.banner {
  text-align: center;
  margin-bottom: 10px;
}

.header-container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #007bff;
}

/* Estilo para o menu à esquerda */
.nav-left ul {
  list-style: none;
  padding: 0;
  margin: 0;
  display: flex;
  gap: 20px; 
}

.nav-left ul li a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  padding: 5px 10px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-left ul li a:hover {
  background-color: #2762a0;
  border-radius: 5px;
}

/* Estilo para o menu à direita */
.nav-right {
  display: flex;
  align-items: center;
  gap: 20px; 
}

.nav-right a {
  text-decoration: none;
  color: white;
  font-weight: bold;
  background-color: #63a8ed;
  padding: 10px 15px;
  border-radius: 5px;
  transition: background-color 0.3s ease, color 0.3s ease;
}

.nav-right a:hover {
  background-color: #1e67b4;
}
</style>
