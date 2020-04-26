import React from 'react';
import styles from './CTASection.module.css';
import LinkButton from './LinkButton';
import Section from './Section';

const CTASection = () => {
  return (
    <Section theme="light">
      <div className={styles.CTASection}>
        <LinkButton href="/work" as="/work" theme="highlight">
          View All Work
        </LinkButton>
      </div>
    </Section>
  );
};

export default CTASection;
