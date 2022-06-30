<template>
<v-container>
<br>
<v-card class="overflow-hidden">
    <v-app-bar
    color="#dfe6ffc5" 
    light
      src="#"
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-title>Estilo APA Articulo</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs align-with-title 
    background-color="indigo lighten-1"
    dark>
          <v-tab to="/referencias/agregarRef/estiloLibroAPA" >Inicio</v-tab>
          <v-tab :to="{name: 'EjemploArtApa' }" >Ejemplos</v-tab>
          
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
<br>
<div class="cv">
<div id="cuerpo"> 
<br>
<h1>DIGITE UNA REFERENCIA PARA ARTICULO</h1>
  <v-container >
  <v-form @submit.prevent="agregarRef()">
  
      <v-row>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="refA.autorA"   
            
            label="Autor del Articulo"
            clearable
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="refA.anoA"         
            label="Año de Publicacion"
            clearable
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="refA.tituloA"          
            
            label="Titulo Articulo"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
      
      <v-row>
      <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="refA.tituloR"          
            
            label="Titulo Revista"
            clearable
          ></v-text-field>
        </v-col>
      

      
      <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="refA.volumen"          
            
            label="Volumen"
            clearable
          ></v-text-field>
        </v-col>
   

      
      <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="refA.numero"         
            label="Numero de Emision"
            clearable
          ></v-text-field>
        </v-col>
    
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="refA.paginas"
            label="Numero de Pagínas"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
    
    <!-- */{{(indice == -1 ? 'Agregar':'Actualizar')}}*/ -->

 <br><br>
   <v-btn type="submit"  class="ma-2" rounded  color="primary"  dark >Registro<v-icon dark right></v-icon></v-btn>
   <v-btn to="/referencias/agregarRef/estiloArtAPA/ArticuloAPA/visualizacionArtAPA" class="ma-2" rounded color="success" dark >Visualizar<v-icon dark right></v-icon></v-btn> 
  
  </v-form>
  </v-container>

</div>
</div>

</v-container>
</template>
<script>
export default {

data() {

  return {
   RefA:[],
   refA: {
    autorA:"",
    anoA:"",
    tituloA:"",
    tituloR:"",
    volumen: "",
    numero: "",
    paginas: "",

  },
  }

  },

  methods:{

 agregarRef()
    {
    console.log(this.refA);

      if(!this.refA.autorA){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar el Autor del Articulo!',
      });

      }else if(!this.refA.anoA){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar el Año de Publicacion!',
      });
      
      }
        else if(!this.refA.tituloA){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar el Titulo del Articulo!',
      });
      }else if(!this.refA.tituloR){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar el Titulo la Revista!',
      });
      }
      else if(!this.refA.volumen){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar el volumen del Articulo!',
      });
      }
      
      
      
      else if(!this.refA.numero){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar la Numero de Emision!',
      });
      } else if(!this.refA.paginas){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar los Numeros de Paginas del Articulo!',
      });
      
      }else{

    this.axios
    .post("/nuevo-registro-Art", this.refA)
    .then((res) => {
      this.RefA.push(res.data);
      this.refA.autorA="";
      this.refA.anoA="";
      this.refA.tituloA="";
      this.refA.tituloR="";
      this.refA.volumen="";
      this.refA.numero="";
      this.refA.paginas="";

       this.$swal({
        icon: 'success',
        title: 'Hecho',
        text: 'Haz Realizado Un Registro Exitosamente!',
      });
      
   })

   .catch((e)=> {
    console.log(e.response);
    alert("Hubo problemas al intentar agregar un nuevo Registro")
   })
   

      }
    
   


  }

    }
    
} 
 
</script>
<style scoped>
#cuerpo{
  background-color: #00ff2a51;
  
  border-radius: 10px;
  border: 1px solid black;
  color:rgb(255, 255, 255);

}
p{
  color: black;
}
h4{
  background: red;
  width: 50%;
  margin-left: 300px;
  border-radius: 10px;
}
.table {
  background-color: gray;
  border: 1px solid black;
  color: white;
}
</style>