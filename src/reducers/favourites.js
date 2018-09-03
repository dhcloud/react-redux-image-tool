import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../constants/';

export default (state = {}, { type, item }) => {
  switch (type) {
    case ADD_FAVOURITE:
      const imageObjById = { [item.id]: item }
      return { ...state, ...imageObjById }
    case REMOVE_FAVOURITE:
      return { ...state.filter(value => value !== item.id) }
    default:
      return state;
  }
};
