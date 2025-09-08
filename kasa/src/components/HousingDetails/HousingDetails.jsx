// Imports des composants enfants et styles CSS modules
import TitleLocation from './TitleLocation/TitleLocation'; // Titre et localisation du logement
import Tags from './Tags/Tags'; // Tags associés au logement
import RatingStars from './RatingStars/RatingStars'; // Étoiles de notation
import HostInfo from './HostInfo/HostInfo'; // Infos sur l’hôte
import Collapse from '../Collapse/Collapse'; // Composant Collapse pour sections pliables
import CollapseContent from '../CollapseContent/CollapseContent'; // Contenu des Collapse
import styles from './HousingDetails.module.scss'; // Styles du composant

// Composant HousingDetails : affiche toutes les informations détaillées d’un logement
// Props :
// - title : titre du logement
// - location : localisation du logement
// - tags : tableau de tags
// - rating : note du logement (1 à 5)
// - host : informations sur l’hôte
// - description : description textuelle
// - equipments : liste des équipements
const HousingDetails = ({ title, location, tags, rating, host, description, equipments }) => {
    return (
        <div className={styles.container}>

            {/* Partie info principale : titre, localisation, tags, hôte et notation */}
            <div className={styles.infoWrapper}>

                {/* Titre et localisation + tags */}
                <div className={styles.TitleLocationTags}>
                    <TitleLocation title={title} location={location} /> {/* Affiche le titre et la ville */}
                    <Tags tags={tags} /> {/* Boucle sur le tableau tags pour afficher chaque tag */}
                </div>

                {/* Informations sur l’hôte et étoiles de notation */}
                <div className={styles.ratingStarsHostInfo}>
                    <HostInfo host={host} /> {/* Affiche photo et nom de l’hôte */}
                    <RatingStars rating={rating} /> {/* Affiche le nombre d’étoiles rempli selon la note */}
                </div>
            </div>

            {/* Section collapsible : Description et Équipements */}
            <div className={styles.dropdown}>
                {/* Collapse pour Description */}
                <Collapse title="Description">
                    <CollapseContent description={description} /> {/* Passe description comme prop */}
                </Collapse>

                {/* Collapse pour Équipements */}
                <Collapse title="Équipements">
                    <CollapseContent equipments={equipments} /> {/* Passe equipments comme prop */}
                </Collapse>
            </div>
        </div>
    );
};

// Remarque :
// - Chaque Collapse reçoit un titre et un contenu via CollapseContent
// - Collapse utilise le state "isOpen" pour savoir s'il est ouvert ou fermé
// - Les props permettent de passer des données depuis HousingDetails vers CollapseContent
// - TitleLocation, Tags, HostInfo et RatingStars sont des composants enfants qui reçoivent leurs propres props pour s'afficher dynamiquement
// - La structure est responsive grâce aux classes CSS modules (styles.*)
// - Pas d'effet secondaire ici, juste un affichage dynamique des données

// Export du composant pour l’utiliser ailleurs (ex : page HousingPage)
export default HousingDetails;

