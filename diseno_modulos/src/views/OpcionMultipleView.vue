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
                    v-model="pregunta"
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
     
        ></v-select>
    </div>
    
      
   <pre>{{$data}}</pre>
 
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
         <div  style= "margin-left:200px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="primary"
               v-on:click="guardar">
              Finalizar
            </v-btn>
        </div>
            <div  style= "margin-left:200px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="primary"
              v-on:click="mostrar_lista()" >
              Visualizar
            </v-btn>
        </div>

        <div  style= "margin-left:200px; margin-top: 0px; ">
            <v-btn
              rounded 
              color="warning"
                v-on:click="cargar">
              Siguiente
            </v-btn>
        </div>
    </div>

        <div v-show="!celdas">
<table border="1">
            <thead>
                <th>PREGUNTAS</th>
                
                   
               
            </thead>
            <tr  v-bind:key="questions" v-for= "questions in questions" >
           <td>
              <p style= "font-size:25px; 
                   
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">PREGUNTA: {{questions.pregunta}}</p>

              <p style= "font-size:20px; 
                  
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">RESPUESTA A: {{questions.ra}}</p>


               <p style= "font-size:20px; 
                  
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">RESPUESTA B:{{questions.rb}}</p>

  
                <p style= "font-size:20px; 
                   
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;">RESPUESTA C:{{questions.rc}}</p>

           
                 <p style= "font-size:20px; 
                  
                    color: #FFFFFF;
                    font-family: 'Roboto', sans-serif;"> RESPUESTA D:{{questions.rd}}</p>
            </td>
       
          
             </tr>
           

</table>
 </div>
      

    </v-container>
    
</template>

<script>
  import OpcionMultiple from '../components/OpcionMultiple'

  export default {
    name: 'OpcionMultiple',


   data: () => ({
      items: ['incorrecto', 'correcto'],

   
        questions:[],
        pregunta:null,
        ra: null,
	      rb: null,
	      rc: null,
        rd: null,
      
         celdas: true             
    }),



     methods: {
    guardar: function (event) {

 
       alert(this.questions.length)
      
    },
      cargar: function() {
    
    this.questions.push({
      pregunta: this.pregunta,
      ra: this.ra,
      rb: this.rb, 
      rc: this.rc,
      rd: this.rd
    });
        this.pregunta= "",
        this.ra= "",
        this.rb= "",
        this.rc= "",
        this.rd= ""


        }, 
        	mostrar_lista(){
     this.celdas = !this.celdas;
	},



  },





    components: {
      OpcionMultiple,
    },
  }
</script>