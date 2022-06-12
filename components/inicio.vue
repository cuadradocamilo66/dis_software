<template>
  <v-app>
    
    <img class="lapiz" src="../assets/Ilustraciones/lapiz.png" alt="">

    <v-main>
     
      <br><div>  
      
                <router-link to="/entrada"> <img class="icon" src="../assets/Ilustraciones/ingresar.png">
                </router-link></div>

  

   

            
    </v-main> 
  </v-app>
</template>

<script>


export default {
  name: 'inicio', 
  components: {
    
  },

  data: () => {
  
    return {
          
    
    };
  }
};
</script>

<style>

#app {
  background: url('../assets/Background/fondo_nav.png') no-repeat !important;
  background-size: 100px;
  
}

.lapiz{
  position: relative;
background-size: 100px;
margin-top: 40px;
margin-left: 1000px;
width:170px;
height:170px;
}

.title {
   align-content: right;
    align-items: right;
     top: -100px;
    padding-left: 30%;
    position: relative;
   font-size: 50px;
  width: -100px;
  display: flex;
  justify-content: center;

  /* Fin del codigo para centrar*/
}

body{
  margin: 0; 
  padding: 0;
    font-family: Avenir, Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon {
  cursor:pointer;
    left: -200px;
     top: 220px;
     height:80px;

    
    

}
</style>
