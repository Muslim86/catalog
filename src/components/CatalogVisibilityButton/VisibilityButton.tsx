import React from 'react';
import { observer } from 'mobx-react-lite';

import catalogListStore from '../../stores/catalogListStore';
import styles from './CatalogVisibilityButton.module.scss';

type VisibilityProps = {
  store: typeof catalogListStore;
};

const VisibilityButton: React.FC<VisibilityProps> = observer((props) => {
  const visible = props.store.isVisible;

  const clickHandler = () => {
    props.store.setVisibility(!visible);
  };

  return (
    <button type="button" onClick={() => clickHandler()} className={styles.component}>
      {
        visible ? 'Скрыть' : 'Показать'
      }
    </button>
  );
});

export default VisibilityButton;
