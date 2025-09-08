// Import des styles CSS modules pour ce composant
import styles from './TitleLocation.module.scss';

// Composant TitleLocation
// Rôle : Affiche le titre et la localisation d'un logement
// Props : 
// - title : nom du logement
// - location : ville ou lieu du logement
// Stateless component : il ne gère pas de state, il se contente d'afficher les props reçues
const TitleLocation = ({title, location}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{title}</h1> {/* Affiche le titre du logement */}
            <h2 className={styles.h2}>{location}</h2> {/* Affiche la localisation */}
        </div>
    )
}

// Export du composant pour pouvoir l'utiliser dans HousingDetails ou ailleurs
export default TitleLocation
