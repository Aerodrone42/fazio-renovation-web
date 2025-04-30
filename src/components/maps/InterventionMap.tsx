
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Rectangle, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './InterventionMap.module.css';
import L from 'leaflet';
import { useIsMobile } from '@/hooks/use-mobile';

// Fix the icon paths for Leaflet markers
const icon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

// Create custom icon for the Fazio location
const fazioIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
});

// Define main locations
const rhoneAlpesLocation = {
  name: 'Rhône-Alpes',
  coordinates: [45.750000, 4.850000] as [number, number], // Lyon as center
  description: 'Zone principale d\'intervention'
};

const alpesMaritimesLocation = {
  name: 'Alpes-Maritimes (06)',
  coordinates: [43.7102, 7.2620] as [number, number], // Nice
  description: 'Zone d\'intervention secondaire'
};

const varLocation = {
  name: 'Var (83)',
  coordinates: [43.1244, 5.9279] as [number, number], // Toulon
  description: 'Zone d\'intervention secondaire'
};

// Fazio Enterprise location
const fazioLocation = {
  name: 'Fazio Entreprise',
  coordinates: [45.750000, 4.850000] as [number, number], // Placeholder - replace with actual
  description: 'Notre siège social'
};

// Define intervention areas (approximative departmental boundaries)
const rhone = {
  name: 'Rhône (69)',
  bounds: [[45.457, 4.252], [46.057, 5.072]] as [[number, number], [number, number]], 
  color: '#e3242b' // Red for Rhône
};

const ain = {
  name: 'Ain (01)',
  bounds: [[45.608, 4.730], [46.508, 6.170]] as [[number, number], [number, number]],
  color: '#e3242b' // Red for Ain
};

const alpesMaritimes = {
  name: 'Alpes-Maritimes (06)',
  bounds: [[43.450, 6.750], [44.350, 7.750]] as [[number, number], [number, number]],
  color: '#2874A6' // Blue for Alpes-Maritimes
};

const var83 = {
  name: 'Var (83)',
  bounds: [[42.980, 5.650], [43.950, 6.950]] as [[number, number], [number, number]],
  color: '#2874A6' // Blue for Var
};

// Component to set map view
interface SetViewProps {
  center: [number, number];
  zoom: number;
}

const SetView: React.FC<SetViewProps> = ({ center, zoom }) => {
  const map = useMap();
  map.setView(center, zoom);
  return null;
};

interface InterventionMapProps {
  className?: string;
  height?: number;
  initialLocation?: 'rhone-alpes' | 'cote-azur';
}

const InterventionMap: React.FC<InterventionMapProps> = ({ 
  className = '', 
  height = 500,
  initialLocation = 'rhone-alpes'
}) => {
  const isMobile = useIsMobile();
  const initialZoom = isMobile ? 7 : 8;
  
  const centerLocation = initialLocation === 'cote-azur' 
    ? [43.5000, 6.5000] as [number, number] // Between Nice and Toulon
    : rhoneAlpesLocation.coordinates;

  return (
    <div className={`${className} ${styles['leaflet-container']}`}>
      <MapContainer 
        style={{ height: `${height}px`, width: '100%', borderRadius: '0.5rem' }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        
        <SetView center={centerLocation} zoom={initialZoom} />
        
        {/* Intervention areas */}
        <Rectangle bounds={rhone.bounds} pathOptions={{ color: rhone.color, fillOpacity: 0.2, weight: 2 }}>
          <Popup>
            <div className="font-bold">{rhone.name}</div>
            <div>Zone principale d'intervention</div>
          </Popup>
        </Rectangle>
        
        <Rectangle bounds={ain.bounds} pathOptions={{ color: ain.color, fillOpacity: 0.2, weight: 2 }}>
          <Popup>
            <div className="font-bold">{ain.name}</div>
            <div>Zone principale d'intervention</div>
          </Popup>
        </Rectangle>

        <Rectangle bounds={alpesMaritimes.bounds} pathOptions={{ color: alpesMaritimes.color, fillOpacity: 0.2, weight: 2 }}>
          <Popup>
            <div className="font-bold">{alpesMaritimes.name}</div>
            <div>Zone secondaire d'intervention</div>
          </Popup>
        </Rectangle>

        <Rectangle bounds={var83.bounds} pathOptions={{ color: var83.color, fillOpacity: 0.2, weight: 2 }}>
          <Popup>
            <div className="font-bold">{var83.name}</div>
            <div>Zone secondaire d'intervention</div>
          </Popup>
        </Rectangle>

        {/* City markers */}
        <Marker position={[45.750000, 4.850000]}>
          <Popup>
            <div className="font-bold">Lyon</div>
            <div>Capitale des Gaules</div>
          </Popup>
        </Marker>
        
        <Marker position={[45.766944, 4.8775]}>
          <Popup>
            <div className="font-bold">Villeurbanne</div>
            <div>Ville limitrophe de Lyon</div>
          </Popup>
        </Marker>

        <Marker position={[45.983333, 4.716667]}>
          <Popup>
            <div className="font-bold">Villefranche-sur-Saône</div>
            <div>Capitale du Beaujolais</div>
          </Popup>
        </Marker>

        <Marker position={[46.205, 5.2278]}>
          <Popup>
            <div className="font-bold">Bourg-en-Bresse</div>
            <div>Préfecture de l'Ain</div>
          </Popup>
        </Marker>

        <Marker position={[46.2536, 5.6558]}>
          <Popup>
            <div className="font-bold">Oyonnax</div>
            <div>Centre industriel</div>
          </Popup>
        </Marker>

        <Marker position={[45.9572, 5.3592]}>
          <Popup>
            <div className="font-bold">Ambérieu-en-Bugey</div>
            <div>Porte du Bugey</div>
          </Popup>
        </Marker>

        <Marker position={[43.7102, 7.2620]}>
          <Popup>
            <div className="font-bold">Nice</div>
            <div>Chef-lieu des Alpes-Maritimes</div>
          </Popup>
        </Marker>

        <Marker position={[43.5515, 7.0134]}>
          <Popup>
            <div className="font-bold">Cannes</div>
            <div>Ville du Festival</div>
          </Popup>
        </Marker>

        <Marker position={[43.1244, 5.9279]}>
          <Popup>
            <div className="font-bold">Toulon</div>
            <div>Préfecture du Var</div>
          </Popup>
        </Marker>
        
        <Marker position={[43.2728, 6.6389]}>
          <Popup>
            <div className="font-bold">Saint-Tropez</div>
            <div>Station balnéaire</div>
          </Popup>
        </Marker>

        {/* Add Le Lavandou marker */}
        <Marker position={[43.1390, 6.3680]}>
          <Popup>
            <div className="font-bold">Le Lavandou</div>
            <div>Station balnéaire du Var</div>
          </Popup>
        </Marker>
        
        {/* Fazio location */}
        <Marker position={fazioLocation.coordinates}>
          <Popup>
            <div className="font-bold">Fazio Entreprise</div>
            <div>Votre expert en carrelage et rénovation</div>
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default InterventionMap;
