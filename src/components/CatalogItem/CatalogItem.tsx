import React from 'react';

import styles from './CatalogItem.module.scss';

type CatalogProps = {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

const CatalogItem: React.FC<CatalogProps> = (props) => (
  <div className={styles.component}>
    <h3>{props.strCategory}</h3>
    <img src={props.strCategoryThumb} alt="" />
    <p>{props.strCategoryDescription}</p>
  </div>
);

export default CatalogItem;
