<template>
  <v-container
        color fondo
        >
  <div style="margin-top:0px">
      <h2  style= "font-size:40px;
                    margin-left:60px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
         Opción múltiple con única respuesta
        </h2>
        <h2  style= "font-size:20px; 
                    margin-left:80px;
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">
         Escriba la pregunta y digite sus respuestas
        </h2>
  </div>
          <div  style= "margin-left:100px; margin-top: 50px;">
                <v-textarea xs4
                 style="width:500px "
                     solo
                    label="Digite la pregunta..."
                    v-model="pregunta.p"
                ></v-textarea>
            </div>


    <br> 
    <div style="display:flex">
        <div  style= "margin-left:100px; margin-top: -40px; ">
            <v-text-field
                style= "width:500px"
                label="Respuesta A"
                 placeholder="Escriba"
                 v-model="ra"
                 solo
                rounded
                dense >
             </v-text-field>
          </div>

    <div style="margin-top:-50px; margin-left: 20px;">
        <v-select
        style="width:120px"
          :items="items"
          label="Incorrecto"
          solo
          outlined
        ></v-select>
    </div>
    </div>
  <br>


   <div style="display:flex">
        <div  style= "margin-left:100px; margin-top: -40px; ">
            <v-text-field
                style= "width:500px"
                label="Respuesta B"
                 placeholder="Escriba"
                  v-model="rb"
                 solo
                rounded
                dense >
             </v-text-field>
          </div>

    <div style="margin-top:-50px; margin-left: 20px;">
        <v-select
        style="width:120px"
          :items="items"
          label="Incorrecto"
          solo
          outlined
        ></v-select>
    </div>
    </div>
  <br>
     <div style="display:flex">
        <div  style= "margin-left:100px; margin-top: -40px; ">
            <v-text-field
                style= "width:500px"
                label="Respuesta C"
                 placeholder="Escriba"
                  v-model="rc"
                 solo
                rounded
                dense >
             </v-text-field>
          </div>

    <div style="margin-top:-50px; margin-left: 20px;">
        <v-select
        style="width:120px"
          :items="items"
          label="Incorrecto"
          solo
          outlined
        ></v-select>
    </div>
    </div>
    <br>
     <div style="display:flex">
        <div  style= "margin-left:100px; margin-top: -40px; ">
            <v-text-field
                style= "width:500px"
                label="Respuesta D"
                 placeholder="Escriba"
                  v-model="rd"
                 solo
                rounded
                dense >
             </v-text-field>
          </div>

    <div style="margin-top:-50px; margin-left: 20px;">
        <v-select
        style="width:120px"
          :items="items"
          label="Incorrecto"
          solo
          outlined
        ></v-select>
    </div>
     <p>{{ questions || 'null' }}</p>
    </div>
    <br>
    <div style="display:flex">

        <div  style= "margin-left:100px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="error">
              Atrás
            </v-btn>
        </div>
         <div  style= "margin-left:300px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="primary"
               v-on:click="guardar">
              Finalizar
            </v-btn>
        </div>
        <div  style= "margin-left:300px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="warning">
              Siguiente
            </v-btn>
        </div>
    </div>

        
      

    </v-container>
    
</template>

<script>
  import OpcionMultiple from '../components/OpcionMultiple'

  export default {
    name: 'OpcionMultiple',


       data () {
         return {
             pregunta:{p:"null"},
             items: ['Correcto', 'Incorrecto'],
             questionss: [],
             questions: [
                 this.items, this.pregunta
            ],
      }
    },


     methods: {
    guardar: function (event) {

 
       alert(this.questions.length)
      
    },
      cargar: function() {
            this.questions.push( this.questionss);
        }



  },





    components: {
      OpcionMultiple,
    },
  }
</script>