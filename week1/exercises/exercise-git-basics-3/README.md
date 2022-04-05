## Ejercicio Git Basics 3

1. Abre este repositorio y clónalo en tu máquina: <https://github.com/coders-202204/random-name>
2. Localiza el commit de la versión 0.1.1 y crea una rama a partir de él. Llámala **feature/experiment** y muévete hasta la nueva rama.
3. Crea otra nueva rama en el mismo commit, llámala **bugfix/bug-utf8** y muévete hasta ella.
4. Huy, perdón, nos hemos equivocado. Las dos ramas anteriores había que crearlas a partir de la versión 0.1.0.
5. Corrige el caracter extraño de _Amélie_ en la línea 820 del archivo `names.txt` y guárdalo en un commit.
6. Crea una nueva rama llamada **feature/local-names**.
7. Introduce varios nombres en el archivo `names.txt` (que no vayan en líneas seguidas) y haz un commit por cada uno que añadas.
8. Mergea en **feature/experiment** todos los cambios que has hecho en tus dos ramas.
9. Borra las dos ramas anteriores.
10. Crea una nueva rama llamada **feature/chinese-names** a partir del commit de la versión 0.1.1.
11. Aplícale la corrección que hiciste en el punto 5 a esta rama (no hay que corregir el nombre a mano, sino aplicar el cambio mediante algún comando de git).
12. Mergea esa nueva rama en **feature/experiment**.
