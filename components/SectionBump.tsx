import Link from 'next/link';
import React from 'react';
import styles from './SectionBump.module.css';

interface ISectionBumpProps {
  href: string;
}

const SectionBump: React.SFC<ISectionBumpProps> = props => {
  return (
    <div className={styles.sectionBump}>
      <Link href={props.href}>
        <a>
          {props.children} <span>&#10097;</span>
        </a>
      </Link>
    </div>
  );
};

export default SectionBump;
