
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
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

// Create a custom icon for our markers
const customIcon = new L.Icon({
  iconUrl: '/lovable-uploads/1b3b9e35-ec04-42c4-b14a-4fdfe2d6b954.png',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
  popupAnchor: [0, -40]
});

// Component to set the view when selected marker changes
const ChangeView = ({ center, zoom }: { center: L.LatLngExpression, zoom: number }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

const InterventionMap: React.FC = () => {
  // Define initial center of map (Lyon, France)
  const defaultCenter: [number, number] = [45.764043, 4.835659];
  const [activeMarker, setActiveMarker] = useState<string | null>(null);
  const [center, setCenter] = useState<[number, number]>(defaultCenter);
  const [zoom, setZoom] = useState(9);

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
        center={center}
        zoom={zoom}
        doubleClickZoom={true}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
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
    </div>
  );
};

export default InterventionMap;
