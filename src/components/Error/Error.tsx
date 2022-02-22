import React from 'react';

import styles from './Error.module.scss';

const Error: React.FC = () => (
  <div className={styles.component}>
    Ошибка при получении данных, обновите страницу.
  </div>
);

export default Error;
