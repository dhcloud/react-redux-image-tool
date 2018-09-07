import { combineReducers } from 'redux'
import search from './search'
import favourites from './favourites'

export default combineReducers({
  search,
  favourites,
});
