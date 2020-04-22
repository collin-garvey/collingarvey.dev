import classNames from 'classnames';
import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  theme?: 'light' | 'dark';
  width?: 'wide' | 'normal';
}

const Section: React.SFC<SectionProps> = props => {
  return (
    <section
      className={classNames({
        [styles.section]: true,
        [styles.sectionLight]: props.theme === 'light',
        [styles.sectionDark]: props.theme === 'dark',
        [styles.sectionWide]: props.width === 'wide',
      })}
    >
      <div className={styles.sectionContent}>{props.children}</div>
    </section>
  );
};

export default Section;
