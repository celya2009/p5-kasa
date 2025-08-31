import { Link } from 'react-router-dom' // Import de Link pour naviguer sans recharger la page
import styles from './Card.module.scss' // Import des styles CSS modules pour ce composant 

// Composant Card : affiche une carte pour un logement
// Props : title (titre du logement), cover (image de couverture), id (identifiant du logement)
function Card({ id, title, cover }) {
    return (
        <Link to={`/housing/${id}`} className={styles.card}>
            <img src={cover} alt={title} className={styles.img} />
            <h1 className={styles.h1}>{title}</h1>
        </Link>
    );
}

export default Card // Export du composant pour pouvoir l'utiliser ailleurs

