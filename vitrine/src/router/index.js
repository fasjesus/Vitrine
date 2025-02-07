import { createRouter, createWebHistory } from 'vue-router';
import HomePage from '../views/HomePage.vue';
import ProfessorsPage from '../views/ProfessorsPage.vue'; // lista professores SEM CRUD
import StudentsPage from '../views/StudentsPage.vue'; // Página de lista de alunos
import FormPage from '../views/FormPage.vue';         // formulário para criação de alunos
import ListingPage from '../views/ListingPage.vue';   // lista projetos SEM CRUD
import StudentDetails from '../views/StudentDetails.vue'; // Página de detalhes de alunos
import EditStudent from '../components/EditStudent.vue'; // componente update de alunos

const routes = [
  {
    path: '/',
    name: 'HomePage',
    component: HomePage,
  },
  {
    path: '/listing',
    name: 'ListingPage',
    component: ListingPage,
  },
  {
    path: '/students',
    name: 'StudentsPage',
    component: StudentsPage,
  },
  {
    path: '/professors',
    name: 'ProfessorsPage',
    component: ProfessorsPage,
  },
  {
    path: '/form',
    name: 'FormPage',
    component: FormPage,
  },
  {
    path: '/student/:registration',
    name: 'studentDetails',
    component: StudentDetails, // Detalhes de um aluno
    props: true, // Permite passar o parâmetro para o componente
  },
  {
    path: "/students/:registration/edit",
    name: "EditStudent",
    component: EditStudent,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
