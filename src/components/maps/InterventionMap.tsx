
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, Tooltip } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './InterventionMap.module.css';

// Override default icon paths
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png'
});

// Custom Icon
const customIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  shadowSize: [41, 41],
  shadowAnchor: [12, 41]
});

// Fazio Icon
const fazioIcon = L.icon({
  iconUrl: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMzIiIGhlaWdodD0iMzIiIHZpZXdCb3g9IjAgMCAzMiAzMiIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPGNpcmNsZSBjeD0iMTYiIGN5PSIxNiIgcj0iMTQiIGZpbGw9IiNDNjNDM0MiLz4KPHBhdGggZD0iTTExIDEyTDEzIDIwSDE5TDIxIDEyIiBzdHJva2U9IndoaXRlIiBzdHJva2Utd2lkdGg9IjIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgo8cGF0aCBkPSJNOCAxNkgyMyIgc3Ryb2tlPSJ3aGl0ZSIgc3Ryb2tlLXdpZHRoPSIyIiBzdHJva2UtbGluZWNhcD0icm91bmQiLz4KPC9zdmc+Cg==',
  iconSize: [32, 32],
  iconAnchor: [16, 32],
  popupAnchor: [0, -32],
  tooltipAnchor: [16, -16],
});

interface InterventionLocation {
  name: string;
  coordinates: [number, number];
  isFazio?: boolean;
}

interface InterventionMapProps {
  locations?: InterventionLocation[];
  centerLocation?: [number, number];
  initialZoom?: number;
  height?: number;
  className?: string;
}

const InterventionMap: React.FC<InterventionMapProps> = ({
  locations = [],
  centerLocation = [48.8566, 2.3522], // Default: Paris
  initialZoom = 13,
  height = 500,
  className = '',
}) => {
  // Add Fazio location
  const fazioLocation: InterventionLocation = {
    name: 'Fazio Entreprise',
    coordinates: [48.8566, 2.3522], // Paris
    isFazio: true
  };
  
  const allLocations = [...locations];
  
  return (
    <MapContainer 
      className={`${className} ${styles['leaflet-container']}`}
      scrollWheelZoom={false}
      style={{ height: `${height}px`, width: '100%', borderRadius: '0.5rem' }}
      zoom={initialZoom}
      center={centerLocation}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      
      {/* Client intervention zones */}
      {allLocations.map((location, index) => (
        <Marker 
          key={`${location.name}-${index}`}
          position={location.coordinates}
        >
          <Tooltip>
            {location.name}
          </Tooltip>
        </Marker>
      ))}
      
      {/* Specific neighborhoods */}
      <Marker position={[48.8698, 2.3461]}>
        <Tooltip>
          9ème arrondissement
        </Tooltip>
      </Marker>
      
      <Marker position={[48.8550, 2.3254]}>
        <Tooltip>
          6ème arrondissement
        </Tooltip>
      </Marker>
      
      <Marker position={[48.8744, 2.3526]}>
        <Tooltip>
          10ème arrondissement
        </Tooltip>
      </Marker>
      
      {/* Fazio location */}
      <Marker position={fazioLocation.coordinates}>
        <Tooltip>
          {fazioLocation.name}
        </Tooltip>
      </Marker>
    </MapContainer>
  );
};

export default InterventionMap;
