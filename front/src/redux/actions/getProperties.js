import { FETCH_PROPERTIES, FETCH_SINGLE_PROPERTY, SEARCH_FILTERED_PROPERTIES } from "../utils/constants"
import axios from "axios";

//Brings all the properties 
export const fetchProperties = (propiedades) => ({
    type: FETCH_PROPERTIES,
    propiedades
})

//Brings a single property
export const fetchSingleProperty = (propiedad) => ({
    type: FETCH_SINGLE_PROPERTY,
    propiedad
})

//Brings the filtered property(ies)
export const searchproperties = (filtered) => ({
    type: SEARCH_FILTERED_PROPERTIES,
    filtered
})

export const fetchProducts = () => 
    (dispatch) => {
        axios.get(`/api/propiedades/all`)
        .then(propiedades => {
            dispatch(fetchProperties(propiedades.data))
            })  
    }

export const singlePropertyCreator = (id) => 
    (dispatch) => {
        axios.get(`/api/propiedades/${id}`)
        .then((res) => {
            dispatch(fetchSingleProperty(res.data))

        })
    }

export const fetchFilteredProperties = (filter) => 
    (dispatch) => {
        axios.get(`/api/search/${filter}`)
        .then((res) => {
            dispatch(searchproperties(res.data))
        })
        .catch(err => { throw new Error(err) })
    }