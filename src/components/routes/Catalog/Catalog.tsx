import React from 'react';

import CatalogList from '../../CatalogList';
import VisibilityButton from '../../CatalogVisibilityButton';
import catalogListStore from '../../../stores/catalogListStore';

const Catalog: React.FC = () => (
  <div>
    <h1>Страница каталога</h1>
    <VisibilityButton store={catalogListStore} />
    <CatalogList store={catalogListStore} />
  </div>
);

export default Catalog;
