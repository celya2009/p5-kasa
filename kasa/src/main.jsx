import { StrictMode, use } from 'react'// Active le mode strict pour détecter les erreurs dans React
import { createRoot } from 'react-dom/client'// Permet de créer la racine React dans le HTML
import App from './App.jsx'// Composant principal de l'application
import './main.scss'// Fichier SCSS global pour le style

// Ici on dit à React de prendre l'élément HTML qui a l'id "root"
// et d'afficher notre application dedans.
createRoot(document.getElementById('root')).render(
<StrictMode> 
    <App />{/* Rend le composant principal */}
  </StrictMode>,
)
