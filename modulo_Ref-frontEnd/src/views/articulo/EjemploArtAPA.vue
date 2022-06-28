<template>
<v-container>
<v-card class="overflow-hidden">
    <v-app-bar
    color="#dfe6ffc5" 
    light
      src="#"
      scroll-target="#scrolling-techniques-3"
    >
      <v-app-bar-title>Estilo APA Articulo</v-app-bar-title>
      <template v-slot:extension>
        <v-tabs align-with-title 
    background-color="indigo lighten-1"
    dark>
          <v-tab :to="{name: 'articuloApa' }" >Inicio</v-tab>
           <v-tab :to="{name: 'estiloArtApa' }" >Estructura</v-tab>
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
 en formato APA 7ma edición:</h3>
<p>
 <H3>EJEMPLOS</H3>
 <h3>Autor/a(s) del artículo. (Año de publicación). Título del artículo. Título de la revista científica, <br>
  Volumen(Número de emisión), Páginas.</h3>
 <br>
 <ul>
 <li>
 <strong>Un artículo científico escrito por una autora:</strong>Policsek, C. (2019). El forjamiento de “lo latinoamericano” en moldes editoriales: sobre el caso rumano en el período 2004–2015. <br> 
 bNeophilologus, 103(1), 83–97.
 </li><br>
 <li>
 <strong>Un artículo científico escrito por un autor:</strong>Ginestal López, R. C. (2018). Eficiencia de las nuevas opciones terapéuticas para el tratamiento de la esclerosis múltiple; una revisión farmacoeconómica. PharmacoEconomics Spanish Research Articles, <br> 
 15(1–4), 3–12.
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
  height: 60vh;

}
ul, li{
  text-align: left;
}
#q-2{
  margin-left: 140px;
}


</style>