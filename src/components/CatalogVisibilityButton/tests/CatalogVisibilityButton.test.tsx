import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

import VisibilityButton from '../VisibilityButton';
import catalogListStore from '../../../stores/catalogListStore';

const testId = 'testingCatalogVisibilityButton';

type CatalogVisibilityButtonProps = React.ComponentProps<typeof VisibilityButton>;

const renderComponent = (props: CatalogVisibilityButtonProps = { store: catalogListStore }) => render(
  <VisibilityButton
    data-testid={testId}
    {...props}
  />,
);

describe('Компонент VisibilityButton', () => {
  it('отображается без ошибок', () => {
    expect(renderComponent).not.toThrow();
  });

  it('should be init on visible', () => {
    renderComponent();
    expect(screen.getByText('Скрыть')).toBeInTheDocument();
  });

  it('onClick handler work', () => {
    renderComponent();
    userEvent.click(screen.getByRole('button'));
    expect(screen.getByText('Показать')).toBeInTheDocument();
  });
});
