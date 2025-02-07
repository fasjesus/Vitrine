<template>
    <button @click="handleDelete" class="deleteU-button">Excluir</button>
  </template>
  
  <script>
  import StudentService from "../services/StudentService";
  
  export default {
    props: {
      studentName: {
        type: String,
        required: true,
      },
      studentId: {
        type: [String, Number],
        required: true,
      },
    },
    methods: {
      handleDelete() {
        const confirmation = confirm(`Tem certeza que deseja excluir o aluno "${this.studentName}"?`);
        if (confirmation) {
          StudentService.deleteStudent(this.studentId)
            .then(() => {
              alert(`O aluno "${this.studentName}" foi excluído com sucesso.`);
              this.$emit("deleted"); // Notifica o componente pai sobre a exclusão bem-sucedida
            })
            .catch((error) => {
              console.error("Erro ao excluir aluno:", error);
              alert("Erro ao excluir o aluno. Tente novamente.");
            });
        } else {
          alert("A exclusão foi cancelada.");
        }
      },
    },
  };
  </script>
  
  <style scoped>
  .deleteU-button {
    display: inline-block;
    padding: 0.5rem 1rem;
    border-radius: 5px;
    color: white;
    background-color: #eb1818;
    border: none;
    cursor: pointer;
  }
  
  .deleteU-button:hover {
    background-color: #c52929da;
  }
  </style>
  