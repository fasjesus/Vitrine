<template>
  <div>
    <AppHeader />

    <main>
      <!-- barra de pesquisa -->
      <section class="about">
        <div class="header-section">
          <h2>Lorem Ipsum</h2>
          <input
            type="text"
            class="search-bar"
            placeholder="Pesquisar professor..."
            v-model="searchQuery"
          />
        </div>
        <p>Professores de Lorem Ipsum 2024.2 blablablablablabla.</p>
      </section>

      <!-- Lista de professores com botões de editar e excluir -->
      <section class="highlights">
        <article class="featured-students">
          <div
            class="student"
            v-for="(professor, index) in filteredProfessors"
            :key="index"
          >
            <img :src="professor.image" :alt="professor.name" />
            <p>{{ professor.name }}</p>
            <div class="buttons">
              <button class="show-button" @click="showProfessor(index)">
                Visualizar
              </button>
            </div>
          </div>
        </article>
      </section>
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    AppFooter,
  },
  data() {
    return {
      searchQuery: "", // Para a barra de pesquisa
      professors: [
        { name: "Brenda Castro", image: require("@/assets/images/brenda.jpeg") },
        { name: "Ezequiel Lobo", image: require("@/assets/images/ezequiel.jpeg") },
        { name: "Flavia Alessandra", image: require("@/assets/images/202121.jpeg") },
        { name: "Leonam Rabelo", image: require("@/assets/images/leonam.jpeg") },
        { name: "Brenda Castro", image: require("@/assets/images/brenda.jpeg") },
        { name: "Ezequiel Lobo", image: require("@/assets/images/ezequiel.jpeg") },
        { name: "Flavia Alessandra", image: require("@/assets/images/202121.jpeg") },
        { name: "Leonam Rabelo", image: require("@/assets/images/leonam.jpeg") },
        { name: "Brenda Castro", image: require("@/assets/images/brenda.jpeg") },
        { name: "Ezequiel Lobo", image: require("@/assets/images/ezequiel.jpeg") },
        { name: "Flavia Alessandra", image: require("@/assets/images/202121.jpeg") },
        { name: "Leonam Rabelo", image: require("@/assets/images/leonam.jpeg") },
        { name: "Brenda Castro", image: require("@/assets/images/brenda.jpeg") },
        { name: "Ezequiel Lobo", image: require("@/assets/images/ezequiel.jpeg") },
        { name: "Flavia Alessandra", image: require("@/assets/images/202121.jpeg") },
        { name: "Leonam Rabelo", image: require("@/assets/images/leonam.jpeg") },
      ],
    };
  },
  computed: {
    filteredProfessors() {
      return this.professors.filter((professor) =>
        professor.name.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    showProfessor(index) {
      alert(`Visualizar professor: ${this.professors[index].name}`);
    },
  },
};
</script>

<style scoped>
</style>

