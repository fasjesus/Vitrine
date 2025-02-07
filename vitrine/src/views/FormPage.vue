<template>
  <div>
    <AppHeader />

    <main>
      <CreateStudent />
    </main>

    <AppFooter />
  </div>
</template>

<script>
import AppHeader from "../components/AppHeader.vue";
import CreateStudent from "../components/CreateStudent.vue";
import AppFooter from "../components/AppFooter.vue";

export default {
  components: {
    AppHeader,
    CreateStudent,
    AppFooter,
  },
};
</script>

<style scoped>
@import '../assets/css/styles.css';
</style>
