// C’est le chef d’orchestre des routes.
// Il définit « quand je tape telle URL, j’affiche telle page ».
// Il utilise la magie de React Router pour ça.

import { BrowserRouter, Routes, Route } from "react-router-dom";
// On importe les outils principaux de React Router :
// BrowserRouter : le conteneur général qui écoute les changements d’URL.
// Routes : le groupe de routes.
// Route : une route individuelle.

// 📌 On importe nos pages
import Layout from "./Layout/Layout";
import Home from '../pages/Home/Home';
import About from "../pages/About/About";
import HousingPage from "../pages/HousingPage/HousingPage";
import NotFound from "../pages/NotFound/NotFound";

function AppRouter() { // On crée un composant React qui retourne la logique du router.
    return (
        // Le conteneur général.<BrowserRouter>
        // ➡ Il écoute l’URL dans le navigateur.
        // ➡ Il garde la page en place quand tu changes de route.
        <BrowserRouter>
        {/* Le groupe de toutes tes routes.
        ➡ À l’intérieur, tu mets un <Route /> pour chaque page. */}
            <Routes>
                <Route path="/" element={<Layout />}>
                    {/* ➡ Quand on tape / dans l’URL, il affiche le composant Home. */}
                    <Route index element={<Home />} />
                    {/* ➡ Quand on tape /about, il affiche le composant About. */}
                    <Route path="about" element={<About />} />
                    {/* ➡ Pour la page des logements avec un identifiant dynamique (/housing/123 par exemple), il affiche HousingPage.
                    Le :id est une variable que tu pourras lire avec useParams(). */}
                    <Route path="/housing/:id" element={<HousingPage/>}/>
                    {/* ➡ Le joker * : si l’URL ne correspond à aucune des routes ci‑dessus, il affiche la page NotFound (404). */}
                    <Route path="*" element={<NotFound/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default AppRouter