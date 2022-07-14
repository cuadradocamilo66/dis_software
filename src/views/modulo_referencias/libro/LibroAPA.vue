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
      <v-app-bar-title>Estilo APA Libro</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs align-with-title 
    background-color="indigo lighten-1"
    dark>
          <v-tab to="/referencias/agregarRef/estiloLibroAPA" >Inicio</v-tab>
           <v-tab :to="{name: 'EjemplolibroApa' }" >Ejemplos</v-tab>
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
<h1>DIGITE UNA REFERENCIA PARA LIBRO</h1>
  <v-container >
  <v-form @submit.prevent="agregarRef()">
      <v-row>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="ref.autor"   
            label="Autor"
            clearable
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="ref.ano"         
            label="Año"
            clearable
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="ref.titulo"          
            label="Titulo"
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
            v-model="ref.edicion"         
            label="Edicion"
            clearable
          ></v-text-field>
        </v-col>
    
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="ref.editorial"
            label="Editorial"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>

 <br><br>
   <v-btn type="submit"  class="ma-2" rounded  color="primary"  dark >Registro<v-icon dark right></v-icon></v-btn>
   <v-btn to="/referencias/agregarRef/estiloLibroAPA/libroAPA/visualizacionLibroAPA"  class="ma-2" rounded color="success" dark >Visualizar<v-icon dark right></v-icon></v-btn> 
  
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
   Ref:[],
   ref: {
    autor:"",
    titulo:"",
    ano:"",
    edicion: "",
    editorial: "",

  },
  }

  },

  methods:{

 agregarRef()
    {
    console.log(this.ref);

      if(!this.ref.autor){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar el Autor!',
      });

      }else if(!this.ref.ano){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar el Año!',
      });
      
      }
        else if(!this.ref.titulo){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar el Titulo!',
      });
      }else if(!this.ref.edicion){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar la Edicion!',
      });
      } else if(!this.ref.editorial){

        this.$swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Falta Digitar la Editorial!',
      });
      
      }else{

    this.axios
   .post("/nuevo-registro", this.ref)
    .then((res) => {
      this.Ref.push(res.data);
      this.ref.autor="";
      this.ref.ano="";
      this.ref.titulo="";
      this.ref.edicion="";
      this.ref.editorial="";

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