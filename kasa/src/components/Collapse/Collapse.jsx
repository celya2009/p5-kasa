// src/components/Collapse/Collapse.jsx
import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';
import styles from './Collapse.module.scss';

const Collapse = ({ title, children }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.box}>
      <div className={styles.toggleBar} onClick={() => setIsOpen(!isOpen)}>
        <h2 className={styles.toggleBarH2}>{title}</h2>
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
        />
      </div>

      {/* On passe isOpen à CollapseContent */}
      <div className={`${styles.content} ${isOpen ? styles.open : styles.closed}`}>
        {typeof children === "function" ? children({ isOpen }) : children}
      </div>
    </div>
  );
};

export default Collapse;
