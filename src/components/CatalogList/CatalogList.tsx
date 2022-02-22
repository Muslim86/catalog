import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import _ from 'lodash';

import styles from './CatalogList.module.scss';
import catalogListStore from '../../stores/catalogListStore';
import CatalogItem from '../CatalogItem';
import SearchLine from '../SearchLine';
import { Category } from '../../models/Category';
import Error from '../Error';
import Loading from '../Loading';

type CatalogTypes = {
  store: typeof catalogListStore;
};

const CatalogList: React.FC<CatalogTypes> = observer((props) => {
  const { store } = props;
  const [items, setItems] = useState<Array<Category>>();
  const [search, setSearch] = useState('');
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
    } else {
      setItems(_.chunk(store.categories, store.countVisibleItems)[0]);
      store.isFiltered = false;
    }
  }, [search, isFiltered, store.countVisibleItems, store]);

  return (
    <div className={store.isVisible ? styles.component : styles.hidden}>
      {store.fetchError ? <Error /> : null }
      {store.isFetching && !store.fetchError ? <Loading /> : null}
      <div className={store.isFetching || store.fetchError ? styles.hidden : styles.body}>
        <SearchLine store={store} setSearch={setSearch} />
        {items?.map((elem) => (
          <CatalogItem
            key={elem.idCategory}
            strCategory={elem.strCategory}
            strCategoryThumb={elem.strCategoryThumb}
            strCategoryDescription={elem.strCategoryDescription}
          />
        ))}
        {!isFiltered && !store.isMaxCountVisibleItems
          ? <button type="button" onClick={() => store.addCountVisibleItems()}>Показать ещё</button> : null}
      </div>
    </div>
  );
});

export default CatalogList;
