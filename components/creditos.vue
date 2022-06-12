<template>
<div class="credito">
    <v-row class="mt-10">
    <v-col>
    <br><br><br><v-card class="mx-auto py-2"  rounded max-width="500" elevation="1">
      <v-row justify="center">
        <div class="title_proyect">
          <h2>ESTUDIANTE 1</h2>
        </div>
      </v-row>
      <v-row class="box-card" justify="center">
        <div class="usuario1" />
        <div class="descripcion">
          <div class="title_name">
            <h3>Nombres:</h3>
            <h3>Apellidos:</h3>
            <h3>Edad:</h3>
          </div>
          
        </div>
      </v-row>


    </v-card>
<br>
    <v-card class="mx-auto py-2"  rounded max-width="500" elevation="1">
      <v-row justify="center">
        <div class="title_proyect">
          <h2>ESTUDIANTE 2</h2>
        </div>
      </v-row>
      <v-row class="box-card" justify="center">
        <div class="usuario1" />
        <div class="descripcion">
          <div class="title_name">
            <h3>Nombres:</h3>
            <h3>Apellidos:</h3>
            <h3>Edad:</h3>
          </div>
          
        </div>
      </v-row>


    </v-card>
    </v-col>

    <v-col>
    <br><br><br><v-card>
  
      <v-row class="box-card" justify="center">
        <div class="logo" />
      </v-row>
    </v-card>

    <v-card class="py-1 mt-5 mx-auto" rounded max-width="480" elevation="5">
      <v-row justify="center">
        <div class="title_proyect">
          <h2>DOCENTE</h2>
        </div>
      </v-row>
        <v-row class="box-card" justify="center">
        <div class="usuario1" />
        <div class="descripcion">
          <div class="title_name">
            <h3>Nombre:</h3>
          </div>
          <div class="parrafo_name">
            <p>Curso: </p>
          </div>
        </div>
      </v-row>
    </v-card>

    </v-col>
    </v-row>
    </div>
</template>


<style>

.credito{
  position: relative;
  background-size: 100px;
  height: 670px;
  border-radius: 0px;
  width: 1350px;
   margin-top:-50px;
  background-color:rgb(255, 255, 255);
 
}


.box-card {
  margin-top: 50px;
  margin: 20px 0px 70px 0px;
}

.descripcion {
  padding-left: 60px;
  margin-left: -50px;
  width: 400px;
  height: 50px;
}

.title_name {
  border-radius: 10px 10px 0px 0px;
  padding-left: 60px;
  margin-left: -50px;
  background-color: rgba(0, 0, 0, 0.3);
  color: rgb(5, 5, 5);
}

.parrafo_name {
  border-radius: 10px 0px 0px 0px;
  padding-left: 60px;
  margin-left: -50px;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
  color: rgb(0, 0, 0);
}

.usuario1 {
  border-radius: 100%;
  background-image: url(../assets/Fotos/usuario.jpg);
  background-size: cover;
  width: 80px;
  height: 80px;
  position: relative;
  z-index: 2;

}



</style>
<script>
export default {
  name: "creditos",
  data: () => ({
    //
  }),

  beforeDestroy() {
    },
};
</script>
