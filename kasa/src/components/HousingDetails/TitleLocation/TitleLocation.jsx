import styles from './TitleLocation.module.scss';

const TitleLocation = ({title, location}) => {
    return (
        <div className={styles.container}>
            <h1 className={styles.h1}>{title}</h1>
            <h2 className={styles.h2}>{location}</h2>
        </div>
    )
}

export default TitleLocation