import { combineReducers } from "redux";
import propertyReducer from "./propertiesReducer"

export default combineReducers({
    propiedades: propertyReducer
}) 