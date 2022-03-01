import React from 'react';
import { render, screen } from '@testing-library/react';

import CatalogItem from '../CatalogItem';

const testId = 'testingCatalog';

type CatalogProps = React.ComponentProps<typeof CatalogItem>;

const renderComponent = (props: CatalogProps) => render(
  <CatalogItem
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент CatalogItem', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  it('отображает категорию', () => {
    renderComponent({ strCategory: 'Milk', strCategoryDescription: 'Some Descr', strCategoryThumb: './img' });
    expect(screen.getByText('Milk')).toBeInTheDocument();
  });

  it('отображает описание', () => {
    renderComponent({ strCategory: 'Milk', strCategoryDescription: 'Some Descr', strCategoryThumb: './img' });
    expect(screen.getByText(/Some Descr/)).toBeInTheDocument();
  });
});
