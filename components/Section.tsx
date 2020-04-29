import cx from 'classnames';
import React from 'react';
import styles from './Section.module.css';

interface SectionProps {
  theme?: 'light' | 'dark';
  width?: 'wide' | 'normal';
  className?: string;
}

const Section: React.SFC<SectionProps> = props => {
  return (
    <section
      className={cx(
        {
          [styles.section]: true,
          [styles.sectionLight]: props.theme === 'light',
          [styles.sectionDark]: props.theme === 'dark',
          [styles.sectionWide]: props.width === 'wide',
        },
        props.className,
      )}
    >
      <div className={styles.sectionContent}>{props.children}</div>
    </section>
  );
};

export default Section;
