import { makeAutoObservable } from 'mobx';

import service from './catalogListStore.service';
import { Category } from '../../models/Category';

class CatalogListStore {
  categories: Category[] | undefined;

  isVisible = true;

  isFetching = false;

  fetchError = false;

  searchQuery: string | undefined;

  isFiltered = false;

  countVisibleItems = 3;

  isMaxCountVisibleItems = false;

  constructor() {
    makeAutoObservable(this);
  }

  async fetch() {
    try {
      this.isFetching = true;
      const response = await service.getCategories();
      this.categories = response.categories;
      this.isFetching = false;
    } catch (e) {
      this.fetchError = true;
    }
  }

  sortCategories() {
    if (this.categories) {
      this.categories = service.sortCategories(this.categories);
    }
  }

  setVisibility(boolean: boolean) {
    this.isVisible = boolean;
  }

  addCountVisibleItems() {
    this.countVisibleItems += 3;
    this.isMaxCountVisibleItems = (this.categories?.length || 0) < this.countVisibleItems;
  }
}

export default new CatalogListStore();
