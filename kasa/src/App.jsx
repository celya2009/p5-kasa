import AppRouter from './components/Router.jsx'; // Composant qui gère la navigation entre les pages

// Composant principal qui appelle AppRouter
const App = () => {
  return <AppRouter />; // AppRouter va gérer la navigation entre tes pages
}

export default App // Permet d'importer App dans main.jsx
