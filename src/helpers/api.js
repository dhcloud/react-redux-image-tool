import axios from 'axios';
import config from './config';

const axiosInstance = () => (
  axios.create({
    baseURL: config.api.host,
    headers: {
      'authorization': localStorage.getItem('token')
    }
    // timeout: 10000,
  })
)

export const get = async (url = '/', params) => {
  try {
    url += queryConstructor(params)
    const response = await axiosInstance().get(url)
    return response.data
  } catch (error) {
    errorHandler(error)
  }
}
