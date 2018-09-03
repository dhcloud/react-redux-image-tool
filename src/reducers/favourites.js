import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../constants/';

export default (state = [], { type, item }) => {
  switch (type) {
    case ADD_FAVOURITE:
      return [ ...state, item ]
    case REMOVE_FAVOURITE:
      return [ ...state.filter(value => value.id !== item.id) ]
    default:
      return state;
  }
};
