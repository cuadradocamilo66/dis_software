<template>
  <v-app>
    <v-main>
      <router-view/>
    <Referencias/>
    </v-main>
  </v-app>
</template>

<script>

import Referencias from './views/ReferenciasView.vue'
export default {
  name: 'App',

  data: () => ({
    //
  }),
  components: {
      Referencias,
    },
};
</script>


<style scoped>
#app{
 font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  background-color: #229D9C;
  height: 100vh;
}
</style>
