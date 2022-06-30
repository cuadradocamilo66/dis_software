
<template>

<div class="container">
   
         
<br>
 <div>
 <h1 class="letra-titulo" style="font-size:30px; margin-top:50px; margin-left:30px; color: #ffffff; font-family: 'Roboto', sans-serif;">SELECCIONE EL TIPO DE <br> REFERENCIA BIBLIOGRAFICA A CREAR
 </h1>
   <br><br>
 </div>
<br><br>
<div class="ce">
<br><br><br>
       <v-row>
              <router-link :to="{name:'estiloLibroApa' }">
              <v-img :src="require('../../assets/logo_apa.png')"
                      max-width="150"
                      max-height="150"
                      style="margin-left: 200px;"
                      />
              </router-link>
          
             <router-link :to="{name: 'estiloLibroIso'}">
             <v-img :src="require('../../assets/logo_iso.png')" 
                     max-width="150"
                     max-height="150"
                   style="  margin-left: 550px;
                            margin-top: -140px;"
                     />
             </router-link>


         </v-row>
          <!-- end -->
           </div>

<br><br><br><br>

          <v-btn class="ma-2" id="q-2" color="primary" to="/referencias"  style="border-radius: 8px;  float: left; border: 1px solid green">
            ATRAS
          </v-btn>
</div>
</template>
  
<style scoped>
#cuerpo{
  background-color: rgba(6, 245, 110, 0.865);
  border-radius: 30px;
  border: 1px solid black;
  color:rgb(255, 255, 255);

}
.ce{
  height: 300px;
  width: 80%;
  margin-left: 100px;
  background: rgba(6, 245, 110, 0.865);
  border-radius: 30px;
  border: 1px solid black;
}
#q-2{
  margin-left: 140px;
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
</style>
<script>

</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
  background-color: #229D9C;
  height: 110vh;

}
h3{
    color: #ffffff;
}


.n1{
  margin-left: 200px;
}



</style>
