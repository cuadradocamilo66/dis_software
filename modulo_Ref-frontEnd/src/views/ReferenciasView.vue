<template>
  <v-container>
        <h1></h1>
        <br>
         <v-row
          class="pt-10"
    align="center"
    justify="space-around"
  >
    <v-btn rounded
    color="blanco">
      Inicio
    </v-btn>

    <v-btn rounded
    color="blanco"> 
      Contenidos
    </v-btn>

    <v-btn rounded 
    color="blanco">
      Actividades
    </v-btn>

    <v-btn
      rounded
      color="blanco"
    >
      Evaluación
    </v-btn>

    <v-btn
      rounded 
      color="verde">
      Bibliografía
    </v-btn>
  </v-row>
 


        <h1 class="letra-titulo"

            style="font-size:100px; margin-top:80px;
                    margin-left:0px;
                    color: #4D4D4D;
                    font-family: 'Roboto', sans-serif;">Referencias
        </h1>

        <!-- <label 
              style="font-size:30px; margin-top:-100px;
                    margin-left:0px;
                    color: #4D4D4D;
                    font-family: 'Roboto', sans-serif;">
            Agrega nuevas Referencias Bibliograficas 
        </label>
        <br>
        <label
            style="font-size:30px; 
                    margin-left:0px;
                    color: #4D4D4D;
                    font-family: 'Roboto', sans-serif;">
             para tu objeto virtual de aprendizaje
        </label> -->

        <br><br><br>

      <v-row>
       <!-- <v-btn  rounded color="verde"> -->
      
      

        <router-link :to="{name:'agregar' }">
             <v-img 
                :src="require('../assets/AGREGAR.png')"
                max-width="180"
                max-height="180"
                class="n4"/>
       </router-link>
       
      </v-row>
                <v-img class="imagen1"
                    style="margin-left: 650px; margin-top:-320px"
                   :src="require('../assets/principal.png')"
                   max-height="800"
                   max-width="800">
                </v-img>
                   
            <v-img
                 style=" margin-top:-150px
                "
                :src="require('../assets/wave.svg')"
            
            
                 max-width="1250"
                 max-height="250"
             />

    
    </v-container>

</template>
<style>
.n4{
  margin-left: 10px;
  margin-top: 35px;
}
</style>


<script>
  import Referencias from '../components/Referencias'
  export default {
    name: 'referenciass',
    components: {
      Referencias,
    },
  }
</script>