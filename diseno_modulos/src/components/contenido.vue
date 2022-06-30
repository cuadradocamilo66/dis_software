<template>
<div class="card">
   
       
   <h2 style="font-size:40px; margin-left:300px; 
   margin-bottom:20px; font-family: cursive; padding-top:40px; color: #00DD07">CONTENIDOS POR AREA</h2>
 
<router-link :to="{ name: 'actividades' }">
<img class="amarillo" src="../assets/Ilustraciones/amarillo.png" alt="" srcset=""></router-link><br>

<router-link :to="{ name: 'evaluacion' }">
<img class="azul" src="../assets/Ilustraciones/azul.png" alt="" srcset=""></router-link><br>

<router-link :to="{ name: 'decimal' }">
<img class="rojo" src="../assets/Ilustraciones/rojo.png" alt="" srcset=""></router-link><br>







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
  background-image: url(../assets/Background/contenido.jpg);
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
.amarillo{
  position: relative;
  height: 86px;
  width: 220px;
  top: 50px;
  left: 50px;
}
.azul{
  position: relative;
  height: 110px;
  width: 220px;
  top: 60px;
  left: 50px;
}

.rojo{
  position: relative;
  height: 110px;
  width: 220px;
  top: 60px;
  left: 50px;
}

.color{
 background-color: red;
}

</style>