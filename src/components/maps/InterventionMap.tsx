
import React, { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, Polygon, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import styles from './InterventionMap.module.css';

// Define types for our data
interface MarkerData {
  id: string;
  position: [number, number];
  title: string;
  popupContent: string;
}

interface ZoneData {
  id: string;
  name: string;
  color: string;
  positions: [number, number][];
}

// ChangeView component to control map behavior
const ChangeView = ({ center, zoom }: { center: [number, number]; zoom: number }) => {
  const map = useMap();
  useEffect(() => {
    map.setView(center, zoom);
  }, [center, zoom, map]);
  
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
    // Ain
    { 
      id: "bourg-en-bresse", 
      position: [46.205167, 5.225501], 
      title: "Bourg-en-Bresse", 
      popupContent: "Interventions à Bourg-en-Bresse et alentours" 
    },
    { 
      id: "dagneux", 
      position: [45.851944, 5.091944], 
      title: "Dagneux", 
      popupContent: "Interventions à Dagneux et alentours" 
    },
    { 
      id: "trevoux", 
      position: [45.940000, 4.773889], 
      title: "Trévoux", 
      popupContent: "Interventions à Trévoux et alentours" 
    },
    { 
      id: "oyonnax", 
      position: [46.254722, 5.657778], 
      title: "Oyonnax", 
      popupContent: "Interventions à Oyonnax et alentours" 
    },
    
    // Ouest Lyonnais
    { 
      id: "ecully", 
      position: [45.783333, 4.766667], 
      title: "Écully", 
      popupContent: "Interventions à Écully et alentours" 
    },
    { 
      id: "tassin", 
      position: [45.763889, 4.731111], 
      title: "Tassin-la-Demi-Lune", 
      popupContent: "Interventions à Tassin-la-Demi-Lune et alentours" 
    },
    { 
      id: "dardilly", 
      position: [45.817222, 4.758889], 
      title: "Dardilly", 
      popupContent: "Interventions à Dardilly et alentours" 
    },
    
    // Alpes-Maritimes
    { 
      id: "nice", 
      position: [43.700000, 7.250000], 
      title: "Nice", 
      popupContent: "Interventions à Nice et alentours" 
    },
    { 
      id: "cannes", 
      position: [43.550000, 7.016667], 
      title: "Cannes", 
      popupContent: "Interventions à Cannes et alentours" 
    },
    { 
      id: "antibes", 
      position: [43.583333, 7.116667], 
      title: "Antibes", 
      popupContent: "Interventions à Antibes et alentours" 
    },
    
    // Var
    { 
      id: "toulon", 
      position: [43.124228, 5.928000], 
      title: "Toulon", 
      popupContent: "Interventions à Toulon et alentours" 
    },
    { 
      id: "frejus", 
      position: [43.433333, 6.733333], 
      title: "Fréjus", 
      popupContent: "Interventions à Fréjus et alentours" 
    },
    { 
      id: "hyeres", 
      position: [43.116667, 6.116667], 
      title: "Hyères", 
      popupContent: "Interventions à Hyères et alentours" 
    },
  ];

  // Define our service zones
  const zones: ZoneData[] = [
    {
      id: "ain",
      name: "Ain (01)",
      color: "#C63C3C", // Fazio red
      positions: [
        [46.4242, 4.7357],
        [46.4242, 5.9995],
        [45.6102, 5.9995],
        [45.6102, 4.7357],
      ],
    },
    {
      id: "ouest-lyonnais",
      name: "Ouest Lyonnais",
      color: "#2C5F4D", // Fazio green
      positions: [
        [45.9, 4.45],
        [45.9, 4.85],
        [45.65, 4.85],
        [45.65, 4.45],
      ],
    },
    {
      id: "alpes-maritimes",
      name: "Alpes-Maritimes (06)",
      color: "#D8B48D", // Fazio beige
      positions: [
        [44.1, 6.63],
        [44.1, 7.58],
        [43.48, 7.58],
        [43.48, 6.63],
      ],
    },
    {
      id: "var",
      name: "Var (83)",
      color: "#E07557", // Fazio light red
      positions: [
        [43.56, 5.65],
        [43.56, 6.93],
        [42.98, 6.93],
        [42.98, 5.65],
      ],
    },
  ];

  return (
    <div className="animate-fade-in">
      <MapContainer 
        className="rounded-lg border-2 border-gray-200"
        style={{ height: '400px', width: '100%', zIndex: 1 }}
      >
        <ChangeView center={center} zoom={zoom} />
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        {/* Render service zones */}
        {zones.map(zone => (
          <Polygon 
            key={zone.id}
            positions={zone.positions}
            pathOptions={{ 
              color: zone.color, 
              fillColor: zone.color,
              fillOpacity: 0.4,
              weight: 2
            }}
            eventHandlers={{
              click: () => {
                const centerY = (Math.min(...zone.positions.map(pos => pos[0])) + 
                                 Math.max(...zone.positions.map(pos => pos[0]))) / 2;
                const centerX = (Math.min(...zone.positions.map(pos => pos[1])) + 
                                 Math.max(...zone.positions.map(pos => pos[1]))) / 2;
                setCenter([centerY, centerX]);
                setZoom(9);
              }
            }}
          >
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
                setCenter(marker.position);
                setZoom(11);
              }
            }}
          >
            <Popup>
              <div className="font-semibold">{marker.title}</div>
              <div>{marker.popupContent}</div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>

      {/* Légende pour les zones */}
      <div className="mt-4 flex flex-wrap gap-4 justify-center text-sm animate-fade-in">
        {zones.map((zone, index) => (
          <div 
            key={zone.id} 
            className="flex items-center transition-transform hover:scale-105" 
            style={{ animationDelay: `${index * 100}ms` }}
          >
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
