# Ejercicio Palindrome

Crea y testea una función que se llame `isPalindrome`, que reciba una cadena, y que devuelva `true` o `false` dependiendo de si la cadena es un palíndromo o no.

Si no se envía ninguna cadena o ésta está vacía, la función debe lanzar un error con el siguiente mensaje: "Text not provided".

Algoritmo para detectar si es palíndromo:

1. Pasar todo el texto a minúsculas.
2. Quitar espacios y signos de puntuación.
3. Cambiar las letras con acentos por letras sin acentos.
4. Invertir el texto normalizado.
5. Comparar el texto normalizado con el resultado de invertirlo.

Pistas:

- Expresión regular para detectar espacios y signos de puntuación: `/[.,:;()_?¿!¡-\s]/g`
- Cambiar letras con acentos por letras sin acentos: `texto.normalize("NFD").replace(/[\u0300-\u036f]/g, "")`
