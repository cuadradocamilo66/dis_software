<template>
<v-container>
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
          <v-tab to="/referencias/agregarRef/estiloLibroISO" >Inicio</v-tab>
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

<template>
  <v-data-table
    :headers="headers"
    :items="desserts"
    sort-by="calories"
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar
        flat
      >
        <v-toolbar-title>LISTADO DE REFERENCIAS</v-toolbar-title>
        <v-divider
          class="mx-4"
          inset
          vertical
        ></v-divider>
        <v-spacer></v-spacer>
        <v-dialog
          v-model="dialog"
          max-width="500px"
        >
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              class="mb-2"
              v-bind="attrs"
              v-on="on"
            >
              New Item
            </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.autor"
                      label="Autor"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.ano"
                      label="Año"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.titulo"
                      label="Titulo"
                      font="cursive"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.edicion"
                      label="Edicion"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.ciudad"
                      label="Lugar de Publicacion"
                    ></v-text-field>
                  </v-col>
                  <v-col
                    cols="12"
                    sm="6"
                    md="4"
                  >
                    <v-text-field
                      v-model="editedItem.editorial"
                      label="Editorial"
                    ></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn
                color="blue darken-1"
                text
                @click="close"
              >
                Cancelar
              </v-btn>
              <v-btn
                color="blue darken-1"
                text
                @click="EditarReferencias(editedItem)"
              >
               Modificar
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">¿Seguro que quieres eliminar esta referencia?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue darken-1" text @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue darken-1" text @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
    </template>
    <template v-slot:item.actions="{ item }">
      <v-icon
        small
        class="mr-2"
        @click="editItem(item._id)"
      >
        mdi-pencil
      </v-icon>
      <v-icon
        small
        @click="eliminarReferencias(item._id)"
      >
        mdi-delete
      </v-icon>
    </template>
    <template v-slot:no-data>
      <v-btn
        color="primary"
        @click="initialize"
      >
        Reset
      </v-btn>
    </template>
  </v-data-table>
</template>

 <v-btn class="ma-2" id="q-2" color="primary" :to="{name: 'libroIso'}"  style="border-radius: 8px;  float: left; border: 1px solid green">
            ATRAS
          </v-btn>
</v-container>

</template>
<style>
#q-2{
  margin-left: 140px;
}
</style>


<script>
  export default {
    data: () => ({
      dialog: false,
      dialogDelete: false,
      headers: [
        {
          // text: 'Dessert (100g serving)',
          align: 'start',
          sortable: false,
          value: 'name',
        },
        { text: 'ID Referencia', value: '_id' },
        { text: 'Autor', value: 'autor' },
        { text: 'Año', value: 'ano' },
        { text: 'Titulo', value: 'titulo' },
        { text: 'Edicion', value: 'edicion' },
        { text: 'Lugar de Publicacion', value: 'ciudad' },
        { text: 'Editorial', value: 'editorial' },
        { text: 'Actions', value: 'actions', sortable: false },
      ],
      desserts: [],
      editedIndex: -1,
      editedItem: [],
      defaultItem: {
       
      },
    }),

    computed: {
      formTitle () {
        return this.editedIndex === -1 ? 'Nueva Referencia' : 'Editar Referencia'
      },
    },

    watch: {
      dialog (val) {
        val || this.close()
      },
      dialogDelete (val) {
        val || this.closeDelete()
      },
    },

    created () {
      this.initialize()
      this.ListarReferencias(); 
    },

    methods: {
      initialize () {
      
      },

      editItem (item) {
        this.dialog = true
        console.log('item');
        this.axios.get(`/visualizarRef-Iso/${item}`)
        .then(res=>{
          this.editedItem=res.data
        })
      },

      // deleteItem (item) {
      //   this.editedIndex = this.desserts.indexOf(item)
      //   this.editedItem = Object.assign({}, item)
      //   this.dialogDelete = true
      // },

      deleteItemConfirm () {
        this.desserts.splice(this.editedIndex, 1)
        this.closeDelete()
      },

      close () {
        this.dialog = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      closeDelete () {
        this.dialogDelete = false
        this.$nextTick(() => {
          this.editedItem = Object.assign({}, this.defaultItem)
          this.editedIndex = -1
        })
      },

      save () {
        if (this.editedIndex > -1) {
          Object.assign(this.desserts[this.editedIndex], this.editedItem)
        } else {
          this.desserts.push(this.editedItem)
        }
        this.close()
      },

       ListarReferencias () {
        this.axios.get('/visualizar-Iso')
         .then((response)=>{
          this.desserts=response.data;
         })
         .catch((e)=>{
          console.log('error'+e)

         })

        },

        EditarReferencias(item){
          
       this.$swal({
        icon: 'success',
        title: 'Hecho',
        text: 'Haz Modificado Exitosamente!',
      });
      
      this.close();
          this.axios.put(`/actualizar-registro-Iso/${item._id}`,item)
            .then(res =>{
              const index= this.desserts.findindex(n=>n._id===res.data._id)
              this.desserts[index].autor=res.data.autor;
              this.desserts[index].ano=res.data.ano;
              this.desserts[index].titulo=res.data.titulo;
              this.desserts[index].edicion=res.data.edicion;
              this.desserts[index].ciudad=res.data.ciudad;
              this.desserts[index].editorial=res.data.editorial;
            })
            
            .catch(e=>{
            console.log(e.response)
        })

        },

        eliminarReferencias(id){

          
          console.log('id');

          this.axios.delete(`/eliminarRef-Iso/${id}`)
          .then(res=>{

             this.$swal({
              icon: 'error',
              title: 'Hecho',
              text: 'Haz Eliminado Exitosamente!',
               });

            const index= this.desserts.findIndex(item=>item._id===res.data._id)

             this.desserts.splice(index,1);
             this.editedIndex = this.desserts.indexOf(item);
             this.editedItem = Object.assign({}, item)
             this.dialogDelete = true
             
          }).catch(e=>{
                console.log(e.response)
          })

        }



    },
  }
</script>