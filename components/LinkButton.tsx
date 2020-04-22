import classNames from 'classnames';
import Link from 'next/link';
import React from 'react';
import styles from './LinkButton.module.css';

interface ILinkButtonProps {
  href: string;
  theme?: 'highlight' | 'dark' | 'light';
}

const LinkButton: React.SFC<ILinkButtonProps> = props => {
  return (
    <Link href={props.href}>
      <a
        className={classNames({
          [styles.LinkButton]: true,
          [styles.themeHighlight]: props.theme === 'highlight',
          [styles.themeLight]: props.theme === 'light',
          [styles.themeDark]: props.theme === 'dark',
        })}
      >
        {props.children}
      </a>
    </Link>
  );
};

export default LinkButton;
