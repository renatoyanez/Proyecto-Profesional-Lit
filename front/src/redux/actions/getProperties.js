import { FETCH_PROPERTIES, FETCH_SINGLE_PROPERTY, FETCH_CATEGORIES } from "../utils/constants";
import axios from "axios";

export const fetchProperties = propiedades => ({
  type: FETCH_PROPERTIES,
  propiedades
});

export const fetchSingleProperty = propiedad => ({
  type: FETCH_SINGLE_PROPERTY,
  propiedad
});

export const searchproperties = propiedades => ({
  type: FETCH_PROPERTIES,
  propiedades
});

//Fetches all properties
export const fetchProducts = () => dispatch => {
  axios.get(`/api/propiedades/all`).then(propiedades => {
    dispatch(fetchProperties(propiedades.data));
  });
};

//Finds one single property
export const singlePropertyCreator = id => dispatch => {
  return axios.get(`/api/propiedades/${id}`).then(res => {
    dispatch(fetchSingleProperty(res.data));
  });
};

//Searches property by name/location/description/price(by range)
export const fetchFilteredProperties = (searched, filters) => dispatch => {
  console.log("SEARCHED: ", searched, "FILTERS:  ", filters);
  const categorium = filters.categories.join("_")
  return axios
    .get(`/api/propiedades/search/${searched}?filterByPrice=${filters.filterByPrice}&menor=${filters.menor}&mayor=${filters.mayor}&categories=${categorium}&categoriesBoolean=${filters.categoriesBoolean}`
    )
    .then(properties => {
      dispatch(searchproperties(properties.data));
    })
    .catch(() => console.log("No encontro respuesta"));
};


//Creates a property
export const createProperty = (nombre, descripcion, precio, ubicacion, imagen, disponible, categorias) => dispatch => {
  return axios
    .post("/api/propiedades/create", {
      nombre, descripcion, precio, ubicacion, imagen, disponible, categorias
    })
    .then(res => {
      dispatch(fetchSingleProperty(res));
    });
};

//Removes property
export const deleteProperty = id => () => {
  return axios.delete(`/api/propiedades/delete/${id}`).then(() => {
    console.log("Property deleted succesfully!");
  });
};
