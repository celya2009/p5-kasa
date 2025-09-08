import { Link } from 'react-router-dom'; // Import du composant Link pour la navigation
import styles from './NotFound.module.scss'; // Import des styles spécifiques à la page 404

const NotFound = () => {
    return (
        // Container principal de la page 404
        <div className={styles.container}>
            {/* Affiche le code 404 */}
            <h1 className={styles.h1}>404</h1>

            {/* Message indiquant que la page n'existe pas */}
            <h2 className={styles.h2}>
                Oups! La page que <span>vous demandez n'existe pas.</span>
            </h2>

            {/* Lien pour retourner à la page d'accueil */}
            <Link to='/'>  
                <p className={styles.p}>Retourner sur la page d’accueil</p>
            </Link>
        </div>
    )
}

export default NotFound // Export du composant pour pouvoir l'utiliser ailleurs
