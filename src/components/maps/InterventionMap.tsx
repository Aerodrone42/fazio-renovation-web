
import React, { useState, useCallback, useMemo } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap, Circle } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import styles from './InterventionMap.module.css';
import L from 'leaflet';
import { useMobile } from '@/hooks/use-mobile';

// Define marker icon to fix missing icon issue
const defaultIcon = L.icon({
  iconUrl: '/placeholder.svg',
  iconSize: [25, 25],
  iconAnchor: [12, 12],
  popupAnchor: [0, -10]
});

// Replace default Leaflet markers
L.Marker.prototype.options.icon = defaultIcon;

// Custom icon for the primary city
const primaryIcon = L.icon({
  iconUrl: '/lovable-uploads/5195b6f4-5b5d-4610-b957-1b37a61f7fa0.png',
  iconSize: [30, 30],
  iconAnchor: [15, 15],
  popupAnchor: [0, -15],
});

interface City {
  id: number;
  name: string;
  position: [number, number];
  department: string;
  isMainCity?: boolean;
  color?: string;
}

interface InterventionZone {
  id: number;
  center: [number, number];
  radius: number;
  color: string;
  fillColor: string;
  name: string;
}

interface InterventionMapProps {
  cities?: City[];
  zones?: InterventionZone[];
  primaryCityId?: number;
  height?: string;
  initialZoom?: number;
  centerPosition?: [number, number];
  showZoneLegend?: boolean;
}

// Component to fit map bounds to all markers
const FitBoundsToMarkers = ({ cities }: { cities: City[] }) => {
  const map = useMap();

  React.useEffect(() => {
    if (cities && cities.length > 0) {
      const bounds = L.latLngBounds(cities.map(city => city.position));
      map.fitBounds(bounds, { padding: [50, 50] });
    }
  }, [cities, map]);

  return null;
};

// Component for handling selected city centering
const CenterMapOnSelectedCity = ({ 
  selectedCity, 
  zoom 
}: { 
  selectedCity: City | null, 
  zoom: number 
}) => {
  const map = useMap();

  React.useEffect(() => {
    if (selectedCity) {
      map.setView(selectedCity.position, zoom);
    }
  }, [selectedCity, map, zoom]);

  return null;
};

const InterventionMap: React.FC<InterventionMapProps> = ({
  cities = [],
  zones = [],
  primaryCityId,
  height = "500px",
  initialZoom = 9,
  centerPosition = [45.899247, 6.129384], // Default to a position in France
  showZoneLegend = false,
}) => {
  const { isMobile } = useMobile();
  const [selectedCity, setSelectedCity] = useState<City | null>(null);

  const mapHeight = isMobile ? "350px" : height;

  // Find primary city
  const primaryCity = useMemo(() => {
    if (!primaryCityId) return null;
    return cities.find(city => city.id === primaryCityId) || null;
  }, [cities, primaryCityId]);

  // Set center position to primary city if available
  const mapCenter = useMemo(() => {
    if (primaryCity) return primaryCity.position;
    return centerPosition;
  }, [primaryCity, centerPosition]);

  // Handle city click
  const handleCityClick = useCallback((city: City) => {
    setSelectedCity(city);
  }, []);

  // Custom CSS classes for the map
  const mapClassName = `rounded-lg overflow-hidden border border-gray-300 ${styles.leafletContainer}`;

  // Get unique colors for legend
  const uniqueZoneColors = useMemo(() => {
    const colorMap = new Map<string, string>();
    
    zones.forEach(zone => {
      if (!colorMap.has(zone.color)) {
        colorMap.set(zone.color, zone.name);
      }
    });
    
    return Array.from(colorMap).map(([color, name]) => ({ color, name }));
  }, [zones]);

  return (
    <div className="w-full">
      <div className={mapClassName} style={{ height: mapHeight }}>
        <MapContainer
          center={mapCenter}
          zoom={initialZoom}
          style={{ height: "100%", width: "100%" }}
          attributionControl={false}
        >
          {/* Map tile layer */}
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />

          {/* Render intervention zones */}
          {zones.map((zone) => (
            <Circle
              key={zone.id}
              center={zone.center}
              radius={zone.radius}
              pathOptions={{
                color: zone.color,
                fillColor: zone.fillColor,
                fillOpacity: 0.2,
              }}
            >
              <Popup>{zone.name}</Popup>
            </Circle>
          ))}

          {/* Render city markers */}
          {cities.map((city) => (
            <Marker
              key={city.id}
              position={city.position}
              icon={city.id === primaryCityId ? primaryIcon : defaultIcon}
              eventHandlers={{
                click: () => handleCityClick(city),
              }}
            >
              <Popup>
                <div className="text-center">
                  <strong>{city.name}</strong>
                  <div className="text-sm text-gray-600">{city.department}</div>
                </div>
              </Popup>
            </Marker>
          ))}

          {/* Fit map to markers and handle centering */}
          <FitBoundsToMarkers cities={cities} />
          {selectedCity && (
            <CenterMapOnSelectedCity selectedCity={selectedCity} zoom={11} />
          )}
        </MapContainer>
      </div>
      
      {/* Zone color legend */}
      {showZoneLegend && uniqueZoneColors.length > 0 && (
        <div className="mt-3 bg-white p-3 rounded-lg border border-gray-200 shadow-sm">
          <h4 className="text-sm font-semibold mb-2">Zones d'intervention</h4>
          <div className="grid grid-cols-2 gap-2">
            {uniqueZoneColors.map(({color, name}, index) => (
              <div key={index} className="flex items-center text-sm">
                <div
                  className="w-3 h-3 rounded-full mr-1"
                  style={{ backgroundColor: color }}
                ></div>
                <span>{name}</span>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default InterventionMap;
