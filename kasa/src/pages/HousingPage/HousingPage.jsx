// src/pages/Housing/HousingPage.jsx

// On importe les données et les composants nécessaires
import logements from "../../data/logements.json"; // Liste des logements (JSON)
import Slideshow from "../../components/Slideshow/Slideshow";  // Composant pour le diaporama d'images
import { useParams } from "react-router-dom";  // Pour récupérer l'ID depuis l'URL
import { useEffect , useState } from "react"; // Hooks React : useState pour le state, useEffect pour les effets
import { useNavigate } from "react-router"; // Pour rediriger l'utilisateur
import HousingDetails from "../../components/HousingDetails/HousingDetails"; // Composant pour afficher tous les détails du logement

const HousingPage = () => {
    // 1. Récupérer l'ID du logement depuis l'URL (ex: /housing/123 → id = "123")
    const { id } = useParams();

    // 2. Instancier le hook de navigation
    // ➜ Permet de rediriger l'utilisateur vers une autre page via le code (ex: page NotFound)
    const navigate = useNavigate()

    // 3. Créer un état pour stocker le logement sélectionné
    const [selectedHousing, setSelectedHousing] = useState(null);

    // 4. useEffect : s'exécute quand l'ID change
    useEffect(() => {
        // Chercher le logement correspondant à l'ID dans le JSON
        const findHousing = logements.find((housing) => housing.id === id);

        // Si le logement existe → on met à jour l'état
        // Sinon → on redirige vers la page NotFound
        if(findHousing){
            setSelectedHousing(findHousing);
        } else {
            navigate('/notfound');
        }

    }, [id, navigate]); // Dépendances : s'exécute chaque fois que l'ID change

    // Si le logement n'est pas encore trouvé, on ne rend rien (on peut mettre un loader si nécessaire)
    if (!selectedHousing) {
        return <></>
    }

    // On récupère toutes les propriétés du logement sélectionné
    const {
        title,
        location,
        tags,
        rating,
        host,
        description,
        equipments,
        pictures
    } = selectedHousing;

    // Rendu du composant
    return (
        <>
            {/* Affiche un diaporama avec les images du logement */}
            <Slideshow pictures={pictures} />

            {/* Affiche tous les détails du logement */}
            <HousingDetails
                title={title}
                location={location}
                tags={tags}
                rating={rating}
                host={host}
                description={description}
                equipments={equipments}
            />
        </>
    )
}

// Export du composant pour utilisation dans le router
export default HousingPage
