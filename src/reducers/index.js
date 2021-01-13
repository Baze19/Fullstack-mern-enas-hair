import {combineReducers} from 'redux'
import itemReducers from './itemReucers'

export default combineReducers({
    item:itemReducers
    })