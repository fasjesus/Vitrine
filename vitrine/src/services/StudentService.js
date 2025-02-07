import axios from 'axios';

const API_URL = 'http://localhost:5207/api/Students'; 

export default {
  // Buscar todos os alunos
  getAllStudents() {
    return axios
      .get(API_URL)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Erro ao buscar alunos:', error);
        throw error;
      });
  },

  // Buscar aluno pelo registration
  getStudentByRegistration(registration) {
    return axios.get(`${API_URL}/registration/${registration}`)
      .then(response => response.data)
      .catch(error => {
        console.error('Erro ao buscar aluno por registration:', error);
        throw error;
      });
  },
  
  // Buscar um aluno por ID
  getStudentById(studentId) {
    return axios
      .get(`${API_URL}/${studentId}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Erro ao buscar aluno com ID ${studentId}:`, error);
        throw error;
      });
  },

  // Criar um novo aluno
  createStudent(student) {
    return axios
      .post(API_URL, student)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Erro ao criar aluno:', error);
        throw error;
      });
  },

  // Atualizar um aluno existente
  updateStudent(studentId, studentData) {
    return axios
      .put(`${API_URL}/${studentId}`, studentData)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Erro ao atualizar aluno com ID ${studentId}:`, error);
        throw error;
      });
  },

  // Deletar um aluno
  deleteStudent(id) {
    return axios
      .delete(`${API_URL}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Erro ao deletar aluno com ID ${id}:`, error);
        throw error;
      });
  },
};
