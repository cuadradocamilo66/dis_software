<template>
<div class="card">

       <router-link to="/actividades"> <img class="generador" src="../assets/Ilustraciones/generar.png">
        </router-link>
        <router-link to="/creditos"> <img class="re" src="../assets/Ilustraciones/registro.png">
       </router-link>
         <br>
        <img class="uno" src="../assets/Ilustraciones/1.jpg"><br>
        <img class="tres" src="../assets/Ilustraciones/3.jpg">


      </div>
    
</template>

<script>
export default {
  name: "contenido",
  data: () => ({
    //
  }),

  beforeDestroy() {
    },
};
</script>

<style>


.card {
  position: relative;
  background-image: url(../assets/Ilustraciones/contenido.jpg);
  background-size: 100%;
  height: 560px;
  left:15px;
  top:-20px;
  border-radius: 20px;
  width: 1320px;
  margin-top:5px;
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
}
.uno{
  position: relative;
  top: 100px;
  margin-left: 900px;
   height: 150px;
   width: 150px;
}
.tres{
  position: relative;
  top: 120px;
  margin-left: 900px;
   height: 150px;
   width: 150px;
}

.re{
  position: relative;
  top: 120px;
  margin-left: 50px;
   height: 60px;
   width: 190px;
}
.generador{
   position: relative;
  top: 120px;
  margin-left: 300px;
   height: 60px;
   width: 200px;
}

.color{
 background-color: red;
}

</style>