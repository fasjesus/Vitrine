<template>
    <div>
      <AppHeader />
      <main>
        <section v-if="student">
          <h2>Editar Aluno: {{ student.name }}</h2>
          <form @submit.prevent="updateStudent">
            <div class="form-group">
              <label for="name">Nome:</label>
              <input
                type="text"
                id="name"
                v-model="student.name"
                placeholder="Digite o nome do aluno"
              />
            </div>
  
            <div class="form-group">
              <label for="email">E-mail:</label>
              <input
                type="email"
                id="email"
                v-model="student.email"
                placeholder="Digite o e-mail do aluno"
              />
            </div>
  
            <div class="form-group">
              <label for="course">Curso:</label>
              <input
                type="text"
                id="course"
                v-model="student.course"
                placeholder="Digite o curso do aluno"
              />
            </div>

            <div class="form-group">
              <label for="bio">Biografia:</label>
              <input
                type="text"
                id="bio"
                v-model="student.bio"
                placeholder="Escreva uma biografia"
              />
            </div>
  
            <button type="submit" class="update-button">Salvar Alterações</button>
          </form>
        </section>
  
        <section v-else>
          <p>Carregando...</p>
        </section>
      </main>
      <AppFooter />
    </div>
  </template>
  
  <script>
  import AppHeader from "../components/AppHeader.vue";
  import AppFooter from "../components/AppFooter.vue";
  import StudentService from "../services/StudentService";
  
  export default {
    components: {
      AppHeader,
      AppFooter,
    },
    data() {
      return {
        student: null,
        registration: this.$route.params.registration,
      };
    },
    created() {
      if (this.registration) {
        this.loadStudentByRegistration(this.registration);
      }
    },
    methods: {
      loadStudentByRegistration(registration) {
        StudentService.getStudentByRegistration(registration)
          .then((studentData) => {
            if (studentData) {
              this.student = studentData;
            } else {
              console.error("Aluno não encontrado.");
              this.student = null;
            }
          })
          .catch((error) => {
            console.error("Erro ao buscar aluno:", error);
          });
      },
      updateStudent() {
        const studentCopy = JSON.parse(JSON.stringify(this.student));
        if (studentCopy && studentCopy.studentId) {
          StudentService.updateStudent(studentCopy.studentId, studentCopy)
            .then(() => {
              alert("Aluno atualizado com sucesso.");
              this.$router.push(`/student/${this.registration}`);
            })
            .catch((error) => {
              console.error("Erro ao atualizar aluno:", error);
              alert("Erro ao atualizar o aluno.");
            });
        } else {
          alert("Aluno não encontrado para atualização.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .form-group {
    margin-bottom: 1rem;
  }
  
  .form-group label {
    display: block;
    font-weight: bold;
    margin-bottom: 0.5rem;
  }
  
  .form-group input {
    width: 100%;
    padding: 0.5rem;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .update-button {
    padding: 0.5rem 1rem;
    background-color: #4caf50;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .update-button:hover {
    background-color: #45a049;
  }
  </style>
  