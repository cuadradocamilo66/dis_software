
<!-- #0EB39E -->

<template>
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
          <v-tab @click="llamarlibroISO()" >Libro</v-tab>
          <v-tab :to="{name: 'estiloArtIso'}">Articulo</v-tab>
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

</template>

<script>


export default{
  data(){

},
methods: {
  
  llamarlibroISO(){
    this.$router.push('estiloLibroISO/libroISO/')
  },
  
},
}





</script>