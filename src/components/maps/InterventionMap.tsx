
import React, { useState } from 'react';
import { MapContainer, TileLayer, Circle, Marker, Popup } from 'react-leaflet';
// Fix CSS imports to use relative paths that Vite can resolve correctly
import styles from './InterventionMap.module.css';
import L from 'leaflet';
import { useIsMobile } from '@/hooks/use-mobile';
import 'leaflet-defaulticon-compatibility';

// Define marker icon to fix missing icon issue
const customIcon = L.icon({
  iconUrl: '/lovable-uploads/d257e238-9d3b-4c73-ad09-d54768c4358c.png',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
});

// Define types for our intervention zones
interface InterventionZone {
  id: number;
  name: string;
  center: [number, number];
  radiusKm: number;
  color: string;
}

// Define types for our markers
interface LocationMarker {
  id: number;
  position: [number, number];
  title: string;
  description: string;
}

// Add leaflet CSS directly in the component
const leafletStyles = `
  .leaflet-container {
    width: 100%;
    height: 100%;
    z-index: 10;
    position: relative;
  }
  
  .leaflet-div-icon {
    background: none;
    border: none;
  }
  
  .leaflet-control-container {
    z-index: 15;
  }
  
  .leaflet-control-attribution {
    display: none;
  }
`;

const InterventionMap: React.FC = () => {
  const isMobile = useIsMobile();
  
  // Define intervention zones
  const interventionZones: InterventionZone[] = [
    {
      id: 1,
      name: "Région Rhône-Alpes",
      center: [45.5, 5.3],
      radiusKm: 100,
      color: "#34873C" // fazio-dark-green
    },
    {
      id: 2,
      name: "Côte d'Azur",
      center: [43.6, 7.1],
      radiusKm: 70,
      color: "#E74747" // fazio-red
    }
  ];

  // Define location markers
  const locationMarkers: LocationMarker[] = [
    { 
      id: 1, 
      position: [45.76, 4.84], 
      title: "Lyon", 
      description: "Nos services dans le Rhône (69)" 
    },
    { 
      id: 2, 
      position: [46.2, 5.22], 
      title: "Bourg-en-Bresse", 
      description: "Nos services dans l'Ain (01)" 
    },
    { 
      id: 3, 
      position: [43.7, 7.25], 
      title: "Nice", 
      description: "Nos services dans les Alpes-Maritimes (06)" 
    },
    { 
      id: 4, 
      position: [43.12, 5.93], 
      title: "Toulon", 
      description: "Nos services dans le Var (83)" 
    }
  ];

  const [activeMarker, setActiveMarker] = useState<number | null>(null);

  const handleMarkerClick = (markerId: number) => {
    setActiveMarker(markerId);
  };

  // Convert kilometers to meters for the circle radius
  const kmToMeters = (km: number) => km * 1000;

  return (
    <div className="relative z-10 w-full h-full rounded-lg overflow-hidden shadow-lg">
      {/* Add inline styles for Leaflet */}
      <style>{leafletStyles}</style>
      
      {/* Fallback content in case map doesn't load */}
      <div className="absolute inset-0 flex items-center justify-center bg-gray-100 z-0">
        <div className="text-center p-4">
          <p className="font-bold text-fazio-dark-green">Carte des zones d'intervention</p>
          <p className="text-sm">Nous intervenons dans la Région Rhône-Alpes et sur la Côte d'Azur</p>
        </div>
      </div>

      <MapContainer
        className={styles.map}
        center={[45.5, 5.3]}
        zoom={isMobile ? 5 : 6}
        style={{ height: '100%', width: '100%', position: 'relative', zIndex: 5 }}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Render intervention zones */}
        {interventionZones.map((zone) => (
          <Circle
            key={zone.id}
            center={zone.center}
            pathOptions={{
              color: zone.color,
              fillColor: zone.color,
              fillOpacity: 0.1,
            }}
            radius={kmToMeters(zone.radiusKm)}
          >
            <Popup>{zone.name}</Popup>
          </Circle>
        ))}

        {/* Render location markers */}
        {locationMarkers.map((marker) => (
          <Marker
            key={marker.id}
            position={marker.position}
            eventHandlers={{
              click: () => handleMarkerClick(marker.id),
            }}
            icon={customIcon}
          >
            <Popup>
              <div className="text-center">
                <h3 className="font-bold text-fazio-dark-green">{marker.title}</h3>
                <p className="text-sm">{marker.description}</p>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
      
      {/* Map legend */}
      <div className="absolute bottom-3 left-3 bg-white p-2 rounded shadow z-20 text-xs">
        <h3 className="font-bold mb-1 text-fazio-dark-green">Zones d'intervention</h3>
        <div className="flex items-center mb-1">
          <div className="w-3 h-3 rounded-full mr-1" style={{backgroundColor: "#34873C"}}></div>
          <span>Rhône-Alpes</span>
        </div>
        <div className="flex items-center">
          <div className="w-3 h-3 rounded-full mr-1" style={{backgroundColor: "#E74747"}}></div>
          <span>Côte d'Azur</span>
        </div>
      </div>
    </div>
  );
};

export default InterventionMap;
