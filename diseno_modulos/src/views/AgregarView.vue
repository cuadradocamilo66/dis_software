
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
          <v-btn  color="primary" to="/referencias/agregarIso" style="border-radius: 8px;  float: left; border: 1px solid green">
            Estilo ISO 
          </v-btn>
          <v-btn  color="secondary" to="/referencias/agregarVancouver" style="border-radius: 8px;  float: left; border: 1px solid green">
            Estilo Vancouver
          </v-btn>
          
<!-- end -->
<br><br>
<!-- inicio main principal -->
<div class="cv">
<div id="cuerpo"> 
 <br><h4>Fuente Normas APA</h4><br>

 <p> <strong>MODELO DE EXTRUCTURA (LIBRO)</strong> <br>
  Autor: Apellido e inicial(es) de los nombre(s). Año de publicación. Título del trabajo y subtítulo, si hay, separados por dos puntos (en itálicas o negritas). Edición a partir de la segunda edición, se abrevia con (ed.) (minúsculas). Editorial <br>
  <strong>EJEMPLO (LIBRO)</strong> <br>
  Márquez, G. G. (2017). Cien años de soledad (ed. 50 aniversario). Editorial Planeta Mexicana.
  </p>
  
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
            v-model="ano"         
            label="Año"
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

        
      </v-row>

      <v-row>
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
    
        <v-col
          cols="12"
          sm="4"
        >
          <v-text-field
            v-model="editorial"
            label="Editorial"
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
            Año
          </th>
          <th class="text-left">
            Titulo
          </th>
          <th class="text-left">
            Edicion
          </th>
          <th class="text-left">
            Editorial
          </th>
          <th class="text-left">
            Editar
          </th>
          <th class="text-left">
            Eliminar
          </th>
        </tr>
      </thead>
      <tbody class="tbody">
        <tr v-for="(usuario, index) in usuarios"
         v-bind:key="usuario" 
         v-bind:class="{'blue darken-1white-text': index == indice}">
              <td>{{usuario.autor}}.</td>
              <td>({{usuario.ano}}).</td>
              <td>{{usuario.titulo}}.</td>
              <td>({{usuario.edicion}}).</td>
              <td>{{usuario.editorial}}.</td>
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
  height: 110vh;

}
</style>
