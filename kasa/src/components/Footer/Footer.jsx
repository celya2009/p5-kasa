import logo from '../../assets/logokasawhite.png';
import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <img src={logo} alt='Kasa logo White' className={styles.logo}/>
                <p className={styles.p}>© 2020 Kasa. All rights reserved</p>
            </div>
        </footer>
    )
}

export default Footer