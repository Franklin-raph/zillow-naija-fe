'use client';

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';

// Fix for default markers in react-leaflet
delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapProps {
  location?: [number, number];
  address?: string;
}

export default function Map({ location, address }: MapProps) {
  console.log('Map component rendered with location:', location);
  
  // Default to Lagos coordinates if no location provided
  const defaultLocation: [number, number] = [6.5244, 3.3792];
  const mapCenter = location && location.length === 2 ? location : defaultLocation;
  
  return (
    <div className="w-full h-[500px] rounded-lg overflow-hidden">
      <MapContainer 
        center={mapCenter} 
        zoom={13} 
        style={{ height: '100%', width: '100%' }}
        className="rounded-lg"
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={mapCenter}>
          <Popup>
            {location ? (address || 'Property Location') : 'Lagos, Nigeria (Default)'}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}