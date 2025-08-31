// src/components/CollapseContent/CollapseContent.jsx
import React from 'react';
import styles from './CollapseContent.module.scss';

const CollapseContent = ({ description, equipments, isOpen }) => {
  return (
    <div className={styles.content}>
      {equipments ? (
        <ul>
          {equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        <p>{description}</p>
      )}
    </div>
  );
};

export default CollapseContent;
