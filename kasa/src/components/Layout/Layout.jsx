import Header from "../Header/Header"; // Le header, visible sur toutes les pages
import Footer from '../Footer/Footer'; // Le footer, visible sur toutes les pages
import { Outlet } from "react-router-dom"; // "Fenêtre" où s'affiche le contenu de la page active
//  en fonction de la route
const Layout = () => {
    return (
        <>
            <Header/> {/* Affiche le header sur toutes les pages */}
            <main>
                <Outlet/>  {/* Affiche le contenu de la page actuelle selon la route */}
            </main>
            <Footer/> {/* Affiche le footer sur toutes les pages */}
        </>
    )
}

// On exporte Layout pour l’utiliser dans le routeur (AppRouter.jsx).
export default Layout 