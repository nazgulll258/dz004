import {combineReducers, createStore}  from'redux'
import counterReducer from './counterReducer.jsx'
import usersReducer from "./usersReducer.js";

const rootReducer = combineReducers({
    counter:counterReducer,
    users:usersReducer

})

const store = createStore(rootReducer)
export default store