<template>
<v-container>
<div id="cuerpo"> 
<br>
<h2>Para citar un libro en una lista de referencias en formato ISO 609, <br>
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
<li>
<strong>Número de edición:</strong> Incluye información sobre la edición si no es la primera.
</li><br>
<li>
<strong>Lugar de Publicacion:</strong> Incluye información sobre el lugar o ciudad de publicacion del libro.
</li><br>
<li>
<strong>Editorial: </strong>Indica el nombre del editor, pero omita términos, como Editorial, Publishers, Co. e Inc. Conserve las palabras Books y Press.
</li>
<li>
<strong>ISBN: </strong>Indica un identificador único para libros.​ Mediante este sistema, a cada libro se le asigna una cadena alfanumérica <br>
 única internacional que sirve para identificar datos básicos del objeto tales como título, editorial, tirada, extensión, materia, país, traductor, lengua original, etc.
</li>
</ul></p>
<br>
<br>
  </div>

  <v-btn class="ma-2" type="submit" id="r-2" color="primary" @click="llamar()"
    style="border-radius: 8px; margin-left: -80px; float: left; border: 1px solid green">
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
  height: 68vh;

}
ul, li{
  text-align: left;
}
#r-2{
  margin-top: -50px;
  margin-left: 880px;
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