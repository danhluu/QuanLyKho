<template>
  <v-app>
    
    <v-main>
      <Navbar />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import Navbar from './components/layout/Navbar'
export default {
  name: 'App',
  components: {
    Navbar
  },
  data: () => ({
    
  }),
};
</script>
<style scoped>
@import "./styles/main.css";

</style>
