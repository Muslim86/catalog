import React, { useEffect, useMemo, useState } from 'react';

import styles from './ViewModelsPanel.module.scss';
import { ViewModel } from '../../models/ViewModel';
import { Category } from '../../models/Category';
import TableView from '../TableView';
import ListView from '../ListView';

type ViewModelsPanelProps = {
  items: Category[] | undefined;
  headers: string[];
  setCurrentViewModel: React.Dispatch<React.SetStateAction<JSX.Element | undefined>>;
};

const ViewModelsPanel: React.FC<ViewModelsPanelProps> = (props) => {
  const { items, headers, setCurrentViewModel } = props;
  const [currentModel, setCurrentModel] = useState<string>();
  let counter = 0;

  const createViewModel = useMemo(() => (
    name: string,
    component: (
      itemsList: Category[],
    ) => JSX.Element,
  ): ViewModel => ({
    // eslint-disable-next-line
    id: counter++,
    name,
    component,
  }), [counter]);

  const viewModels = useMemo(() => ([
    createViewModel('Таблица', (itemsList) => (
      <TableView
        items={itemsList}
        headers={headers}
      />
    )),
    createViewModel('Список', (itemsList) => <ListView items={itemsList} />),
  ]), [createViewModel, headers]);

  useEffect(() => {
    if (currentModel && items) {
      setCurrentViewModel(viewModels.filter((elem) => elem.name === currentModel)[0].component(items));
    } else if (items) {
      setCurrentViewModel(viewModels[0].component(items));
    }
    // eslint-disable-next-line
  }, [items, currentModel, setCurrentViewModel]);

  return (
    <div className={styles.component}>
      {viewModels && items
      && viewModels.map((elem) => (
        <button
          type="button"
          key={elem.id}
          onClick={() => {
            setCurrentModel(elem.name);
            setCurrentViewModel(elem.component(items));
          }}
        >{elem.name}
        </button>
      ))}
    </div>
  );
};

export default ViewModelsPanel;
