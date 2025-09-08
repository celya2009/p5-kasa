import Banner from "../../components/Banner/Banner"; // Import du composant Banner
import aboutBannerImg from '../../assets/MontainAbout.png'; // Import de l'image pour la bannière
import { AboutData } from "../../data/AboutData"; // Import des données pour les sections à propos
import Collapse from "../../components/Collapse/Collapse"; // Import du composant Collapse
import CollapseContent from "../../components/CollapseContent/CollapseContent"; // Import du composant CollapseContent
import styles from './About.module.scss'; // Import des styles spécifiques à la page About

const About = () => {
  return (
    <>
      {/* Affiche une bannière en haut de la page */}
      <Banner 
        image={aboutBannerImg} // image affichée dans la bannière
        alt='Montagnes' // texte alternatif pour l'image
        className={styles.aboutBanner} // classe CSS pour le container de la bannière
        imgClassName={styles.aboutBannerImg} // classe CSS pour l'image elle-même
      />

      {/* Container pour toutes les sections collapsibles */}
      <div className={styles.container}>
        {/* Boucle sur les données AboutData pour créer un Collapse par item */}
        {AboutData.map(({title, description}) => (
          <Collapse 
            key={title} // clé unique pour React
            title={title} // titre affiché dans le Collapse
          >
            {/* Contenu à l'intérieur du Collapse */}
            <CollapseContent description={description}/>
          </Collapse>
        ))}
      </div>
    </>
  )
}

export default About // Export du composant pour pouvoir l'utiliser ailleurs
