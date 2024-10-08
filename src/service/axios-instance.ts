import axios from 'axios';
import { BASE_URL } from '../common/base-url';

const axiosInstance = axios.create({
  baseURL: BASE_URL, // Your API base URL
  timeout: 5000, // Adjust the timeout as needed
});

export default axiosInstance;