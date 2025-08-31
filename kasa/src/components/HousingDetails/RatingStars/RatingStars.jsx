import styles from './RatingStars.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar as faStarSolid } from '@fortawesome/free-solid-svg-icons';

const RatingStars = ({rating}) => {
    const totalStars = 5;

    return (
        <div className={styles.container}>
            <div className={styles.ratingStars}>
                {[...Array(totalStars)].map((_, index) => (
                    <div
                        key={index}
                        className={`${styles.star}
                        ${index < rating
                            ? styles.starFilled
                            : styles.starEmpty}
                        `}
                    >
                        <FontAwesomeIcon icon={faStarSolid} />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RatingStars