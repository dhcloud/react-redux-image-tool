import { CLOSE_MODAL, OPEN_MODAL, TOGGLE_MODAL } from '../constants'

/**
 * modal actions are presently used within the search reducer
 */
export const closeModal = () => {
  return {
    type: CLOSE_MODAL,
    payload: null
  }
}

export const openModal = () => {
  return {
    type: OPEN_MODAL,
    payload: null
  }
}

export const toggleModal = () => {
  return {
    type: TOGGLE_MODAL,
    payload: null
  }
}