import styles from './HostInfo.module.scss';

const HostInfo = ({ host }) => {
    // console.log("Données du host :", host);

    return (
        <div className={styles.container}>
            <h3 className={styles.name}>{host.name}</h3>
            <img src={host.picture} alt={host.name} className={styles.photo}/>
        </div>
    )
}

export default HostInfo