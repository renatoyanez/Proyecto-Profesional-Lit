import {
  FETCH_PROPERTIES,
  FETCH_SINGLE_PROPERTY
} from "../utils/constants";
import axios from "axios";
import store from "../store/store";

//Brings all the properties
export const fetchProperties = propiedades => ({
  type: FETCH_PROPERTIES,
  propiedades
});

//Brings a single property
export const fetchSingleProperty = propiedad => ({
  type: FETCH_SINGLE_PROPERTY,
  propiedad
});

//Brings the filtered property(ies)
export const searchproperties = propiedades => ({
  type: FETCH_PROPERTIES,
  propiedades
});

export const fetchProducts = () => dispatch => {
  axios.get(`/api/propiedades/all`).then(propiedades => {
    dispatch(fetchProperties(propiedades.data));
  });
};

export const singlePropertyCreator = id => dispatch => {
  axios.get(`/api/propiedades/${id}`).then(res => {
    dispatch(fetchSingleProperty(res.data));
  });
};

export const fetchFilteredProperties = filter => dispatch => {
  return axios.get(`/api/propiedades/search/${filter}`)
  .then(properties => {

    dispatch(searchproperties(properties.data));
  });
};
