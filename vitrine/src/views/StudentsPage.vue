<template>
  <div>
    <AppHeader />

    <main>
      <ReadStudents
        :students="students"
        @view-details="viewStudentDetails"
      />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import AppFooter from "../components/AppFooter.vue";
import ReadStudents from "../components/ReadStudents.vue";
import StudentService from "@/services/StudentService";

export default {
  components: {
    AppHeader,
    AppFooter,
    ReadStudents,
  },
  data() {
    return {
      students: [], // Lista de alunos
    };
  },
  methods: {
    loadStudents() {
      StudentService.getAllStudents()
        .then((data) => {
          this.students = data; // Atualiza a lista de alunos
        })
        .catch((error) => {
          console.error("Erro ao carregar os alunos:", error);
        });
    },
    viewStudentDetails(studentRegistration) {
      this.$router.push({ name: "studentDetails", params: { registration: studentRegistration } });
    },
  },
  created() {
    this.loadStudents(); // Carregar a lista de estudantes ao montar o componente
  },
};
</script>

<style scoped>
/* Adapte ou insira estilos adicionais, se necessário */
</style>
