import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../constants/';

const initialState = JSON.parse(localStorage.getItem('favourites')) || {}
console.log('REDUCER: initialState', initialState)

export default (state = initialState, { type, item }) => {
  let imageObjById;
  switch (type) {
    case ADD_FAVOURITE:
      imageObjById = { [item.id]: item }
      return { ...state, ...imageObjById }
    case REMOVE_FAVOURITE:
      const { [String(item.id)]: unusedVar, ...newState } = state
      return { ...newState }
    default:
      return state;
  }
};
