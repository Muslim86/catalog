import React, { useState } from 'react';

import styles from './CatalogItem.module.scss';

type CatalogProps = {
  strCategory: string;
  strCategoryThumb: string;
  strCategoryDescription: string;
};

const CatalogItem: React.FC<CatalogProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const onClickHandler = () => {
    setIsOpen(!isOpen);
  };
  return (
    // eslint-disable-next-line
    <div className={styles.component} onClick={onClickHandler} onKeyDown={onClickHandler}>
      <h3>{props.strCategory}</h3>
      {isOpen && <img src={props.strCategoryThumb} alt="" />}
      <p>{isOpen ? props.strCategoryDescription : `${props.strCategoryDescription?.slice(0, 65)}...`}</p>
    </div>
  );
};

export default CatalogItem;
