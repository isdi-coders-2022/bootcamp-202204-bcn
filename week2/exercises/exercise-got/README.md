# Ejercicio clases GOT

1. Tendrás que crear en JS una estructura de clases que refleje el siguiente modelo de datos:

- En Juego de Tronos existen `personajes`. Todos esos personajes tienen la siguiente información:
  · Nombre
  · Familia a la que pertenece
  · Edad
  · Estado (vivo o muerto, aunque inicialmente todos están vivos)

- Todos los personajes pueden realizar la acción de comunicar, pero cada tipo de personaje (no cada personaje) se comunica de un modo distinto.
  Nota: este método devuelve el string con la frase, no imprime por consola.

- Todos los personajes pueden realizar la acción de morir, cambiándose su estado a muerto.

- Todos los personajes pertenecen a la misma serie, "Juego de Tronos".

- Cada uno de esos personajes puede ser un `rey`, un `luchador`, un `asesor`, o un `escudero`.

- Un rey, además de la información que tiene por ser personaje, tiene la siguiente información:
  · Años de reinado
  · Cuando se comunica dice: "Vais a morir todos"

- Un luchador, además de la información que tiene por ser personaje, tiene la siguiente información:
  · Arma que usa
  · Destreza (un valor entre 0 y 10)
  · Cuando se comunica dice: "Primero pego y luego pregunto"

- Un asesor, además de la información que tiene por ser personaje, tiene la siguiente información:
  · Personaje al que asesora (que puede ser rey, luchador, asesor o escudero)
  · Cuando se comunica dice: "No sé por qué, pero creo que voy a morir pronto"

- Un escudero, además de la información que tiene por ser personaje, tiene la siguiente información:
  · Personaje al que sirve (que sólo puede ser luchador)
  · Grado de pelotismo (un valor entre 0 y 10)
  · Cuando se comunica dice: "Soy un loser"

2. Una vez hecha toda la estructura, crea a Joffrey Baratheon (rey), Jaime Lannister (luchador), a Daenerys Targaryen (luchadora), a Tyrion Lannister (asesor de Daenerys) y a Bronn (escudero de Jaime).
3. Crea un array con todos los personajes.
4. Haz una función que tenga como entrada dicho array y devuelva un array con los mensajes que comunican los luchadores.
5. Imprime por consola el nombre de la serie a la que pertenecen los personajes.
6. Recorre el array de mensajes e imprímelos por consola.
7. Mata a Jaime y a Tyrion.
8. Saca un resumen por consola con los personajes agrupados por tipo, y dentro de cada tipo, que los personajes vayan ordenados por edad, de menor a mayor.

```
[
    {
        tipo: "Rey",
        personajes: [
            {
                nombre: "Joffrey Baratheon",
                estado: "vivo",
                edad: 20
            }
        ]
    },
    {
        tipo: "Luchador",
        personajes: [
                        {
                nombre: "Daenerys Targaryen",
                estado: "vivo",
                edad: 30
            },
            {
                nombre: "Jaime Lannister",
                estado: "muerto",
                edad: 40
            }
        ]
    },
    (...etc)
]
```
