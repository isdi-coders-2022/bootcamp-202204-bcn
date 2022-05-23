# Hackathon GamersLand

## Proyecto a desarrollar

Por grupos, tendréis que desarrollar una app fullstack que permita a un usuario registrarse, y posteriormente iniciar sesión, en una app para gamers. Gestionad las tareas con un tablero Trello, empezando por preparar el backlog.

Requisitos front:

- React
- Redux
- PropTypes
- Styled Components
- 90% testing
- Tests unitarios, de componente, de integración y de snapshot

Requisitos back:

- Express
- MongoDB
- Validación de requests con Joi
- Auth con JWT
- 90% testing
- Tests unitarios y de endpoint

Requisitos ambos lados:

- Hooks de husky
- Workflows para audit y testing
- Rama master protegida con PR (2 approvals) y con ambos workflows

## Front

La app tendrá tres rutas:

/games -> listado de juegos, protegido por login (esta página sólo tendrá un título)

/login -> formulario de login

/register -> formulario de registro

Crea también una página para el 404 y haz que la ruta / redirija a /games

## Back

La app tendrá dos endpoints:

POST /user/register -> recibe en el body las credenciales `name`, `username` y `password`

POST /user/login -> recibe en el body las credenciales `username` y `password`
