<template>
  <v-app>
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
  background: url('../assets/Ilustraciones/fondo_nav.png') no-repeat !important;
  background-size: 100px;
  
}

.arbol{
  position: relative;
background-size: 100px;
margin-top: 30px;
margin-left: 900px;
width:250px;
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
    margin-left: -470px;
     top: 340px;
     height:70px;

    
    

}
</style>
