import { makeAutoObservable } from 'mobx';

import service from './catalogListStore.service';
import { Category } from '../../models/Category';

class CatalogListStore {
  categories: Category[] | undefined;

  constructor() {
    makeAutoObservable(this);
  }

  async fetch() {
    const response = await service.getCategories();
    this.categories = response.categories;
  }

  sortCategories() {
    if (this.categories) {
      this.categories = service.sortCategories(this.categories);
    }
  }
}

export default new CatalogListStore();
