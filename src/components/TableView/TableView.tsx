import React from 'react';
import { observer } from 'mobx-react-lite';

import styles from './TableView.module.scss';
import { Category } from '../../models/Category';
import catalogListStore from '../../stores/catalogListStore';

type TableViewProps = {
  headers: string[];
  items: Category[];
};

const TableView: React.FC<TableViewProps> = (props) => {
  const { items, headers } = props;

  const onClickHandler = (index: number) => {
    catalogListStore.isSorted = !catalogListStore.isSorted;
    const keys = Object.keys(items[0]);
    catalogListStore.sortHeaders(keys, index);
  };

  return (
    <table className={styles.component}>
      <thead>
        <tr>
          {headers
          && headers.map((elem, index) => <th key={elem} onClick={() => onClickHandler(index)}>{elem}</th>)}
        </tr>
      </thead>
      <tbody>
        {items && items.map((elem) => (
          <tr key={elem.idCategory}>
            <td>{elem.strCategory}</td>
            <td><img src={elem.strCategoryThumb} alt="" /></td>
            <td>{elem.strCategoryDescription}</td>
          </tr>
        ))}
      </tbody>

    </table>
  );
};

export default observer(TableView);
