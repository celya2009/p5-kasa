import { Link, NavLink } from 'react-router-dom';
import logo from '../../assets/logokasa.png';
import styles from './Header.module.scss';

const Header = () => {
    return (
        <header className={styles.header}>
            <Link to='/'>
                <img src={logo} alt='Kasa Logo' className={styles.logo}/>
            </Link>
            <nav className={styles.nav}>
                <NavLink to="/" className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    Accueil
                </NavLink>
                <NavLink to="/about" className={({ isActive }) =>
                        isActive ? `${styles.link} ${styles.active}` : styles.link
                    }
                >
                    A Propos
                </NavLink>
            </nav>
        </header>
    )
}

export default Header