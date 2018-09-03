import { ADD_FAVOURITE, REMOVE_FAVOURITE } from '../constants/'

export const addFavourite = (item = null) => {
  console.log('addFavourite', ADD_FAVOURITE)
  return {
    type: ADD_FAVOURITE,
    item
  }
}

export const removeFavourite = (item = null) => {
  console.log('removeFavourite', REMOVE_FAVOURITE)
  return {
    type: REMOVE_FAVOURITE,
    item
  }
}
