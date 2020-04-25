import React from 'react';
import styles from './Tag.module.css';

interface ITagListProps {
  tags: [string];
}

export const TagList: React.SFC<ITagListProps> = props => {
  return (
    <div className={styles.tagList}>
      {props.tags.map((tag: string, index: number) => {
        return <Tag key={index}>{tag}</Tag>;
      })}
    </div>
  );
};

export const Tag: React.SFC = props => {
  return <div className={styles.tag}>{props.children}</div>;
};
