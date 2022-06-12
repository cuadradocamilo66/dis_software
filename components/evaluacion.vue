<template>
  <v-container fluid class="descargar">
  
    <v-row no-gutters >
      <v-row class="mr-5">
        <v-col align="center">
          <v-btn color="white" >
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-up </v-icon> -->
            <h1> 1 </h1>
          </v-btn>
        </v-col>
      </v-row>
    </v-row>
    <v-row no-gutters>
      <v-col align="center">
        <v-main style="padding: 10px 0px 0px">
                <router-view></router-view>
            
        </v-main>
      </v-col>
    </v-row>
  </v-container>
</template>

<style>
.btn_background{
  background-color: rgba(0, 0, 0, 0.5); 
   /* border-bottom:4px solid rgb(255, 255, 255) ; */
}

.descargar{
  position: relative;
  background-size: 100px;
  height: 670px;
  border-radius: 0px;
  width: 1350px;
   margin-top:-20px;
  background-color:rgb(255, 255, 255);
 
}  
</style>


<script>
export default {
  name: "evaluacion",
  data: () => ({
    //
  }),

  beforeDestroy() {
  },
};
</script>
