
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Polygon } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './InterventionMap.module.css';

// Define types for our marker data
interface MarkerData {
  id: string;
  position: [number, number];
  title: string;
  content?: string;
}

// Define types for our zone data
interface ZoneData {
  id: string;
  name: string;
  color: string;
  positions: [number, number][];
}

// Component to set the view when selected marker changes
const ChangeView = ({ center, zoom }: { center: [number, number], zoom: number }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

// Création d'une icône personnalisée pour éviter le problème "Mark"
const createCustomIcon = () => {
  return L.divIcon({
    className: "custom-marker-icon",
    iconSize: [25, 25],
    iconAnchor: [12, 25],
    popupAnchor: [0, -25],
    html: `<div class="w-4 h-4 rounded-full bg-fazio-red border-2 border-white"></div>`
  });
};

const InterventionMap: React.FC = () => {
  // Define initial center of map (Lyon, France)
  const defaultCenter: [number, number] = [45.764043, 4.835659];
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [center, setCenter] = useState<[number, number]>(defaultCenter);
  const [zoom, setZoom] = useState(9);
  const customIcon = createCustomIcon();

  // Define our markers
  const markers: MarkerData[] = [
    {
      id: "lyon",
      position: [45.764043, 4.835659],
      title: "Lyon",
      content: "Notre équipe de carreleurs intervient dans tout Lyon et son agglomération."
    },
    {
      id: "villefranche",
      position: [45.9828, 4.7194],
      title: "Villefranche-sur-Saône",
      content: "Service de pose de carrelage et rénovation disponible à Villefranche."
    },
    {
      id: "bourg",
      position: [46.2047, 5.2258],
      title: "Bourg-en-Bresse",
      content: "Intervention pour tous vos projets de carrelage à Bourg-en-Bresse."
    },
    {
      id: "amberieu",
      position: [45.9569, 5.3572],
      title: "Ambérieu-en-Bugey",
      content: "Service de pose de carrelage et rénovation."
    },
    {
      id: "meximieux",
      position: [45.9026, 5.1933],
      title: "Meximieux",
      content: "Intervention pour tous vos projets de carrelage."
    },
    {
      id: "miribel",
      position: [45.8237, 4.9597],
      title: "Miribel",
      content: "Service de pose de carrelage et rénovation."
    },
    {
      id: "montluel",
      position: [45.8581, 5.0594],
      title: "Montluel",
      content: "Intervention pour tous vos projets de carrelage."
    },
    {
      id: "dagneux",
      position: [45.8428, 5.0892],
      title: "Dagneux",
      content: "Service de pose de carrelage et rénovation."
    },
    {
      id: "trevoux",
      position: [45.9408, 4.7772],
      title: "Trévoux",
      content: "Intervention pour tous vos projets de carrelage."
    },
    {
      id: "beynost",
      position: [45.8336, 4.9872],
      title: "Beynost",
      content: "Service de pose de carrelage et rénovation."
    }
  ];

  // Define our zones
  const zones: ZoneData[] = [
    {
      id: "ain",
      name: "Ain",
      color: "#C63C3C",
      positions: [
        [46.3, 5.0], // NW corner
        [46.3, 5.6], // NE corner
        [45.7, 5.6], // SE corner
        [45.7, 5.0]  // SW corner
      ]
    },
    {
      id: "ouest-lyonnais",
      name: "Ouest Lyonnais",
      color: "#2C5F4D",
      positions: [
        [45.9, 4.6], // NW corner
        [45.9, 4.8], // NE corner
        [45.7, 4.8], // SE corner
        [45.7, 4.6]  // SW corner
      ]
    },
    {
      id: "alpes-maritimes",
      name: "Alpes-Maritimes",
      color: "#9b87f5",
      positions: [
        [44.0, 6.9], // NW corner
        [44.0, 7.2], // NE corner
        [43.5, 7.2], // SE corner
        [43.5, 6.9]  // SW corner
      ]
    },
    {
      id: "var",
      name: "Var",
      color: "#7E69AB",
      positions: [
        [43.5, 6.2], // NW corner
        [43.5, 6.7], // NE corner
        [43.1, 6.7], // SE corner
        [43.1, 6.2]  // SW corner
      ]
    }
  ];

  // Update center and zoom when activeMarker changes
  useEffect(() => {
    if (activeMarker) {
      const marker = markers.find(m => m.id === activeMarker);
      if (marker) {
        setCenter(marker.position);
        setZoom(12);
      }
    } else {
      setCenter(defaultCenter);
      setZoom(9);
    }
  }, [activeMarker]);

  return (
    <div className={styles.mapContainer}>
      <MapContainer 
        className="rounded-lg border-2 border-gray-200"
        style={{ height: '400px', width: '100%', zIndex: 1 }}
        center={defaultCenter}
        zoom={zoom}
        scrollWheelZoom={false}
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Render zones as polygons */}
        {zones.map(zone => (
          <Polygon
            key={zone.id}
            pathOptions={{ 
              fillColor: zone.color, 
              fillOpacity: 0.2, 
              weight: 2, 
              color: zone.color,
              opacity: 0.6 
            }}
            positions={zone.positions}
          >
            <Popup>
              <div>
                <h3 className="font-bold text-lg">{zone.name}</h3>
                <p className="text-sm">Zone d'intervention</p>
              </div>
            </Popup>
          </Polygon>
        ))}
        
        {/* Render markers with custom icon */}
        {markers.map(marker => (
          <Marker 
            key={marker.id} 
            position={marker.position}
            icon={customIcon}
            eventHandlers={{
              click: () => {
                setActiveMarker(marker.id);
              },
            }}
          >
            <Popup>
              <div>
                <h3 className="font-bold text-lg">{marker.title}</h3>
                {marker.content && <p className="text-sm mt-1">{marker.content}</p>}
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Légende pour les zones */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm">
        {zones.map(zone => (
          <div key={zone.id} className="flex items-center">
            <div 
              className="w-4 h-4 mr-2" 
              style={{ backgroundColor: zone.color, opacity: 0.6 }}
            ></div>
            <span>{zone.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterventionMap;
