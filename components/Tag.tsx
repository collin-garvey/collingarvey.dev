import React from 'react';
import styles from './Tag.module.css';

export const Tag: React.SFC = props => {
  return <div className={styles.tag}>{props.children}</div>;
};

export const TagList: React.SFC = props => {
  return <div className={styles.tagList}>{props.children}</div>;
};
