import React from 'react';
import styles from './CTA.module.css';

const CTA: React.SFC = props => {
  return <div className={styles.CTA}>{props.children}</div>;
};

export default CTA;
