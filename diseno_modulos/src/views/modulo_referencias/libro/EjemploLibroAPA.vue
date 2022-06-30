<template>
<v-container>
<v-card class="overflow-hidden">
    <v-app-bar
    color="#dfe6ffc5" 
    light
      src="#"
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-title>Estilo APA Libro</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs align-with-title 
    background-color="indigo lighten-1"
    dark>
          <v-tab :to="{name: 'libroApa'}" >Agregar</v-tab>
           <v-tab :to="{name: 'estiloLibroApa' }" >Estructura</v-tab>
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
 <h2>Formato  Referencias Para Libros  Normas APA</h2><br>
 <h3>Este es el formato básico para una entrada de lista de referencias de un libro en formato APA 7ma edición</h3>
<p>
 <H1>EJEMPLOS</H1>
 <h3>Autor/a(s) del libro. (Año de publicación). Título del libro. (Número de edición ed.). Editorial.</h3>
 <br>
 <ul>
 <li>
 <strong>Un libro con un solo autor:</strong>Allende, I. (1982). La casa de los espíritus. Sudamericana.
 </li> <br>
 <li>
 <strong>Un libro con dos autores:</strong>Bauman, Z., & Donskis, L. (2019). Maldad líquida. Ediciones Paidós.
 </li><br>
 <li>
 <strong> Un libro con tres autores:</strong> Gouard, R., Geudin, C., & Bricout, G. (2017). Vinilos: Las mejores portadas de discos de la historia. Lunwerg.
 </li><br>
 <li>
 <strong>Un libro en su segunda edición:</strong> Möser, M., & Barros, J.L. (2009). Ingeniería acústica: Teoría y aplicaciones (2da ed.). Springer.
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
  height: 60vh;

}
ul, li{
  text-align: left;
}
#q-2{
  margin-left: 140px;
}


</style>