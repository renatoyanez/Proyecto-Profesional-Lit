# Instrucciones:

## Inicio

Para levantar el repositorio instalar las dependencias

```
npm install
```
y además crear una base de datos sql con el nombre "propiedades"
```
createdb propiedades
```

## Backend

La API ya está hecha y permite crear, modificar, borrar y listar todas las propiedades (inmuebles, no propiedades de un objeto xD).

Las propiedades van a contar con:
- **name**: direccion de la propiedad (ej: Castillo 1332)
- **price**: precio del inmueble
- **location**: barrio del inmueble
- **img**: url de la imagen (solo 1)

## Objetivo

La idea es diseñar el front-end con react. Se debe poder hacer un CRUD completo de propiedades. Además, se tienen que poder visualizar todas las propiedades, y ordenarlas por precio/nombre y filtrarlas por ubicación.

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


