
<template>
<div class="container">
 <v-card class="overflow-hidden">
    <v-app-bar
    color="#dfe6ffc5" 
    light
      src="#"
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-title>Estilo APA</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs align-with-title 
    background-color="indigo lighten-1"
    dark>
          <v-tab @click="llamarlibroAPA()" >Libro</v-tab>
          <v-tab id="select" @click="llamarArtAPA()">Articulo</v-tab>
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

<v-btn class="ma-2" type="submit" id="q-3" color="success" :to="{name: 'articuloApa'}"
    style="border-radius: 8px;  float: left; border: 1px solid green" >
<v-icon color="white" large> mdi-plus</v-icon> AGREGAR </v-btn>
<br> <br> 
<home/>

</div>
</template>
<style>

#select{
  background: rgb(9, 72, 154);
}

</style>
<script>
import barra from './Barra.vue'


import home from './articulo/HomeArt.vue'

export default{
name: 'EstiloArtAPA',
components:{
  barra, home,
 
},
methods: {
  
  llamarlibroAPA(){
    this.$router.push('/referencias/agregarRef/estiloLibroAPA')
  },


},


}

</script>