# Week 7 - Challenge 1

## Series API

Construye una API REST que permita gestionar un listado de series vistas. La API tiene que manejar las siguientes entidades:

- Usuarios
- Plataformas
- Series

Cada usuario tendrá (además de lo que creas conveniente), un campo indicando si es administrador o no y un campo que almacenará las series que ha visto.

Cada serie pertenece a una plataforma.

Endpoints (todos están protegidos por JWT menos los que se indiquen como abiertos):

[POST] /users/login: endpoint abierto, para iniciar sesión

[POST] /users/register: endpoint abierto, para crear un usuario

[GET] /platforms: lista todas las plataformas de la base de datos

[POST] /platforms: para crear una nueva plataforma (sólo administrador)

[PUT] /platforms/:idPlatform : para actualizar una plataforma (sólo administrador)

[DELETE] /platforms/:idPlatform : para borrar una plataforma (sólo administrador)

[GET] /series: lista todas las series del usuario, vistas o no

[GET] /series/viewed: lista todas las series del usuario ya vistas

[GET] /series/pending: lista todas las series del usuario no vistas

[POST] /series: para crear una nueva serie (sólo administrador)

[PUT] /series/:idSerie : para actualizar una serie (sólo administrador)

[DELETE] /series/:idSerie : para borrar una serie (sólo administrador)

[PATCH] /series/view/:idSerie : para marcar una serie como vista por el usuario

- Valida todas las requests necesarias con Joi
- Haz tests unitarios de todos los middlewares
- Haz tests de integración de todos los endpoints
