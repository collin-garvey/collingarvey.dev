import React from 'react';
import styles from './Grid.module.css';
import classNames from 'classnames/bind';

let cx = classNames.bind(styles);

interface IGridProps {
  columns: 1 | 2 | 3 | 6;
}

function renderChildren(children, columns) {
  const columnClass = cx({
    one: columns === 1,
    two: columns === 2,
    three: columns === 3,
    six: columns === 6,
  });

  if (Array.isArray(children)) {
    const childs = children.map((child, i) => {
      return (
        <div key={i} className={columnClass}>
          {child}
        </div>
      );
    });
    return childs;
  } else if (typeof children === 'object') {
    return <div className={columnClass}>{children}</div>;
  }

  return null;
}

const Grid: React.SFC<IGridProps> = props => {
  return (
    <div className={cx(styles.gridContainer, styles.grid)}>
      {renderChildren(props.children, props.columns)}
    </div>
  );
};

export default Grid;
