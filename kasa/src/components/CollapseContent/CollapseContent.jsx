// Import de React pour créer un composant fonctionnel
import React from 'react';

// Import des styles spécifiques à CollapseContent
import styles from './CollapseContent.module.scss';

// Définition du composant CollapseContent
// Props : 
// - description : texte à afficher si ce n'est pas une liste d'équipements
// - equipments : tableau d'équipements à afficher sous forme de liste
// - isOpen : état provenant du Collapse parent pour savoir si le contenu doit être affiché
const CollapseContent = ({ description, equipments, isOpen }) => {
  return (
    // Conteneur du contenu avec la classe CSS content
    <div className={styles.content}>
      
      {/* Si equipments existe, on affiche une liste */}
      {equipments ? (
        <ul>
          {equipments.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      ) : (
        // Sinon on affiche la description sous forme de paragraphe
        <p>{description}</p>
      )}
    </div>
  );
};

// Export du composant pour l'utiliser dans d'autres fichiers
export default CollapseContent;
