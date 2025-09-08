// Import des styles CSS modules pour ce composant
import styles from './Tags.module.scss';

// Composant Tags : affiche tous les tags associés à un logement
// Props : tags → tableau de chaînes de caractères
const Tags = ({ tags }) => {
  return (
    <div className={styles.container}>
      {/* Boucle sur le tableau tags et crée un <span> pour chaque élément */}
      {tags.map((tag, index) => (
        <span key={index} className={styles.span}>{tag}</span>
      ))}
    </div>
  );
};

// Export du composant pour l'utiliser dans d'autres fichiers (ex : HousingDetails)
export default Tags;
