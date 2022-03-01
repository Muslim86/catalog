import React from 'react';
import { render } from '@testing-library/react';

import SearchLine from '../SearchLine';
import catalogListStore from '../../../stores/catalogListStore';

const testId = 'testingSearchLine';

type SearchLineProps = React.ComponentProps<typeof SearchLine>;

const renderComponent = (props: SearchLineProps = { store: catalogListStore, setSearch: () => {} }) => render(
  <SearchLine
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент SearchLine', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
