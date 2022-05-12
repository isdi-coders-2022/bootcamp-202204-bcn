# Ejercicio calculadora

Crea una calculadora en Node.

### Fase 1

El programa debe recibir dos números por consola (por ejemplo, `node index -a 6 -b 3`), e imprimir lo siguiente:

Resultados:

6 + 3 = 9

6 - 3 = 3

6 \* 3 = 18

6 / 3 = 2

Si el usuario no ha proporcionado alguno de los números o éstos no son de tipo número, la aplicación debe mostrar un mensaje de error e interrumpir la ejecución del programa con un código de error (pista: `process.exit`).

Utiliza colores para la salida por consola.

### Fase 2

Si el usuario no ha pasado los dos valores por consola, el programa se los pedirá mediante `prompt`.
