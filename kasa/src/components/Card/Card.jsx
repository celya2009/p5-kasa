// Import de Link pour naviguer entre les pages sans recharger la page
import { Link } from 'react-router-dom'

// Import des styles CSS modules pour ce composant
import styles from './Card.module.scss'

// Composant Card : affiche une carte pour un logement
// Props : 
// - title : titre du logement
// - cover : image de couverture du logement
// - id : identifiant unique du logement pour la navigation
function Card({ id, title, cover }) {
    return (
        // Lien cliquable vers la page du logement correspondant
        <Link to={`/housing/${id}`} className={styles.card}>
            
            {/* Image de couverture du logement */}
            <img src={cover} alt={title} className={styles.img} />
            
            {/* Titre du logement */}
            <h1 className={styles.h1}>{title}</h1>
        </Link>
    );
}

// Export du composant pour pouvoir l'utiliser dans d'autres fichiers
export default Card
