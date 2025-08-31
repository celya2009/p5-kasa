// On importe les données et les composants nécessaires
import logements from "../../data/logements.json"; // Liste des logements
import Slideshow from "../../components/Slideshow/Slideshow";  // Composant pour le diaporama d'images
import { useParams } from "react-router-dom";  // Pour récupérer les paramètres dans l'URL
import { useEffect , useState } from "react"; // Hooks React pour gérer état et effets
import { useNavigate } from "react-router"; // Pour rediriger l'utilisateur
import HousingDetails from "../../components/HousingDetails/HousingDetails"; // Composant pour détails du logement



const HousingPage = () => {
    // 1.Récupérer l'ID du logement depuis l'URL (ex: /housing/123 → id = "123")
    const { id } = useParams();
    // 2. Instancier le hook de navigation
    // ➜ Permet de rediriger l'utilisateur vers une autre page de l'application via le code (ex: après une erreur=no found, une action ou un clic)
    const navigate = useNavigate()

     // 3. Créer un état pour stocker le logement sélectionné
    const [selectedHousing, setSelectedHousing] = useState(null);

    // 4. useEffect : s'exécute quand l'ID change
    useEffect(() => {
        // 2.Chercher le logement dans la data correspondant à l'ID dans la liste
        const findHousing = logements.find((housing) => housing.id === id);

       // Si le logement existe → on met à jour l'état
        // Sinon → on redirige vers la page NotFound
        if(findHousing){
            setSelectedHousing(findHousing);
        } else {
            navigate('/notfound');
        }

    }, [id, navigate]); // Dépendance : s'exécute chaque fois que l'ID change


// Si le logement n'est pas encore trouvé, on ne rend rien
    if (!selectedHousing) {
        return <></> // On peut aussi mettre un loader si tu veux
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
            < Slideshow
                pictures={pictures}
            />
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

export default HousingPage // Export pour utilisation dans le router