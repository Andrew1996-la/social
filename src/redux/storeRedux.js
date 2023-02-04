import dialogReducer from './dialogReducer'
import profileReducer from './profileReducer'
import navigationReducer from './navigationReducer'
import { combineReducers, legacy_createStore as createStore } from 'redux'

const rootReducer = combineReducers({
    messagePage: dialogReducer,
    profilePage: profileReducer,
    navigationSection: navigationReducer,
})

const store = createStore(rootReducer)

export default store
