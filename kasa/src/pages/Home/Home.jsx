import Banner from "../../components/Banner/Banner"; // Composant pour afficher la bannière en haut de la page
import homeBannerImg from '../../assets/Falaise.png'; // Image utilisée dans la bannière
import Card from "../../components/Card/Card";         // Composant pour afficher chaque logement

import { DescriptionHousing } from "../../data/DescriptionHousing"; // Données des logements (titre, id, image)
import styles from '../../pages/Home/Home.module.scss'; // Styles CSS modules spécifiques à la page Home

const Home = () => {
  return (
    <>
      <Banner
        image={homeBannerImg}  // Image affichée dans la bannière
        text="Chez vous, partout et ailleurs" // Texte de la bannière
        alt="Falaises"  // Texte alternatif pour l'image (accessibilité)
        className={styles.homeBanner}  // Classe CSS pour la bannière
        imgClassName={styles.homeBannerImg} // Classe CSS pour l'image
        titleClassName={styles.homeBannerH1} // Classe CSS pour le titre
      />
      <div className={styles.container}>
        {/* // On crée un tableau de JSX avec .map() */}
        {DescriptionHousing.map((announce) => (
          <Card
            key={announce.id} // React demande un key unique pour chaque élément de liste
            id={announce.id} // Identifiant du logement (utile pour la route ou le lien)
            title={announce.title} // Titre du logement
            cover={announce.cover} // Image de couverture du logement
          />
        ))}
      </div>
    </>
  )
}

export default Home // Export du composant pour l'utiliser dans AppRouter.jsx