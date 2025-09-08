// Imports des icônes et styles CSS modules
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons'; // Flèches pour navigation
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Affichage des icônes
import styles from './Slideshow.module.scss'; // Styles du composant
import { useState } from 'react'; // Hook useState pour gérer l'index de l'image affichée

// Composant Slideshow : affiche un diaporama pour un logement
// Props : 
// - pictures : tableau des URLs des images du logement
const Slideshow = ({pictures}) => {

    // State : index de l'image actuellement affichée
    const [currentIndex, setCurrentIndex] = useState(0);

    // Fonction pour passer à l'image précédente
    const handlePrevious = () => {
        if (currentIndex === 0){
            setCurrentIndex(pictures.length - 1) // Si première image, revenir à la dernière
        } else {
            setCurrentIndex(currentIndex - 1) // Sinon, revenir à l'image précédente
        }
    }

    // Fonction pour passer à l'image suivante
    const handleNext  = () => {
        if (currentIndex === pictures.length - 1){
            setCurrentIndex(0) // Si dernière image, revenir à la première
        } else {
            setCurrentIndex(currentIndex + 1) // Sinon, passer à l'image suivante
        }
    }

    return (
        <div className={styles.container}>
            {/* Affichage de l'image actuelle */}
            <img src={pictures[currentIndex]} alt='Photo du Logement' className={styles.img}/>

            {/* Flèches et compteur seulement si plusieurs images */}
            {pictures.length > 1 &&
                <>
                    {/* Flèche gauche pour image précédente */}
                    <button onClick={handlePrevious} className={`${styles.iconWrapper} ${styles.left}`}>
                        <FontAwesomeIcon icon={faChevronLeft} className={styles.faChevronLeft} />
                    </button>

                    {/* Affichage du compteur "1 / N" */}
                    <p className={styles.p}>{`${currentIndex + 1} / ${pictures.length}`}</p>
                    
                    {/* Flèche droite pour image suivante */}
                    <button onClick={handleNext} className={`${styles.iconWrapper} ${styles.right}`}>
                        <FontAwesomeIcon icon={faChevronRight} className={styles.faChevronRight} />
                    </button>
                </>
            } 
        </div>
    )
}

// Remarques:
// - currentIndex est un state qui permet de savoir quelle image est affichée
// - handlePrevious et handleNext changent currentIndex pour naviguer dans les images
// - pictures.length > 1 : on affiche les flèches et compteur seulement si plusieurs images
// - Les props permettent de passer dynamiquement les images depuis HousingPage
// - FontAwesomeIcon sert à afficher les icônes de flèches
// - Ce composant est purement visuel, il n'affecte pas les données ailleurs

export default Slideshow;
