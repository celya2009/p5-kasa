// src/components/AboutSection/AboutSection.jsx
import React from 'react';
import Collapse from '../Collapse/Collapse';
import CollapseContent from '../CollapseContent/CollapseContent';
import { AboutData } from '../../data/AboutData';
import styles from './AboutSection.module.scss';

const AboutSection = () => {
  return (
    <section className={styles.aboutSection}>
      {AboutData.map((item) => (
        <Collapse key={item.title} title={item.title}>
          {({ isOpen }) => <CollapseContent description={item.description} isOpen={isOpen} />}
        </Collapse>
      ))}
    </section>
  );
};

export default AboutSection;
