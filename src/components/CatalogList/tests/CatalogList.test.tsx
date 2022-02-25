import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import CatalogList from '../CatalogList';
import catalogListStore from '../../../stores/catalogListStore';

const testId = 'testingCatalogList';

type CatalogListProps = React.ComponentProps<typeof CatalogList>;

const renderComponent = (props: CatalogListProps = { store: catalogListStore }) => render(
  <CatalogList
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент CatalogList', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  it('should have show more', () => {
    renderComponent();
    expect(screen.getByText('Показать ещё')).toBeInTheDocument();
  });

  it('should hidden show more with type > 3', () => {
    renderComponent();
    userEvent.type(screen.getByRole('textbox'), 'React');
    expect(screen.queryByText('Показать ещё')).not.toBeInTheDocument();
  });

  it('should hidden show more with type <= 3', () => {
    renderComponent();
    userEvent.type(screen.getByRole('textbox'), 'Rea');
    expect(screen.queryByText('Показать ещё')).toBeInTheDocument();
  });
});
