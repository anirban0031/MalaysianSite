import axios from 'axios'
import { searchURL} from '~/config'

export default {
  auth: {
    me: () => axios.get('me'),
    login: (data) => axios.post('login', data),
    register: (data) => axios.post('register', data)
  },
  shop: {
    get_categories: () => axios.get('shop_data/1/categories'),
    search: (data) => axios.get(searchURL + 'search?qstr='+ data + '&offset=0&limit=12'),
  }
}
