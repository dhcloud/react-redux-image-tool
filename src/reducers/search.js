import { GET_IMAGE_DATA_FROM_API, IMAGE_DATA_LOADED } from '../constants/';

const initialState = { hits: [], totalHits: 0 };

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_IMAGE_DATA_FROM_API:
      return { ...state };
    case IMAGE_DATA_LOADED:
      const totalHits = action.payload.data.totalHits > 500 ? 500 : state.search.totalHits
      return { ...action.payload.data, totalHits };
    default:
      return state;
  }
};
