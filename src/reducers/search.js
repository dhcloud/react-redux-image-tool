import { GET_IMAGE_DATA_FROM_API, IMAGE_DATA_LOADED, CLOSE_MODAL } from '../constants/';

const initialState = { hits: [], totalHits: null, isModelToOpen: false };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_DATA_FROM_API:
      return { ...state };
    case IMAGE_DATA_LOADED:
      // following ternary has performs two actions
      // the response totalHits should not be over 500, however, if it is, limit totalHits to 500
      // if no results are returned for the search term ie totalHits is 0 then totalHits is set to 0
      // if the application has its initial load state then totalHits should be null, this prevents the modal from being opened
      const totalHits = action.payload.data.totalHits > 500 ? 500 : action.payload.data.totalHits === null ? null : 0
      const isModelToOpen = totalHits === 0 ? true : false
      return { ...state, ...action.payload.data, totalHits, isModelToOpen };
    case CLOSE_MODAL:
      return { ...state, ...{ isModelToOpen: false } }
    default:
      return state;
  }
};
