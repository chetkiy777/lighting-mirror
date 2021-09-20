import {combineReducers, createStore} from 'redux'
import mainReducer from "./mainReducer";


const rootReducer = combineReducers({
    mainReducer
})

const store = createStore(rootReducer)

export default store