import React from 'react';
import styles from './CTA.module.css';

const CTA = props => {
  return <div className={styles.CTA}>{props.children}</div>;
};

export default CTA;
