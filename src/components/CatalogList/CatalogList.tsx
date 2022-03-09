import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import _ from 'lodash';

import styles from './CatalogList.module.scss';
import catalogListStore from '../../stores/catalogListStore';
import SearchLine from '../SearchLine';
import { Category } from '../../models/Category';
import Error from '../Error';
import Loading from '../Loading';
import ViewModelsPanel from '../ViewModelsPanel';

type CatalogTypes = {
  store: typeof catalogListStore;
};

const CatalogList: React.FC<CatalogTypes> = observer((props) => {
  const { store } = props;
  const [items, setItems] = useState<Category[]>();
  const [search, setSearch] = useState('');
  const [currentViewModel, setCurrentViewModel] = useState<JSX.Element>();
  const isFiltered = search.length > 3;

  useEffect(() => {
    catalogListStore.fetch().then(() => {
      catalogListStore.sortCategories();
      setItems(_.chunk(catalogListStore.categories, catalogListStore.countVisibleItems)[0]);
    });
  }, []);

  useEffect(() => {
    if (isFiltered) {
      setItems(store.categories?.filter((elem) => elem.strCategory.startsWith(search)));
      store.isFiltered = true;
    } else if (!store.isSorted) {
      setItems(_.chunk(store.categories, store.countVisibleItems)[0]);
      store.isFiltered = false;
    }
  }, [search, isFiltered, store.countVisibleItems, store, store.categories]);

  return (
    <div className={store.isVisible ? styles.component : styles.hidden}>
      {store.fetchError ? <Error /> : null}
      {store.isFetching && !store.fetchError ? <Loading /> : null}
      <div className={store.isFetching || store.fetchError ? styles.hidden : styles.body}>
        <SearchLine store={store} setSearch={setSearch} />
        <ViewModelsPanel
          items={items}
          headers={['Название', 'Картинка', 'Описание']}
          setCurrentViewModel={setCurrentViewModel}
        />
        {currentViewModel}
        {!isFiltered && !store.isMaxCountVisibleItems
          ? (
            <div>
              <button type="button" className={styles.showMore} onClick={() => store.addCountVisibleItems()}>Показать ещё</button>
            </div>
          ) : null}
      </div>
    </div>
  );
});

export default CatalogList;
