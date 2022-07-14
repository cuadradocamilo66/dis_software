<template>
<v-container>
<div id="cuerpo"> 
<br>

<h2>Para citar un artículo de revista científica en una lista de referencias en formato APA 7ma edición, <br>
 incluye los siguientes elementos:</h2> <br>
<p> 
<ul>
<li>
<strong>Autor/a(s) del artículo:</strong> Indica el apellido y las iniciales (p. Ej. García, J. R.) de hasta 20 autores con el apellido precedido por el signo ampersand (&).  <br>
Para 21 o más autores, incluye los primeros 19 nombres seguidos de puntos suspensivos (…)  <br>
   y agrega el nombre del último autor.
</li><br>
<li>
<strong>Año de publicación: </strong>Escribe el año entre paréntesis seguido de un punto.
</li><br>
<li>
<strong>Título del artículo:</strong> Solo la primera letra de la primera palabra y los nombres propios se escriben en mayúscula.
</li><br>
<li><strong>Título de la revista científica:</strong>  Indica el título completo y no abreviado de la publicación periódica en mayúscula. También debe estar en cursiva.
</li>
<li>
<strong>Volumen: </strong>En el caso de las publicaciones enumeradas por emisión, indica el número de ejemplar entre paréntesis.
</li>
<li>
<strong>Número de emisión:</strong>El número de volumen debe estar en cursiva.
</li>
<li>
<strong>Paginas:</strong>Incluye el rango de páginas completo.
</li>
</ul></p>
</div>
  <br>
  <v-btn class="ma-2" type="submit" id="q-2" color="primary" :to="{name: 'agregar'}" 
   style="border-radius: 8px;  float: left; border: 1px solid green">
     ATRAS
  </v-btn>

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

</style>