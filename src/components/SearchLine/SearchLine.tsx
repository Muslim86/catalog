import React from 'react';
import { observer } from 'mobx-react-lite';

import catalogListStore from '../../stores/catalogListStore';
import styles from './SearchLine.module.scss';

type SearchLineProps = {
  store: typeof catalogListStore;
  setSearch: (str: string) => void;
};

const SearchLine: React.FC<SearchLineProps> = observer((props) => {
  const changeHandle = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    props.setSearch(e.target.value);
  };

  return (
    <div className={styles.component}>
      <textarea onChange={changeHandle} rows={1} placeholder="Фильтрация">
        {props?.store?.searchQuery}
      </textarea>
    </div>
  );
});

export default SearchLine;
