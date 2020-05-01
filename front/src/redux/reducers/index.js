import { combineReducers } from "redux";
import propertiesReducer from "./propertiesReducer";
import userReducers from './userReducer'
import categoriesReducers from './categoriesReducer'
import favouritesReducers from './favouritesReducer'


export default combineReducers({
    propiedades: propertiesReducer,
    user: userReducers,
    categories: categoriesReducers,
    favorites: favouritesReducers
}) 