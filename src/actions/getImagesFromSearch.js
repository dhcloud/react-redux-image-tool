import axios from 'axios'
import { GET_IMAGE_DATA_FROM_API, IMAGE_DATA_LOADED, MAX_IMAGES_PER_PAGE } from '../constants'

const defaultPixabayProps = {
  q: 'devon coast',
  lang: 'en',
  image_type: 'photo',
  orientation: 'horizontal',
  per_page: MAX_IMAGES_PER_PAGE,
  page: 1,
  type: 'default'
}

export const getImagesFromSearch = (searchTerm, pageToRequest = 1) => {
  return async dispatch => {
    dispatch({
      type: GET_IMAGE_DATA_FROM_API
    })
    try {
      const value = await axios.get('http://localhost:8080/getData',
        {
          params: {
            ...defaultPixabayProps,
            q: searchTerm,
            page: pageToRequest
          }
        });
      dispatch({
        type: IMAGE_DATA_LOADED,
        payload: value
      })
    }
    catch (error) {
      throw error
    }
  }
}
