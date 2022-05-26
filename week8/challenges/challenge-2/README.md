# Ejercicio Robots Factory TS

Crea una fábrica de robots usando TS.

Los robots que salen de la fábrica deben llevar los siguientes datos:

- Nombre creado aleatoriamente. El nombre debe tener tres letras en mayúsculas y dos dígitos.
- Tipo: Cleaner, Waiter o Developer
- Batería restante: 100%

Además, cada robot debe poder resetearse. Cuando se resetea, se le genera otra vez un nombre aleatorio y sus valores vuelven a los valores iniciales.

Cuando un robot ha sido creado, su batería empieza a reducirse a razón de 1 punto por segundo. Cuando le quede un 10%, debe imprimir por consola un mensaje avisándolo. Cuando se agote del todo debe imprimir otro mensaje avisándolo. Un robot con la batería agotada no puede ejecutar su trabajo.

Cada robot tendrá un método llamado `work`, y dependiendo de su tipo hará una cosa u otra:

- El robot Cleaner imprimirá por consola "Larala larita, I clean my little house"
- El robot Waiter imprimirá por consola "Do you feel like a mini of fuet?"
- El robot Developer imprimirá por consola "JavaScript is cool - I develop with JavaScript -> I'm cool"

Asegúrate de que no se crean dos robots con el mismo nombre.

Tu código debe tener una función `createRobot` que devuelva un robot recién creado. A dicha función se le pasará un tipo de robot.
