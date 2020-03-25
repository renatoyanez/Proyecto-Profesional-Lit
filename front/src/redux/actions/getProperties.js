import { FETCH_PROPERTIES } from "../utils/constants"
import axios from "axios";


export const fetchProperties = (propiedades) => ({
    type: FETCH_PROPERTIES,
    propiedades
})

export const fetchProducts = () => 
    (dispatch) => {
        axios.get(`/api/propiedades/all`)
        .then(propiedades => {
            dispatch(fetchProperties(propiedades.data))
            console.log(propiedades, 'propiedadeeees');
            
            })  
    }
