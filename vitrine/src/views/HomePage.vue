<template>
    <div>
      <AppHeader />
  
      <main>
        <section class="about">
          <h2>Sobre o Projeto</h2>
          <p>
            Este sistema foi criado para ajudar alunos e professores a organizarem e acompanharem projetos acadêmicos de forma eficiente e colaborativa.
            Nosso objetivo é simplificar o gerenciamento, promovendo produtividade e colaboração.
          </p>
        </section>
  
        <section class="highlightsH">
          <h2>Destaques</h2>
          <div class="project-highlightH">
            <h3>Projeto em Foco:</h3>
            <p>Gerenciamento de Hotéis - Um site para reservas rápidas e fáceis.</p>
          </div>
          
          <div class="featured-studentsH">
            <h3>Alunos em destaque:</h3>
          </div>

          <div class="featured-studentsH">
            <div class="studentH" v-for="(student, index) in students" :key="index">
              <img :src="student.image" :alt="student.name" />
              <p>{{ student.name }}</p>
            </div>
          </div>
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
        students: [
          { name: 'Brenda Castro', image: require('../assets/images/brenda.jpeg') },
          { name: 'Ezequiel Lobo', image: require('../assets/images/ezequiel.jpeg') },
          { name: 'Flavia Alessandra', image: require('../assets/images/202121.jpeg') },
          { name: 'Leonam Rabelo', image: require('../assets/images/leonam.jpeg') }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  
  @import '../assets/css/styles.css'; 
  
  .about, .highlightsH {
    margin-bottom: 2rem;
  }
  
  .project-highlightH, .featured-studentsH {
    margin-top: 1.5rem;
  }
  
.featured-studentsH {
  display: flex;
  justify-content: left; 
  gap: 20px; 
}

.studentH {
  display: flex;
  flex-direction: column; 
  align-items: center; 
  max-width: 150px; 
}

.studentH img {
  width: 100px; 
  height: 100px; 
  border-radius: 50%; 
  border: 2px solid #007bff;
  object-fit: cover; 
  margin-bottom: 10px; 
}

.studentH p {
  font-size: 1rem;
  color: #333; 
  margin: 0;
}

</style>
  