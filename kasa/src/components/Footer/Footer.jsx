import logo from '../../assets/logokasawhite.png'; // Import du logo Kasa blanc
import styles from './Footer.module.scss'; // Import des styles CSS modules spécifiques au Footer

// Composant Footer : affiche le bas de page avec logo et copyright
const Footer = () => {
    return (
        <footer className={styles.footer}> {/* Balise footer principale */}
            <div className={styles.container}> {/* Conteneur pour centrer le contenu */}
                <img 
                    src={logo} 
                    alt='Kasa logo White' 
                    className={styles.logo} 
                /> {/* Logo Kasa affiché dans le footer */}
                <p className={styles.p}>© 2020 Kasa. All rights reserved</p> {/* Texte copyright */}
            </div>
        </footer>
    )
}

export default Footer // Export du composant pour pouvoir l'utiliser ailleurs
