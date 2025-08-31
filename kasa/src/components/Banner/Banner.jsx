import styles from './Banner.module.scss'; // Import des styles CSS modules pour le composant

// Composant Banner : affiche une image de fond avec un texte optionnel
const Banner = ({ image, text, alt, className, titleClassName }) => {
  return (
    // Container principal de la bannière
    // role="img" + aria-label pour l'accessibilité (le texte alternatif)
    <div className={`${styles.banner} ${className}`} role="img" aria-label={alt}>
       {/* Div pour afficher l'image en arrière-plan */}
      <div
        className={styles.banner__image} // style spécifique à l'image
        style={{ backgroundImage: `url(${image})` }} // image passée en prop
      ></div>
       {/* Si un texte est fourni, on affiche un titre */}
      {text && <h1 className={`${styles.banner__title} ${titleClassName || ''}`}>{text}</h1>}
    </div>
  );
};

export default Banner; // Export du composant pour l'utiliser ailleurs