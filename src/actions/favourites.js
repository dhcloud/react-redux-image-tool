import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../constants/'

export const addFavourite = (item = null) => {
  return {
    type: ADD_FAVOURITE,
    item
  }
}

export const removeFavourite = (item = null) => {
  return {
    type: REMOVE_FAVOURITE,
    item
  }
}
