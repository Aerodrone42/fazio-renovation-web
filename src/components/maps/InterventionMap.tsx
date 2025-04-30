import React from 'react';
import { MapContainer, TileLayer, Popup, Marker, useMap } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './InterventionMap.module.css';

// Correction du problème d'icône Leaflet
// On doit créer les icônes avec Leaflet directement et non comme prop de <Marker>
const markerIcon = new L.Icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Composants pour la mise à jour de la vue
interface SetViewProps {
  coordinates: [number, number];
  zoom: number;
}

const SetViewOnLoad = ({ coordinates, zoom }: SetViewProps) => {
  const map = useMap();
  React.useEffect(() => {
    map.setView(coordinates, zoom);
  }, [coordinates, zoom, map]);
  return null;
};

// Attribution des classes pour les styles
const mapContainerProps = {
  className: styles.map,
  style: { height: '500px', width: '100%', zIndex: 0 },
};

// Type pour les villes d'intervention
interface City {
  name: string;
  position: [number, number];
  description?: string;
}

const InterventionMap: React.FC = () => {
  const [selectedCity, setSelectedCity] = React.useState<City | null>(null);

  // Lyon est la ville centrale par défaut
  const defaultCenter: [number, number] = [45.764043, 4.835659];
  const defaultZoom = 9;
  
  // Liste des principales villes d'intervention
  const cities: City[] = [
    {
      name: "Lyon",
      position: [45.764043, 4.835659],
      description: "Prestations de carrelage et rénovation dans la capitale des Gaules"
    },
    {
      name: "Villeurbanne",
      position: [45.7667, 4.8833],
      description: "Services de carrelage et revêtements pour particuliers et professionnels"
    },
    {
      name: "Villefranche-sur-Saône",
      position: [45.9833, 4.7167],
      description: "Installation de carrelage, pierre et marbre dans la capitale du Beaujolais"
    },
    {
      name: "Bourg-en-Bresse",
      position: [46.2056, 5.2281],
      description: "Rénovation de salles de bain et pose de carrelage dans la préfecture de l'Ain"
    },
    {
      name: "Mâcon", 
      position: [46.3067, 4.8278],
      description: "Pose de mosaïque et carrelage dans la cité bourguignonne"
    },
    {
      name: "Oyonnax",
      position: [46.2572, 5.6567],
      description: "Installation de revêtements de sol et douche à l'italienne"
    },
    {
      name: "Ambérieu-en-Bugey",
      position: [45.9547, 5.3606],
      description: "Travaux de carrelage intérieur et extérieur dans le Bugey"
    },
    {
      name: "Beynost",
      position: [45.8347, 4.9992],
      description: "Pose de carrelage, rénovation de salle de bain et cuisine"
    },
    {
      name: "Miribel",
      position: [45.8256, 4.9550],
      description: "Installation de carrelage grand format et mosaïque"
    },
    {
      name: "Montluel",
      position: [45.8578, 5.0573],
      description: "Travaux de rénovation et pose de revêtements en pierre naturelle"
    },
    {
      name: "Meximieux",
      position: [45.9050, 5.1931],
      description: "Pose de carrelage intérieur, extérieur et pour piscines"
    },
    {
      name: "Trévoux",
      position: [45.9404, 4.7730],
      description: "Travaux de carrelage, pierre et faïence dans la cité médiévale"
    }
  ];

  // Fonction pour centrer la carte sur une ville
  const handleCityClick = (city: City) => {
    setSelectedCity(city);
  };

  // Fonction pour réinitialiser la vue
  const handleResetView = () => {
    setSelectedCity(null);
  };

  return (
    <div className="map-container">
      <MapContainer {...mapContainerProps} center={defaultCenter} zoom={defaultZoom} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Mise à jour dynamique de la vue */}
        <SetViewOnLoad 
          coordinates={selectedCity ? selectedCity.position : defaultCenter} 
          zoom={selectedCity ? 13 : defaultZoom} 
        />
        
        {/* Marqueurs des villes */}
        {cities.map((city) => (
          <Marker 
            key={city.name}
            position={city.position}
            icon={markerIcon}
          >
            <Popup>
              <div>
                <h3 className="font-bold">{city.name}</h3>
                <p>{city.description || `Services de carrelage et rénovation à ${city.name}`}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Liste des villes cliquables */}
      <div className="cities-list grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 mt-4">
        {cities.map((city) => (
          <button
            key={city.name}
            onClick={() => handleCityClick(city)}
            className={`px-3 py-1 text-sm rounded ${
              selectedCity?.name === city.name
                ? "bg-fazio-red text-white"
                : "bg-gray-100 hover:bg-gray-200"
            }`}
          >
            {city.name}
          </button>
        ))}
        {selectedCity && (
          <button
            onClick={handleResetView}
            className="px-3 py-1 text-sm rounded bg-fazio-dark-green text-white hover:bg-opacity-90"
          >
            Vue d'ensemble
          </button>
        )}
      </div>
    </div>
  );
};

export default InterventionMap;
