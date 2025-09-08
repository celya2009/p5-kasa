// Import des styles CSS modules pour ce composant
import styles from './RatingStars.module.scss';
// Import de l'icône étoile de FontAwesome
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

// Composant RatingStars : affiche la note d'un logement en étoiles
// Props : rating → nombre d'étoiles remplies (1 à 5)
const RatingStars = ({ rating }) => {
    const totalStars = 5; // Nombre total d'étoiles affichées

    return (
        <div className={styles.container}>
            <div className={styles.ratingStars}>
                {/* Création des étoiles avec une boucle : remplies si index < rating */}
                {[...Array(totalStars)].map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.star}
                        ${index < rating
                            ? styles.starFilled // étoile remplie
                            : styles.starEmpty} // étoile vide
                        `}
                    >
                        <FontAwesomeIcon icon={faStarSolid} /> {/* Affiche l'icône étoile */}
                    </div>
                ))}
            </div>
        </div>
    )
}

// Export du composant pour l'utiliser dans d'autres fichiers (ex : HousingDetails)
export default RatingStars;
