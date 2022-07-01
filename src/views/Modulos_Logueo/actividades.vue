<template>
  <div class="registro">
   <br><br><br> <v-row no-gutters >
      <v-row class="mr-5">
      <!--  <v-col align="center">
          <v-btn :to="{ name: 'decimal' }" color="indigo" class="btn_background mx-5" block outlined dark rounded x-large>
            
            <h1>decimal</h1>
          </v-btn>
        </v-col> -->
       <br> <v-col align="center">
          <v-btn :to="{ name: 'acti1' }"  color="white" >
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-up </v-icon> -->
            <h1> WORD </h1>
          </v-btn>
        </v-col>
      <v-col align="center">
          <v-btn :to="{ name: 'acti2' }"  color="white" >
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-up </v-icon> -->
            <h1> EXCEL </h1>
          </v-btn>
        </v-col>
         <v-col align="center">
          <v-btn :to="{ name: 'acti3' }"  color="white" >
            <!-- <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-up </v-icon> -->
            <h1> PDF </h1>
          </v-btn>
        </v-col>
       <!--  <v-col align="center">
          <v-btn :to="{ name: 'hexadecimal' }" color="red" class="btn_background mx-5" block outlined dark rounded x-large>
            <v-icon class="my-n ml-n3" size="50"> mdi-gamepad-round-down</v-icon>
            <h1>hexadecimal</h1>
          </v-btn>
        </v-col -->
      </v-row>
    </v-row>
    <v-row no-gutters>
      <v-col align="center">
        <v-main>
                <router-view></router-view>
            
        </v-main>
      </v-col>
    </v-row>
  </div>
</template>


<style>

.registro{
position: relative;
  background-size: 100px;
  height: 670px;
  border-radius: 0px;
  width: 1350px;
   margin-top:-30px;
  background-color:rgb(255, 255, 255);
 
}

</style>




<script>
export default {
  name: "actividades",
  data: () => ({
    //
  }),

  beforeDestroy() {
  },
};
</script>
