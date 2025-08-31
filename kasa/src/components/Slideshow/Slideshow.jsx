import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import styles from './Slideshow.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from 'react';

const Slideshow = ({pictures}) => {
    // console.log(pictures.length)

    const [currentIndex, setCurrentIndex] = useState(0);

    const handlePrevious = () => {
        if (currentIndex === 0){
            setCurrentIndex(pictures.length - 1)
        } else {
            setCurrentIndex(currentIndex - 1)
        }
    }

    const handleNext  = () => {
        if (currentIndex === pictures.length - 1){
            setCurrentIndex(0)
        } else {
            setCurrentIndex(currentIndex + 1)
        }
    }

    return (
        <div className={styles.container}>
            <img src={pictures[currentIndex]} alt='Photo du Logement' className={styles.img}/>

            {pictures.length > 1 &&
                <>
                    <button onClick={handlePrevious} className={`${styles.iconWrapper} ${styles.left}`}>
                        < FontAwesomeIcon
                            icon={faChevronLeft}
                            className={styles.faChevronLeft}
                        />
                    </button>

                    <p className={styles.p}>{`${currentIndex + 1} / ${pictures.length}`}</p>
                    
                    <button onClick={handleNext} className={`${styles.iconWrapper} ${styles.right}`}>
                        < FontAwesomeIcon 
                            icon={faChevronRight}
                            className={styles.faChevronRight}
                        />
                    </button>
                </>
            } 
        </div>
    )
}

export default Slideshow