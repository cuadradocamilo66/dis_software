
<template>

<div class="container">
   
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

    <v-btn to="/referencias" 
      rounded 
      color="verde">
      Bibliografía
    </v-btn>
  </v-row>
<br><br>
  
    <div class="col m12 card-panel">

     <H3>DIGITE UNA REFERENCIA BIBLIOGRAFICA</H3>
     <br><br>
    
      
    </div>
<!-- botones menu -->
          <v-btn color="success" to="/referencias/agregar" style="border-radius: 8px; float: left; border: 1px solid green">
            Estilo APA
          </v-btn>
          <v-btn  color="primary" to="/referencias/agregarIso" style="border-radius: 8px;  float: left; border: 1px solid green">
            Estilo ISO 
          </v-btn>
          
<!-- end -->
<br><br>
<!-- inicio main principal -->
<div class="cv">
<div id="cuerpo"> 
 <br><h4>Fuente Normas Vancouver</h4><br>

 <p><strong>MODELO DE ESTRUCTURA (LIBRO) </strong> <br>
Apellido/s del autor/a, Nombre del autor/a. Título del libro. Edición (si no es la primera). Lugar de publicación: Editorial; año de publicación. Número de páginas.<br>
<strong>EJEMPLO (LIBRO)</strong> ​​<br>
Ross, Michael H.; Pawlina, Wojciech. Histología: texto y atlas color con biología celular y molecular. 4ª ed. México: Médica Panamericana; 2013. 864 p.</p>
  
  <v-form  @submit.prevent="agregarRef" v-if="!isHidden2">
    <v-container >
      <v-row>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="autor"   
            
            label="Autor"
            clearable
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="titulo"         
            label="Titulo"
            clearable
          ></v-text-field>
        </v-col>

       <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="edicion"         
            label="Edicion"
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
            v-model="ciudad"            
            
            label="Lugar de Publicacion"
            clearable
          ></v-text-field>
        </v-col>

        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="editorial"
            label="editorial"
            clearable
          ></v-text-field>
        </v-col>
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="ano"
            label="Año de publicacion"
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
            v-model="numero"
            label="Numero de Pagina"
            clearable
          ></v-text-field>
        </v-col>
      </v-row>
    </v-container>

 <br><br>
   <v-btn type="submit"  class="ma-2" rounded  color="primary"  dark >{{(indice == -1 ? 'Agregar':'Actualizar')}}<v-icon dark right></v-icon></v-btn>
   <v-btn v-on:click="isHidden = false, isHidden2 = true"  class="ma-2" rounded color="primary" dark >Visualizar<v-icon dark right></v-icon></v-btn> 
  </v-form>
 
 
</div>
</div>
<!-- //fin main principal -->

<br>

<!-- inicio tabla registros -->
<div v-if="!isHidden">
   <v-simple-table class="table" >
    <template v-slot:default>
      <thead class="thead">
        <tr>
          <th class="text-left">
            Autor
          </th>
          <th class="text-left">
            Titulo
          </th>
          <th class="text-left">
            Edicion
          </th>
          <th class="text-left">
            Ciudad
          </th>
          <th class="text-left">
            Editorial
          </th>
          <th class="text-left">
            Año
          </th>
          <th class="text-left">
            Numero de Pag.
          </th>
          <th class="text-left">
            Eliminar
          </th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr v-for="(usuario, index) in usuarios"
         v-bind:key="usuario" 
         v-bind:class="{'blue darken-1 white-text': index == indice}">
              <td>{{usuario.autor}}.</td>
              <td>{{usuario.titulo}}.</td>
              <td>{{usuario.edicion}},</td>
              <td>{{usuario.ciudad}}:</td>
              <td>{{usuario.editorial}}.</td>
              <td>{{usuario.ano}}.</td>
              <td>{{usuario.numero}}.</td>
              <td><v-btn href="#!" @click="editar(index)">edit</v-btn></td>
              <td><v-btn href="#!" @click="eliminar(index)">delete</v-btn></td>
        </tr>
      </tbody>
       </template>
     </v-simple-table>
     <v-btn v-on:click="isHidden = true, isHidden2 = false"  class="ma-2" rounded color="primary" dark >{{(indice != -1 ? 'Regresa para editar':'Atras')}}<v-icon dark right></v-icon></v-btn> 
  
     </div>
      
  </div>
  
</template>
  
<style scoped>
#cuerpo{
  background-color: rgba(6, 245, 110, 0.865);
  border-radius: 30px;
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
}

</style>
<script>


export default {
  name: 'App',
  data(){
    
    return {
      indice: -1,
      autor: '',
      ano: '',
      titulo: '',
      edicion: '',
      ciudad: '',
      editorial: '',
      numero: '',
      usuarios: [],
      isHidden: true,
      isHidden2: false,
    }
    
  },

  methods: {
    agregarRef()
    {
      var data = {
        autor: this.autor,
        ano: this.ano,
        titulo: this.titulo,
        edicion: this.edicion,
        ciudad: this.ciudad,
        editorial: this.editorial,
        numero: this.numero,
      };
        if(this.indice == -1){
         this.usuarios.push(data);
        }
       else
        {
        this.usuarios[this.indice] = data;
        } 
        this.indice = -1;
        this.autor = '';
        this.ano = '';
        this.titulo = '';
        this.edicion = '';
        this.ciudad = '';
        this.editorial = '';
        this.numero = '';
      
      
    },
      
    eliminar(index){
       if(!confirm('¿Desea Eliminar Este Registro?')) 
         return;
        this.usuarios.splice(index, 1);
    },

    editar(index){
      var usuario = this.usuarios[index];
      this.indice = index;
      this.autor = usuario.autor;
      this.ano = usuario.ano;
      this.titulo = usuario.titulo;
      this.edicion = usuario.edicion;
      this.ciudad = usuario.ciudad;
      this.editorial = usuario.editorial;
      this.numero = usuario.numero;
    },
    
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  background-color: aquamarine;
  height: 120vh;

}
</style>
