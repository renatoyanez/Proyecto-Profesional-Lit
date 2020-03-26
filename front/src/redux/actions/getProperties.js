import { FETCH_PROPERTIES, FETCH_SINGLE_PROPERTY } from "../utils/constants"
import axios from "axios";


export const fetchProperties = (propiedades) => ({
    type: FETCH_PROPERTIES,
    propiedades
})

export const fetchSingleProperty = (propiedad) => ({
    type: FETCH_SINGLE_PROPERTY,
    propiedad
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