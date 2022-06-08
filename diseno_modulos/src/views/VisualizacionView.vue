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

    <v-btn
      rounded 
      color="verde">
      Bibliografía
    </v-btn>
  </v-row>
<br><br>

<v-simple-table>
    <template v-slot:default>
      <thead>
        <tr>
          <th class="text-left">
            Autor
          </th>
          <th class="text-left">
            Titulo
          </th>
          <th class="text-left">
            Año
          </th>
          <th class="text-left">
            Ciudad
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
      <tbody>
        <tr v-for="usuario in usuarios" v-bind:key="usuario">
          <td>{{usuario.autor}}</td>
              <td>{{usuario.titulo}}</td>
              <td>{{usuario.ano}}</td>
              <td>{{usuario.ciudad}}</td>
              <td>{{usuario.editorial}}</td>
              <td><a href="#!"><i class="material-icons">edit</i></a></td>
              <td><a href="#!"><i class="material-icons">delete</i></a></td>
        </tr>
      </tbody>
    </template>
  </v-simple-table>
</div>
</template>

<script>


export default {
  name: 'App',
  data(){
    return {
      autor: '',
      titulo: '',
      ano: 0,
      ciudad: '',
      editorial: '',
      usuarios: [],
    }
  },

  methods: {
    agregarRef()
    {
      var data = {
        autor: this.autor,
        titulo: this.titulo,
        ano: this.ano,
        ciudad: this.ciudad,
        editorial: this.editorial,
        

      };
      this.usuarios.push(data);
      this.autor = '';
      this.titulo = '';
      this.ano = 0;
      this.ciudad = '';
      this.editorial = '';
    
    },
    
  }
}
</script>
