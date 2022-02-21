import React from 'react';
import { render } from '@testing-library/react';

import CatalogList from '../CatalogList';

const testId = 'testingCatalogList';

type CatalogListProps = React.ComponentProps<typeof CatalogList>;

const renderComponent = (props: CatalogListProps = {}) => render(
  <CatalogList
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент CatalogList', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
