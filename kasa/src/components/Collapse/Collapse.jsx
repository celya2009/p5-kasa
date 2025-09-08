// Import du hook useState pour gérer l'état ouvert/fermé du Collapse
import { useState } from 'react';

// Import de FontAwesome pour afficher une icône (flèche)
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronUp } from '@fortawesome/free-solid-svg-icons';

// Import des styles spécifiques à Collapse
import styles from './Collapse.module.scss';

// Définition du composant Collapse
// Props :
// - title : titre affiché sur la barre du Collapse
// - children : contenu à afficher à l'intérieur du Collapse
const Collapse = ({ title, children }) => {
  // State pour savoir si le Collapse est ouvert ou fermé
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={styles.box}>
      
      {/* Barre sur laquelle l'utilisateur clique pour ouvrir/fermer le Collapse */}
      <div className={styles.toggleBar} onClick={() => setIsOpen(!isOpen)}>
        {/* Titre du Collapse */}
        <h2 className={styles.toggleBarH2}>{title}</h2>
        
        {/* Flèche qui tourne selon si le Collapse est ouvert ou fermé */}
        <FontAwesomeIcon
          icon={faChevronUp}
          className={`${styles.chevron} ${isOpen ? styles.rotate : ''}`}
        />
      </div>

      {/* Contenu du Collapse */}
      {/* On passe isOpen à CollapseContent si children est une fonction */}
      <div className={`${styles.content} ${isOpen ? styles.open : styles.closed}`}>
        {typeof children === "function" ? children({ isOpen }) : children}
      </div>
    </div>
  );
};

// Export du composant pour l'utiliser dans d'autres fichiers
export default Collapse;
