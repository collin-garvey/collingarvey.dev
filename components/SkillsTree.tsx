import React, {useEffect} from 'react';
import SkillTree from '../lib/skillTree';
import styles from './SkillsTree.module.css';

const SkillsTree = () => {
  useEffect(() => {
    SkillTree({labelClass: styles.label});
  }, []);
  return (
    <div className={styles.skillsTreeWrap}>
      <div className={styles.chartKey}>
        <span>😬</span>
        <span>🤩</span>
      </div>
      <div id="skillTreeRoot" className={styles.SkillsTree} />
    </div>
  );
};

export default SkillsTree;
