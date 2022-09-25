import axios from 'axios';
import {
  API_BASE_URL,
  API_KEY,
  IMAGE_TYPE,
  ORIENTATION,
  PER_PAGE,
} from 'constants/constants';

axios.defaults.baseURL = API_BASE_URL;

export const fetchImages = async (queryValue, currentPage) => {
  const urlParams = {
    q: queryValue,
    page: currentPage,
    key: API_KEY,
    image_type: IMAGE_TYPE,
    orientation: ORIENTATION,
    per_page: PER_PAGE,
  };

  const fetchData = await axios
    .get('/api', { params: urlParams })
    .catch(() => 'error');

  if (fetchData === 'error') return fetchData;

  return fetchData.data;
};
