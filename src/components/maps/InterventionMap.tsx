
import React from 'react';
import { MapContainer, TileLayer, Polygon, Marker, Tooltip } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './InterventionMap.module.css';
import L from 'leaflet';

// Define icon for markers
const createCustomIcon = () => {
  return L.icon({
    iconUrl: 'https://cdn-icons-png.flaticon.com/512/25/25613.png',
    iconSize: [38, 38],
    iconAnchor: [19, 38],
    popupAnchor: [0, -38],
  });
};

interface InterventionMapProps {
  height?: number;
  className?: string;
}

// Polygon coordinates for main service areas
const rhoneAlpes = [
  [45.9, 4.7], // Northwest corner
  [45.9, 5.4], // Northeast corner
  [45.6, 5.4], // Southeast corner
  [45.6, 4.7], // Southwest corner
];

const var83 = [
  [43.6, 6.2],
  [43.6, 6.9],
  [43.1, 6.9],
  [43.1, 6.2],
];

const alpesMaritimes = [
  [44.1, 7.0],
  [44.1, 7.6],
  [43.7, 7.6],
  [43.7, 7.0],
];

// Location of headquarters
const headquarters: [number, number] = [45.85, 5.1]; // Example coordinates for Lyon area

const InterventionMap: React.FC<InterventionMapProps> = ({ height = 300, className = '' }) => {
  return (
    <div className={`rounded-lg overflow-hidden border-none ${className}`} style={{ height: `${height}px` }}>
      <MapContainer 
        center={[44.9, 6.0]} 
        zoom={6} 
        style={{ height: '100%', width: '100%', borderRadius: '0.5rem' }}
        scrollWheelZoom={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        
        {/* Rhône-Alpes region */}
        <Polygon 
          positions={rhoneAlpes}
          pathOptions={{
            fillColor: '#315133',
            fillOpacity: 0.6,
            weight: 2,
            opacity: 0.8
          }}
        >
          <Tooltip direction="center">
            Rhône-Alpes
          </Tooltip>
        </Polygon>
        
        {/* Var region */}
        <Polygon 
          positions={var83}
          pathOptions={{
            fillColor: '#db2e42',
            fillOpacity: 0.5,
            weight: 2,
            opacity: 0.8
          }}
        >
          <Tooltip direction="center">
            Var (83)
          </Tooltip>
        </Polygon>
        
        {/* Alpes-Maritimes region */}
        <Polygon 
          positions={alpesMaritimes}
          pathOptions={{
            fillColor: '#db2e42',
            fillOpacity: 0.5,
            weight: 2,
            opacity: 0.8
          }}
        >
          <Tooltip direction="center">
            Alpes-Maritimes (06)
          </Tooltip>
        </Polygon>

        {/* Marker for company headquarters */}
        <Marker 
          position={headquarters}
          icon={createCustomIcon()}
        >
          <Tooltip direction="top">
            Siège - Dagneux (01)
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InterventionMap;
