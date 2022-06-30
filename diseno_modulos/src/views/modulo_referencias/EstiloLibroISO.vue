
<template>
<div class="container">
 <v-card class="overflow-hidden">
    <v-app-bar
    color="#dfe6ffc5" 
    light
      src="#"
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-title>Estilo ISO</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs align-with-title 
    background-color="indigo lighten-1"
    dark>
          <v-tab id="select">Libro</v-tab>
          <v-tab @click="llamarArtISO()">Articulo</v-tab>
        </v-tabs>
      </template>
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="400"
    >
    </v-sheet> 
  </v-card>

<v-btn class="ma-2" type="submit" id="q-3" color="success" :to="{name: 'libroIso'}"
    style="border-radius: 8px;  float: left; border: 1px solid green" >
<v-icon color="white" large> mdi-plus</v-icon> AGREGAR </v-btn>
<br> <br> 
<homeISO/>
</div>
</template>
<style>
#select{
  background: rgb(9, 72, 154);
}
#q-3{
  margin-left: 140px;
  margin-top: 10px;
}
</style>
<script>
import barraISO from './BarraISO.vue'
import homeISO from './libro/HomeLibroISO.vue'
export default{
name: 'EstiloLibroISO',
components:{
  barraISO, homeISO,
},
methods: {
  llamarlibroISO(){
    this.$router.push('/libro/LibroISO/')
  },
   llamarArtISO(){
    this.$router.push('/referencias/agregarRef/estiloArtISO')
  }
}

}

</script>