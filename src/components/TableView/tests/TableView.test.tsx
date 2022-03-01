import React from 'react';
import { render, screen } from '@testing-library/react';

import TableView from '../TableView';

const testId = 'testingTableView';

type TableViewProps = React.ComponentProps<typeof TableView>;

const renderComponent = (props: TableViewProps = { headers: [], items: [] }) => render(
  <TableView
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент TableView', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  it('отображает заголовки', () => {
    renderComponent({ headers: ['Название'], items: [] });
    expect(screen.queryByText(/Название/)).toBeInTheDocument();
  });

  it('отображает название', () => {
    renderComponent(
      {
        headers: [],
        items: [{
          strCategory: 'Beef', strCategoryThumb: '', strCategoryDescription: 'Descr', idCategory: '1',
        }],
      },
    );
    expect(screen.queryByText(/Beef/)).toBeInTheDocument();
  });

  it('отображает описание', () => {
    renderComponent(
      {
        headers: [],
        items: [{
          strCategory: 'Beef', strCategoryThumb: '', strCategoryDescription: 'Descr some value', idCategory: '1',
        }],
      },
    );
    expect(screen.queryByText(/Descr some value/)).toBeInTheDocument();
  });
});
