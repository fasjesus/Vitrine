<template>
  <div>
    <main>
      <section class="form-container">
        <h2>Formulário de Cadastro</h2>
        <form @submit.prevent="handleSubmit">
          <!-- Nome e Email -->
          <div class="form-group row">
            <div class="form-item">
              <label for="name">Nome</label>
              <input type="text" v-model="formData.name" id="name" required />
            </div>
            <div class="form-item">
              <label for="email">E-mail</label>
              <input type="email" v-model="formData.email" id="email" required />
            </div>
          </div>

          <!-- Telefone e Senha -->
          <div class="form-group row">
            <div class="form-item">
              <label for="fone">Telefone</label>
              <input type="tel" v-model="formData.fone" id="fone" pattern="[0-9]{2}-[0-9]{5}-[0-9]{4}" required placeholder="XX-XXXXX-XXXX" />
            </div>
            <div class="form-item">
              <label for="password">Senha</label>
              <input type="password" v-model="formData.password" id="password" required minlength="6" />
            </div>
          </div>

          <!-- Cargo e Curso -->
          <div class="form-group row">
            <div class="form-item">
              <label for="role">Cargo</label>
              <select v-model="formData.role" id="role" required>
                <option value="">Selecione uma opção</option>
                <option value="student">Aluno</option>
                <option value="teacher">Professor</option>
              </select>
            </div>
            <div class="form-item">
              <label for="course">Curso</label>
              <select v-model="formData.course" id="course" required>
                <option value="">Selecione uma opção</option>
                <option value="CiC">CiC</option>
                <option value="Letras">Letras</option>
                <option value="Inglês">Inglês</option>
              </select>
            </div>
          </div>

          <!-- Gênero e Senha -->
          <div class="form-group row">
            <div class="form-item">
              <label>Gênero</label>
              <div>
                <label for="male"><input type="radio" v-model="formData.gender" value="male" id="male" required />Masculino</label>
              </div>
              <div>
                <label for="female"><input type="radio" v-model="formData.gender" value="female" id="female" />Feminino</label>
              </div>
              <div>
                <label for="other"><input type="radio" v-model="formData.gender" value="other" id="other" />Outro</label>
              </div>
            </div>
            <div class="form-item">
              <label for="registration">Matrícula</label>
              <input type="text" v-model="formData.registration" id="registration" required minlength="6" />
            </div>
          </div>

          <!-- Biografia -->
          <div class="form-group">
            <label for="bio">Biografia</label>
            <textarea v-model="formData.bio" id="bio" rows="4" required></textarea>
          </div>

          <!-- Termos de uso -->
          <div class="form-group checkbox">
            <input type="checkbox" v-model="formData.terms" id="terms" required />
            <label for="terms">Eu aceito os termos de uso.</label>
          </div>

          <!-- Mensagem de erro -->
          <div v-if="errorMessage" class="error-message">
            <p>{{ errorMessage }}</p>
          </div>

          <div class="form-group">
            <button type="submit" class="submit-button">Enviar</button>
          </div>
        </form>
      </section>
    </main>
  </div>
</template>

<script>
import StudentService from '../services/StudentService.js';

export default {
  data() {
    return {
      formData: {
        name: '',
        email: '',
        fone: '',
        password: '',
        role: '',
        course: '',
        gender: '',
        registration: '',
        terms: false,
        bio: '',
      },
      errorMessage: '', // Mensagem de erro
    };
  },
  methods: {
    async handleSubmit() {
      // Verifica se todos os campos obrigatórios foram preenchidos
      if (!this.formData.name || !this.formData.email || !this.formData.registration || !this.formData.password || !this.formData.role || !this.formData.gender || !this.formData.terms || !this.formData.bio) {
        console.log('Por favor, preencha todos os campos.');
        return;
      }

      // Limpa qualquer mensagem de erro anterior
      this.errorMessage = '';

      try {
        // Verifica se o registro já existe
        const registrationExists = await this.checkRegistrationExists(this.formData.registration);

        if (registrationExists) {
          this.errorMessage = "A matrícula já existe. Por favor, insira uma matrícula válida.";
          return; // Não prosseguir com o cadastro
        }

        const newStudent = {
          name: this.formData.name,
          email: this.formData.email,
          registration: this.formData.registration,
          course: this.formData.course,
          bio: this.formData.bio,
        };

        // Chama createStudent para criar o aluno
        await StudentService.createStudent(newStudent);
        console.log('Aluno criado com sucesso!');
        this.$router.push('/students'); // Redireciona após o cadastro
      } catch (error) {
        // Captura e exibe erros durante a criação
        console.error("Erro ao criar aluno:", error);
        this.errorMessage = "Já existe um usuário com essa matrícula."; 
      }
    },

    // Função para verificar se a matrícula já existe
    async checkRegistrationExists(registration) {
      try {
        const student = await StudentService.getStudentByRegistration(registration);
        return student !== null; 
      } catch (error) {
        console.error("...", error);
        return false; 
      }
    }
  },
};
</script>


<style scoped>
/* Adicione seu estilo aqui, se necessário */
.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
