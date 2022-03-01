import axios from 'axios';
import _ from 'lodash';

import { Categories } from '../../models/Categories';
import { Category } from '../../models/Category';

const baseApiUrl = 'https://www.themealdb.com/api/json/v1/1';

const service = {
  getCategories(): Promise<Categories> {
    return axios.get(`${baseApiUrl}/categories.php`).then((response) => response.data);
  },

  sortCategories(categories: Category[]): Category[] {
    return _.sortBy(categories, [(category) => category.strCategory]);
  },

  sortHeaders(categories: Category[], key: string[], index: number): Category[] {
    return _.sortBy(categories, [key[index + 1]]);
  },
};

export default service;
