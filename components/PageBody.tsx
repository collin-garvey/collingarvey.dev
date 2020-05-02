import React from 'react';
import styles from './PageBody.module.css';

const PageBody: React.SFC = props => {
  return <div className={styles.pageBody}>{props.children}</div>;
};

export default PageBody;
