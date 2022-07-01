<template>
<div class="principal"> 
  
      <v-tabs 
          right icons-and-text 
          slider-color="light-red" 
          slider-size="1"
          fixed-tabs
           hide-slider>

          <v-tab class="crea" :to="{ name: 'inicio' }"> CREAVI 
            <v-icon  x-large class="mb-2"></v-icon>
          </v-tab> 

          <v-tab class="crea" :to="{ name: 'contenido' }">CONTENIDOS
            <v-icon  x-large class="mb-2"></v-icon>
          </v-tab> 
          
          <v-tab  class="crea" :to="{ name: 'evaluacion' }" > EVALUACIÒN
            <v-icon x-large class="mb-2">fas fa-clipboard-check</v-icon>
          </v-tab>
 
          <v-tab class="crea" :to="{ name: 'creditos' }">CREDITOS
            <v-icon  x-large class="mb-2"></v-icon>
          </v-tab>
          
        </v-tabs>
        <br>
  
<div class="card2">


  
</div>

 <v-main>
      <transition name="bounce">
        <router-view> 
        </router-view>
      </transition>
    </v-main>

 </div>
  
  

</template>

<script>


export default {
  name: 'entrada', 
  components: {
    
  },

  data: () => {
  
    return {
          
    
    };
  }
};
</script>

<style>

.principal{
 background: url('../assets/Ilustraciones/fondo_1.png')no-repeat !important;
position: relative;
  background-size: 100px;
  height: 670px;
  top:40px;
  border-radius: 10px;
  width: 1350px;
   margin-top:-55px;
  background-color:rgb(255, 255, 255);
  -webkit-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 10px 10px 93px 0px rgba(0, 0, 0, 0.75);
  
}
.crea{
font-size: 40px;
font-family: cursive;
margin-top: 10px;
margin-right: 70px;
color: lightgreen;

}

@font-face {
  font-family:"letras2";
  src: url("../assets/Ilustraciones/letra1.ttf");
}


.letra{
color: black;
font-family: TIME NEW ROMA;
font-size:20px;
}
.salon{
position: relative;
background-size: 100px;
margin-left: 20px;
width:650px;
height:400px;
}

.entrada{
position: relative;
background-size: 100px;
margin-left: 20px;
width:650px;
height:400px;
}

.title {
color:  white;
text-align: right;
position: relative;
  bottom: -200px;
   right: 200px;


}

.subtitle {
  color:  white;
text-align: right;
position: relative;
  bottom: -220px;
   right: 170px;
   font-size: 35px;
  

}

body{
  margin: 0; 
  padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}
.icon {
    align-content: right;
    align-items: right;
    padding-left: 50%;
    position: relative;
  bottom: 450px;
   right: -60px;
   font-size: 50px;
    

}

</style>
