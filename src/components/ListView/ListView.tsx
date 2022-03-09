import React from 'react';

import styles from './ListView.module.scss';
import { Category } from '../../models/Category';
import CatalogItem from '../CatalogItem';

type ListViewProps = {
  items: Category[];
};

const ListView: React.FC<ListViewProps> = (props) => {
  const { items } = props;
  return (
    <div className={styles.component}>
      <ul>
        {items && items.map((elem) => (
          <li key={elem.idCategory}>
            <CatalogItem
              strCategory={elem.strCategory}
              strCategoryThumb={elem.strCategoryThumb}
              strCategoryDescription={elem.strCategoryDescription}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListView;
