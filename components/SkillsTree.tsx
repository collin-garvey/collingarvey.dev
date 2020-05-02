import React, {useEffect} from 'react';
import SkillTree from '../lib/skillTree';
import styles from './SkillsTree.module.css';

const SkillsTree = () => {
  useEffect(() => {
    SkillTree({labelClass: styles.label});
  }, []);
  return <div id="skillTreeRoot" className={styles.SkillsTree} />;
};

export default SkillsTree;
