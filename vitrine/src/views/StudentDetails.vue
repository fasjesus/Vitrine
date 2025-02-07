<template>
  <div>
    <AppHeader />
    <main>
      <section class="student-details" v-if="student">
        <div class="student-info">
          <div class="student-img">
            <img :src="require('@/assets/images/perfil.jpeg')" :alt="student.name" />
          </div>
          <div class="student-data">
            <h2>{{ student.name }}</h2>
            <p>Biografia: {{ student.bio }}</p>
            <p>Curso: {{ student.course }}</p>
            <p>Email: {{ student.email }}</p>

            <div class="button-container">
              <button @click="goToEditStudent" class="edit-button">Editar</button>
              <DeleteStudent
                :studentName="student.name"
                :studentId="student.studentId"
                @deleted="onStudentDeleted"
              />
            </div>
          </div>
        </div>
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
import DeleteStudent from "../components/DeleteStudent.vue";
import StudentService from "../services/StudentService";

export default {
  components: {
    AppHeader,
    AppFooter,
    DeleteStudent,
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
    } else {
      console.error("Registro não encontrado na URL.");
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
          this.student = null;
        });
    },
    onStudentDeleted() {
      // Redireciona para a lista de alunos após a exclusão
      alert("Redirecionando para a lista de alunos.");
      this.$router.push("/students");
    },
    goToEditStudent() {
      this.$router.push(`/students/${this.registration}/edit`);
    },
  },
};
</script>

<style scoped>
/* Estilo principal da seção */
.student-details {
  display: flex;
  justify-content: center; 
  align-items: center; 
  height: 50vh; 
  text-align: center;
  padding: 0px;
}

/* Estrutura da área do aluno */
.student-info {
  display: flex; 
  justify-content: center;
  align-items: center;
}

/* Estilo da imagem do aluno */
.student-img {
  margin-right: 2rem; 
}

.student-img img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  border: 2px solid #007bff;
  object-fit: cover;
}

/* Dados do aluno */
.student-data {
  max-width: 600px; 
  text-align: left; 
}

h2 {
  margin: 0.5rem 0;
  font-size: 1.5rem;
}

p {
  margin: 0.3rem 0;
}

/* Botões */
.button-container {
  display: flex;
  justify-content: left;
  gap: 7px;
}

.edit-button {
  display: inline-block;
  padding: 0.5rem 1rem;
  margin-right: 1rem;
  border-radius: 5px;
  text-align: center;
  color: white;
  text-decoration: none;
  cursor: pointer;
  border: none;
}

.edit-button {
  background-color: #fdb813;
}

.edit-button:hover {
  background-color: #e6a609;
}
</style>