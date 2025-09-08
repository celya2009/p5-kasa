// Import des styles CSS modules pour ce composant
import styles from './HostInfo.module.scss';

// Composant HostInfo
// Rôle : Affiche les informations de l’hôte du logement
// Props : 
// - host : objet contenant le nom et la photo de l’hôte
// Stateless component : ne gère pas de state, se contente d'afficher les props reçues
const HostInfo = ({ host }) => {
    return (
        <div className={styles.container}>
            <h3 className={styles.name}>{host.name}</h3> {/* Affiche le nom de l’hôte */}
            <img src={host.picture} alt={host.name} className={styles.photo}/> {/* Affiche la photo de l’hôte */}
        </div>
    )
}

// Export du composant pour pouvoir l'utiliser dans HousingDetails ou ailleurs
export default HostInfo
