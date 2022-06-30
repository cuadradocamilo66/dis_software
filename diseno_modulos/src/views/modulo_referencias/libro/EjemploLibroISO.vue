<template>
<v-container>
<v-card class="overflow-hidden">
    <v-app-bar
    color="#dfe6ffc5" 
    light
      src="#"
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-title>Estilo ISO Libro</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs align-with-title 
    background-color="indigo lighten-1"
    dark>
          <v-tab :to="{name: 'libroIso'}" >Agregar</v-tab>
           <v-tab :to="{name: 'estiloLibroIso' }" >Estructura</v-tab>
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
 <h2>Formato  Referencias Para Libros  Normas ISO</h2><br>
 <h3>Este es el formato básico para una entrada de lista de referencias de un libro en formato ISO 690 (2013)</h3>
<p>
 <H3>EJEMPLOS</H3>
 <h3>APELLIDO(S), Nombre. Título del libro en cursiva. Edición. Lugar de publicación:
editorial, año. Número internacional normalizado (ISBN…)</h3>
 <br>
 <ul>
 <li>
 <strong>Un libro con un solo autor:</strong>MANKIW, N. Gregory, 2014. Macroeconomía. 4ª ed. Barcelona: Antoni Bosch. ISBN 9788495348944.
 </li> <br>
 <li>
 <strong>Un libro con dos autores:</strong>FERNÁNDEZ GARCÍA, Tomás y PONCE DE LEÓN, Laura, 2018. Nociones básicas de trabajo social. 2ª ed. Madrid: Ediasa. ISBN 9788494878343.
 </li><br>
 <li>
 <strong> Un libro con tres autores:</strong>RIVERA CAMINO, Jaime, ARELLANO CUEVA, Rolando y MOLERO AYALA, Víctor, 2013. Conducta del consumidor: estrategias y tácticas aplicadas al márketing. 3ª ed. Madrid: ESIC. ISBN 9788473568456.
 </li><br>
 <li>
 <strong>Un libro con mas de tres autores:</strong>BIRNBAUM, Norman, et al., 1976. Las clases sociales en la sociedad capitalista avanzada. Barcelona: Península. ISBN 9788429707830.
 </li>
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