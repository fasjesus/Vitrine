import axios from 'axios';

const API_URL = 'http://localhost:5207/api/Professors'; 

export default {
  // Buscar todos os professores
  getAllProfessors() {
    return axios
      .get(API_URL)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Erro ao buscar professores:', error);
        throw error;
      });
  },

  // Buscar um professor por ID
  getProfessorById(id) {
    return axios
      .get(`${API_URL}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Erro ao buscar professor com ID ${id}:`, error);
        throw error;
      });
  },

  // Criar um novo professor
  createProfessor(professor) {
    return axios
      .post(API_URL, professor)
      .then((response) => response.data)
      .catch((error) => {
        console.error('Erro ao criar professor:', error);
        throw error;
      });
  },

  // Atualizar um professor existente
  updateProfessor(id, professor) {
    return axios
      .put(`${API_URL}/${id}`, professor)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Erro ao atualizar professor com ID ${id}:`, error);
        throw error;
      });
  },

  // Deletar um professor
  deleteProfessor(id) {
    return axios
      .delete(`${API_URL}/${id}`)
      .then((response) => response.data)
      .catch((error) => {
        console.error(`Erro ao deletar professor com ID ${id}:`, error);
        throw error;
      });
  },
};
