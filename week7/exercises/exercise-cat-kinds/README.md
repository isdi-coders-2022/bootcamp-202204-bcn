# Ejercicio API tipos de gatos

En este ejercicio crearás una API para leer, crear, modificar y borrar de una base de tipos de gatos.

1. Crea una base de datos mongo con una colección llamada `kinds`.
2. Vuelca en la colección el JSON que viene con el ejercicio.
3. Crea una API REST con Node y Express.
4. Haz que la API se conecte a tu base de datos Mongo.
5. Crea cinco controllers que _hablen_ con la base de datos:

- `listKinds`
- `getKind`
- `createKind`
- `updateKind`
- `deleteKind`

4. Crea los siguientes endpoints, que llamarán a los métodos anteriores.

(GET) /kinds/list
(GET) /kinds/kind/:id
(POST) /kinds/new-kind
(PUT) /kinds/kind/:id
(DELETE) /kinds/kind/:id
