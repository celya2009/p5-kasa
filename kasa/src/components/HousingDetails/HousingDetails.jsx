// Imports des composants et styles
import TitleLocation from './TitleLocation/TitleLocation';
import Tags from './Tags/Tags';
import RatingStars from './RatingStars/RatingStars';
import HostInfo from './HostInfo/HostInfo';
import Collapse from '../Collapse/Collapse';
import CollapseContent from '../CollapseContent/CollapseContent';
import styles from './HousingDetails.module.scss';

// Composant HousingDetails
const HousingDetails = ({ title, location, tags, rating, host, description, equipments }) => {
    return (
        <div className={styles.container}>
            {/* Partie info principale */}
            <div className={styles.infoWrapper}>
                <div className={styles.TitleLocationTags}>
                    <TitleLocation title={title} location={location} />
                    <Tags tags={tags} />
                </div>

                <div className={styles.ratingStarsHostInfo}>
                    <HostInfo host={host} />
                    <RatingStars rating={rating} />
                </div>
            </div>

            {/* Section collapsible du logement */}
            <div className={styles.dropdown}>
                <Collapse title="Description">
                    <CollapseContent description={description} />
                </Collapse>
                <Collapse title="Équipements">
                    <CollapseContent equipments={equipments} />
                </Collapse>
            </div>
        </div>
    );
};

export default HousingDetails;
