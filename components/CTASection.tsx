import React from 'react';
import Section from './Section';
import LinkButton from './LinkButton';

import styles from './CTASection.module.css';

const CTASection = () => {
  return (
    <Section theme="light">
      <div className={styles.CTASection}>
        <LinkButton href="/work" theme="highlight">
          View All Work
        </LinkButton>
      </div>
    </Section>
  );
};

export default CTASection;
