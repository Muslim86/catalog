import React from 'react';
import { render } from '@testing-library/react';

import ListView from '../ListView';

const testId = 'testingListView';

type ListViewProps = React.ComponentProps<typeof ListView>;

const renderComponent = (props: ListViewProps = { items: [] }) => render(
  <ListView
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ListView', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
