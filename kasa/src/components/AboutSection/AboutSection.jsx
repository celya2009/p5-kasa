import React from 'react'; // Import de React pour pouvoir utiliser JSX
import Collapse from '../Collapse/Collapse'; // Composant Collapse pour sections pliables
import CollapseContent from '../CollapseContent/CollapseContent'; // Contenu des Collapse
import { AboutData } from '../../data/AboutData'; // Import des données pour la section "À propos"
import styles from './AboutSection.module.scss'; // Import des styles CSS modules pour ce composant

// Composant AboutSection : affiche plusieurs sections "À propos" avec Collapse
const AboutSection = () => {
  return (
    <section className={styles.aboutSection}> {/* Section principale de About */}
      {AboutData.map((item) => (  // Boucle sur le JSON AboutData pour créer un Collapse pour chaque item
        <Collapse key={item.title} title={item.title}> {/* Titre de la section */}
          {({ isOpen }) => (  // isOpen indique si le Collapse est ouvert ou fermé
            <CollapseContent 
              description={item.description} // Description à afficher dans le Collapse
              isOpen={isOpen} // On passe l'état ouvert/fermé
            />
          )}
        </Collapse>
      ))}
    </section>
  );
};

export default AboutSection // Export du composant pour l'utiliser ailleurs
