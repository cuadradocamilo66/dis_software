<template>
<v-container>
<v-card class="overflow-hidden">
    <v-app-bar
    color="#dfe6ffc5" 
    light
      src="#"
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-title>Estilo ISO Articulo</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs align-with-title 
    background-color="indigo lighten-1"
    dark>
          <v-tab :to="{name: 'articuloIso' }" >Inicio</v-tab>
           <v-tab :to="{name: 'estiloArtIso' }" >Estructura</v-tab>
        </v-tabs>
      </template>

       
    </v-app-bar>
    <v-sheet
      id="scrolling-techniques-3"
      class="overflow-y-auto"
      max-height="400"
    >
     
    </v-sheet>
    
  </v-card> <br>
    <div id="cuerpo"> 

<br><br>

 
 <h3>Este es el formato básico para una entrada de lista de referencias de un  artículo de revista científica <br> 
 en formato ISO 690:</h3>
<p>
 <H3>EJEMPLOS</H3>
 <h3>APELLIDOS, Nombre autor del artículo, Año de publicación. Título del artículo. Título de la revista en cursiva. Lugar de publicación: Editorial, volumen de la revista, número de la revista, páginas que abarca el artículo. ISSN o DOI.</h3>
 <br>
 <ul>
 <li>
 <strong>Un artículo científico escrito por una autor:</strong>ESCAPA, Sandra, 2017. Los efectos del conflicto parental después del divorcio sobre el rendimiento educativo de los hijos. Revista Española de Investigaciones Sociológicas. Madrid: CIS, no.158, pp. 41-58. ISSN 0210-5233.
 </li><br>
 <li>
 <strong>Un artículo científico escrito por dos autores:</strong>SANTOVEÑA CASAL, Sonia y BERNAL BRAVO, César, 2019. Explorando la influencia del docente: Participación social en Twitter y percepción académica. Comunicar. Huelva: Grupo Comunicar, no.58, pp.75-84. ISSN 1134-3478.
 </li><br>
 <li>
 <strong>Un artículo científico escrito por tres autores:</strong>GONZÁLEZ-RIAÑO, Mª Guadalupe, REPISO, Rafael y DELGADO LÓPEZ-COZAR, Emilio, 2014. Repercusión de los rankings universitarios en la prensa española. Revista española de Documentación Científica. Madrid: CSIC, vol.37, no.3. ISSN 0210-0614.
 </li><br>
  <li>
 <strong>Un artículo científico escrito  por mas tres autores:</strong>PÉREZ CABEZAS, Verónica, et al., 2018. Highly cited papers in rheumatology: identification and conceptual analysis. Scientometrics. New York: Springer, vol. 116, no. 1, pp. 555-568. ISSN 1588-2861..
 </li><br>
 
 </ul>
 </p>

  </div>
  </v-container>
</template>
<style>
#cuerpo{
  background-color:#00ff2a51;
  border-radius: 10px;
  border: 1px solid black;
  color:rgb(0, 0, 0);
  height: 70vh;

}
ul, li{
  text-align: left;
}
#q-2{
  margin-left: 140px;
}


</style>