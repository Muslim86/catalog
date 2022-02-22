import React from 'react';
import { render } from '@testing-library/react';

import SearchLine from '../SearchLine';

const testId = 'testingSearchLine';

type SearchLineProps = React.ComponentProps<typeof SearchLine>;

const renderComponent = (props: SearchLineProps = {}) => render(
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
