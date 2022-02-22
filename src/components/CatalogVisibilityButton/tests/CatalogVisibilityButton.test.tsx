import React from 'react';
import { render } from '@testing-library/react';

import VisibilityButton from '../VisibilityButton';

const testId = 'testingCatalogVisibilityButton';

type CatalogVisibilityButtonProps = React.ComponentProps<typeof VisibilityButton>;

const renderComponent = (props: CatalogVisibilityButtonProps = {}) => render(
  <VisibilityButton
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент VisibilityButton', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });
});
