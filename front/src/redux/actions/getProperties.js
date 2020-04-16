import { FETCH_PROPERTIES, FETCH_SINGLE_PROPERTY } from "../utils/constants";
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

//Searches property
export const fetchFilteredProperties = (filter, precio) => dispatch => {
  console.log("FILTER: ", filter, "PRECIO:  ", precio);

  return axios
    .get(
      `/api/propiedades/search/${filter}?filterByPrice=${precio.filterByPrice}&menor=${precio.menor}&mayor=${precio.mayor}`
    )
    .then(properties => {
      dispatch(searchproperties(properties.data));
    })
    .catch(() => console.log("No encontro respuesta"));
};

//Searches by price range:
// export const fetchPriceProperties = (lowest, highest) => dispatch => {
//   return axios.get(`/api/propiedades/search/precio/${lowest}/${highest}`).then(properties => {
//     console.log("PROPIEDADES FILTRADAS DEL BACK: ", properties.data)
//     dispatch(searchproperties(properties.data));
//   })
// }

//Creates a property
export const createProperty = (
  nombre,
  descripcion,
  precio,
  ubicacion,
  imagen,
  disponible
) => dispatch => {
  return axios
    .post("/api/propiedades/create", {
      nombre,
      descripcion,
      precio,
      ubicacion,
      imagen,
      disponible
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
