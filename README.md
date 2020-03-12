# Instrucciones:
## Objetivo
La idea es diseñar el back-end y front-end de punta a punta. Se debe poder hacer un CRUD completo de propiedades(inmuebles). 
Además, se tienen que poder visualizar todas las propiedades, y ordenarlas por precio/nombre y filtrarlas por ubicación.

## Inicio
Para este trabajo no hay repo, vas a tener que codear todo desde 0. Esa es la idea, entender todo lo que vas haciendo, no quiere decir que de memoria te tengas que acordar, pero si que cada línea la escribas y entiendas lo que estás haciendo. La estructura del proyecto queda a tu criterio, recomendamos separar el front y el back en dos carpetas distintas y ahí comprender cada área.
Generalmente es más conveniente arrancar desde el backend hacia el front end. Arrancando por las bases de datos y esquemas de base de datos, entiendo las relaciones, plasmar eso en express y sequelize y finalmente arrancar con el front.

Primeramente vamos a crear una base de datos sql con el nombre "propiedades"
```
createdb propiedades
```
## Backend
Desarrollar una API que permita: crear, modificar, borrar y listar todas las propiedades (inmuebles, no propiedades de un objeto xD).

Las propiedades van a contar con:
- **nombre**: direccion de la propiedad (ej: Castillo 1332)
- **descripcion**: descripción de la propiedad
- **precio**: precio del inmueble
- **ubicacion**: barrio del inmueble
- **imagen**: url de la imagen (solo 1)
- **disponible**: booleano, por default: true

Tambien tiene que tener un getter truncarDescripcion que devuelva la descripción truncada a solo 20 caracteres y termine con '…'
Agregar un hook antes de ser creado que se fije en la propiedad 'disponible' en caso de ser false, agregar en el titulo del producto un "NO DISPONIBLE", por ejemplo, si el producto 

Agregar un hook antes de ser creado que se fije en la propiedad 'disponible' en caso de ser false, agregar en el titulo de la propiedad un "NO DISPONIBLE", por ejemplo, si la propiedad "CASA QUINTA 7" no esta disponible quedaría: "CASA QUINTA 7 NO DISPONIBLE"
Optativo: por un setter en "disponibilidad" de forma tal que cada vez que cambia la disponibilidad del producto, el titulo cambie dinámicamente, poniendo y sacando el "NO DISPONIBLE", ya que con el hook solo se haría en la creación!!

Las propiedades pueden tener varias categorías.
Modelo Categoria {
	nombre: string
}

- Desarrollar el registro y logueo de un usuario
- Que podamos agregar una propiedad a favoritos de un usuario

### Visualizacion
Queremos una lista simple de propiedades con un sidebar a la izquierda para los filtros.

### Interaccion con las propiedades
Al hacer click en un item aparesca un modal con sus datos cargados como input, el modal tiene que tener dos botones, unos para guardar ediciones a la información, otro para borrar el inmueble.
Si queremos agregar una propiedad deberia haber un boton de agregar que abra el mismo modal de edicion pero con los campos vacios.

### Filtros
Vamos a generar un filtro por barrios (propiedad "location"), y un metodo de ordenamiento por precio.

Los barrios van a ser una lista y si haces click en uno deberia limitar la lista a los que tengan esa location.
El ordenamiento por precio solo los va a mostrar por menor/mayor segun corresponda.

## Metodo de trabajo
El trabajo es libre siempre y cuando cumpla las indicaciónes. forkeen este repositorio y pusheen una vez tengan el resultado.
Recuerden no trabajar el problema como un todo si no ir avanzando de a poco.

Mucha suerte y no olviden consultarnos cualquier duda.

------------

