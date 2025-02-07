<template>
    <section>
      <!-- Barra de pesquisa -->
      <div class="header-section">
        <h2>Alunos</h2>
        <input
          type="text"
          class="search-bar"
          placeholder="Pesquisar aluno..."
          v-model="searchQuery"
        />
      </div>
  
      <p>Alunos cadastrados no sistema.</p>
  
      <!-- Lista de alunos -->
      <div class="highlights">
        <article class="featured-students">
          <div
            class="student"
            v-for="(student, index) in filteredStudents"
            :key="index"
          >
            <div class="student-img">
              <img :src="require('@/assets/images/perfil.jpeg')" :alt="student.name" />
            </div>
            <p>{{ student.name }}</p>
            <div class="buttons">
              <button
                class="show-button"
                @click="viewStudentDetails(student.registration)"
              >
                Visualizar
              </button>
            </div>
          </div>
        </article>
      </div>
    </section>
  </template>
  
  <script>
  export default {
    props: {
      students: {
        type: Array,
        required: true,
      },
    },
    data() {
      return {
        searchQuery: "", // Filtro de pesquisa
      };
    },
    computed: {
      filteredStudents() {
        return this.students.filter((student) =>
          student.name.toLowerCase().includes(this.searchQuery.toLowerCase())
        );
      },
    },
    methods: {
      viewStudentDetails(studentRegistration) {
        this.$emit("view-details", studentRegistration); // Notifica o componente pai para redirecionar
      },
    },
  };
  </script>
  
  <style>
  .header-section {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 1rem;
  }
  
  .search-bar {
    padding: 0.5rem;
    font-size: 1rem;
    border: 1px solid #ccc;
    border-radius: 5px;
    width: 200px;
  }
  
  /* Grid para os alunos */
  .highlights {
    display: flex; 
    flex-wrap: wrap; 
    gap: 1.5rem; 
    justify-content: center; 
    padding: 1rem;
  }
  
  .student {
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #f9f9f9;
    border: 1px solid #ddd;
    border-radius: 8px;
    padding: 1rem;
    box-shadow: 0px 2px 5px rgba(0, 0, 0, 0.1);
    width: 150px; /* Largura fixa para os cards */
  }
  
  .student-img img {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 0.5rem;
  }
  
  .buttons {
    margin-top: 0.5rem;
  }
  
  .show-button {
    background-color: #007bff;
    color: white;
    border: none;
    padding: 0.3rem 0.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-size: 0.9rem;
  }
  
  .show-button:hover {
    background-color: #0056b3;
  }
  </style>
  
  