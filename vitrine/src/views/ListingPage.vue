<template>
    <div>
      <AppHeader />
      
      <main aria-label="Lista de Projetos">
        <section class="project-list" aria-label="Projetos Disponíveis">
          <article class="project-card" role="article" v-for="(project, index) in projects" :key="index">
            <header>
              <h2>{{ project.name }}</h2>
              <p><strong>Aluno:</strong> {{ project.student }}</p>
            </header>
            <p>Descrição: {{ project.description }}</p>
            <button-container>
              <button class="details-button" @click="viewDetails(project)">
                Ver Detalhes
              </button>
              <button class="delete-button" @click="deleteProject(index)">
                Excluir
              </button>
              <button class="alter-button" @click="alterProject(index)">
                Alterar
              </button>
            </button-container>
          </article>
        </section>
      </main>
      
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from '../components/AppHeader.vue';
  import AppFooter from '../components/AppFooter.vue';
  
  export default {
    components: {
      AppHeader,
      AppFooter
    },
    data() {
      return {
        projects: [
          {
            name: "Gerenciamento de Hotéis",
            student: "Flavia Alessandra",
            description: "Um site de reserva de hotéis."
          },
          {
            name: "Marketplace",
            student: "Leonam Rabelo",
            description: "Um aplicativo de mercado."
          },
          {
            name: "Portifólio",
            student: "Ezequiel Lobo",
            description: "Um site de portifólio dos alunos."
          },
          {
            name: "Data Science",
            student: "Brenda Castro",
            description: "Um dashboard de análise de dados."
          }
        ]
      };
    },
    methods: {
      viewDetails(project) {
        alert(`Detalhes do projeto: ${project.name}`);
      },
      deleteProject(index) {
        this.projects.splice(index, 1);
      },
      alterProject(index) {
        alert(`Alterar informações do projeto: ${this.projects[index].name}`);
      }
    }
  };
  </script>
  
  <style scoped>
  @import "../assets/css/styles.css";
  </style>
  