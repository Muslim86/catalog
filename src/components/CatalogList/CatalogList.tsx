import React, { useEffect, useState } from 'react';

import styles from './CatalogList.module.scss';
import catalogListStore from '../../stores/catalogListStore';
import CatalogItem from '../CatalogItem';

const CatalogList: React.FC = () => {
  const [items, setItems] = useState<Array<JSX.Element>>();

  useEffect(() => {
    catalogListStore.fetch().then(() => {
      catalogListStore.sortCategories();
      setItems(
        catalogListStore.categories?.map((elem) => (
          <CatalogItem
            key={elem.idCategory}
            strCategory={elem.strCategory}
            strCategoryThumb={elem.strCategoryThumb}
            strCategoryDescription={elem.strCategoryDescription}
          />
        )),
      );
    });
  }, []);

  return (
    <div className={styles.component}>
      { items }
    </div>
  );
};

export default CatalogList;
