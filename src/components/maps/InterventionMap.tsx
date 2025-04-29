
import React from 'react';
import { MapContainer, TileLayer, Polygon, Tooltip, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { divIcon } from 'leaflet';
import { MapPin } from 'lucide-react';
import './InterventionMap.module.css';

// Fix for Leaflet marker icons
import L from 'leaflet';
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
});

// Department borders (simplified coordinates)
const rhoneAlpes = [
  [45.1, 4.3], // South-west corner
  [45.1, 7.2], // South-east corner
  [46.8, 7.2], // North-east corner
  [46.8, 4.3], // North-west corner
];

const var83 = [
  [43.1, 5.8], // South-west corner 
  [43.1, 6.9], // South-east corner
  [43.8, 6.9], // North-east corner
  [43.8, 5.8], // North-west corner
];

const alpesMaritimes06 = [
  [43.5, 6.7], // South-west corner
  [43.5, 7.7], // South-east corner
  [44.3, 7.7], // North-east corner
  [44.3, 6.7], // North-west corner
];

// Company headquarters
const headquarters = [45.8369713, 5.0807483]; // Dagneux coordinates

type InterventionMapProps = {
  className?: string;
  height?: number;
};

const InterventionMap: React.FC<InterventionMapProps> = ({ 
  className = "",
  height = 400
}) => {
  const createCustomIcon = () => {
    // Return a leaflet divIcon
    return divIcon({
      html: `<div class="flex items-center justify-center bg-fazio-red text-white rounded-full p-1.5 shadow-md w-6 h-6">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/><circle cx="12" cy="10" r="3"/></svg>
      </div>`,
      className: '',
      iconSize: [24, 24],
      iconAnchor: [12, 24],
    });
  };

  return (
    <div className={`rounded-lg overflow-hidden border-none h-[${height}px] ${className}`}>
      <MapContainer 
        defaultCenter={[44.9, 6.0]} 
        defaultZoom={6} 
        style={{ height: height, width: '100%', borderRadius: '0.5rem' }}
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
            fillColor: '#388E3C', 
            fillOpacity: 0.3, 
            weight: 2,
            color: '#388E3C',
            opacity: 0.8
          }}
        >
          <Tooltip permanent>
            Rhône-Alpes
          </Tooltip>
        </Polygon>
        
        {/* Var (83) department */}
        <Polygon 
          positions={var83} 
          pathOptions={{ 
            fillColor: '#1976D2', 
            fillOpacity: 0.3, 
            weight: 2,
            color: '#1976D2',
            opacity: 0.8
          }}
        >
          <Tooltip permanent>
            Var (83)
          </Tooltip>
        </Polygon>
        
        {/* Alpes-Maritimes (06) department */}
        <Polygon 
          positions={alpesMaritimes06} 
          pathOptions={{ 
            fillColor: '#E53935', 
            fillOpacity: 0.3, 
            weight: 2,
            color: '#E53935',
            opacity: 0.8
          }}
        >
          <Tooltip permanent>
            Alpes-Maritimes (06)
          </Tooltip>
        </Polygon>

        {/* Marker for company headquarters */}
        <Marker position={headquarters}>
          <Tooltip permanent>
            Siège - Dagneux (01)
          </Tooltip>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InterventionMap;
