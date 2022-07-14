<template>
<v-container>
<div id="cuerpo"> 
<br>
<h2>Para citar un libro en una lista de referencias en formato APA 7ma edición, <br>
incluye los siguientes elementos:</h2> <br>
<p> 
<ul>
<li>
<strong>Autor/a(s) del libro:</strong>  Indica el apellido y las iniciales (p. Ej. García, J. R.) 
 de hasta 20 autores con el apellido precedido por el signo ampersand (&). <br>
  Para 21 o más autores, incluye los primeros 19 nombres seguidos de puntos suspensivos (…) <br>
   y agrega el nombre del último autor.
</li><br>
<li>
<strong>Año de publicación: </strong>Escribe el año entre paréntesis seguido de un punto.
</li><br>
<li>
<strong>Título del libro:</strong> Los títulos de los libros se escriben en cursiva. Solo la primera letra de la primera palabra y los nombres propios se escriben en mayúscula.
</li><br>
<li><strong>Número de edición:</strong> Incluye información sobre la edición si no es la primera.
</li><b></b>
<li>
<strong>Editorial: </strong>Indica el nombre del editor, pero omita términos, como Editorial, Publishers, Co. e Inc. Conserve las palabras Books y Press.
</li>
</ul></p>

<br><br>
  </div>
  <br>
 
  <v-btn class="ma-2" type="submit" id="q-2" color="primary" @click="llamar()"
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
<script>
export default{
methods: {
  
  llamar(){
    this.$router.push('/referencias/agregarRef')
  }

}}
</script>