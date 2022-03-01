import React from 'react';
import { render } from '@testing-library/react';

import ViewModelsPanel from '../ViewModelsPanel';

const testId = 'testingViewModelsPanel';

type ViewModelsPanelProps = React.ComponentProps<typeof ViewModelsPanel>;

const renderComponent = (
  props: ViewModelsPanelProps = { items: [], headers: [], setCurrentViewModel: () => {} },
) => render(
  <ViewModelsPanel
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент ViewModelsPanel', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
