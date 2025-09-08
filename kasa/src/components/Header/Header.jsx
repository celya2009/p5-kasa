import { Link, NavLink } from 'react-router-dom'; // Import pour naviguer entre les pages sans recharger
import logo from '../../assets/logokasa.png'; // Logo Kasa
import styles from './Header.module.scss'; // Styles CSS modules spécifiques au Header

// Composant Header : barre en haut de la page avec logo et navigation
const Header = () => {
    return (
        <header className={styles.header}>
            {/* Logo cliquable qui renvoie à la page d'accueil */}
            <Link to='/'>
                <img src={logo} alt='Kasa Logo' className={styles.logo}/>
            </Link>

            {/* Menu de navigation */}
            <nav className={styles.nav}>
                {/* NavLink permet d'ajouter une classe active si la route correspond */}
                <NavLink 
                    to="/" 
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    Accueil
                </NavLink>

                <NavLink 
                    to="/about" 
                    className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

// Export du composant pour l'utiliser dans App.jsx
export default Header
