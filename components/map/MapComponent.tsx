'use client';
import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Property } from '@/types';
import { MapPin, BedDouble, Bath, Maximize2, ExternalLink } from 'lucide-react';

interface Props {
  properties: Property[];
  height?: string;
  showFilters?: boolean;
}

const typeLabels: Record<string, string> = {
  villa: 'فيلا', apartment: 'شقة', land: 'أرض', commercial: 'تجاري', duplex: 'دبلكس', compound: 'كمبوند',
};

export default function MapComponent({ properties, height = '600px', showFilters = false }: Props) {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<any>(null);
  const markersRef = useRef<any[]>([]);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined' || !mapRef.current) return;

    import('leaflet').then((L) => {
      if (mapInstanceRef.current) return;

      // Custom icon factory
      const createIcon = (color = '#0A1628') => L.divIcon({
        className: 'custom-marker',
        html: `
          <div style="
            width: 36px; height: 36px;
            background: ${color};
            border: 3px solid #c9a96e;
            border-radius: 50% 50% 50% 0;
            transform: rotate(-45deg);
            display: flex; align-items: center; justify-content: center;
            box-shadow: 0 4px 15px rgba(0,0,0,0.3);
            cursor: pointer;
            transition: transform 0.2s;
          ">
            <span style="transform: rotate(45deg); font-size: 14px; color: #c9a96e;">🏠</span>
          </div>`,
        iconSize: [36, 36],
        iconAnchor: [18, 36],
        popupAnchor: [0, -38],
      });

      const map = L.map(mapRef.current!, {
        center: [24.7136, 46.6753],
        zoom: 11,
        zoomControl: false,
      });

      // Tile layer - CartoDB Positron (no API key)
      L.tileLayer('https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
        subdomains: 'abcd',
        maxZoom: 20,
      }).addTo(map);

      // Custom zoom control position
      L.control.zoom({ position: 'bottomleft' }).addTo(map);

      // Add markers
      properties.forEach((property) => {
        if (!property.location.lat || !property.location.lng) return;

        const marker = L.marker(
          [property.location.lat, property.location.lng],
          { icon: createIcon() }
        ).addTo(map);

        const popupContent = `
          <div dir="rtl" style="width: 260px; font-family: Cairo, sans-serif; overflow: hidden; border-radius: 12px;">
            <div style="position: relative; height: 140px; overflow: hidden;">
              <img src="${property.images[0]?.url}" alt="${property.title}"
                style="width: 100%; height: 100%; object-fit: cover;" />
              <div style="position: absolute; top: 8px; right: 8px; background: #0A1628; color: #c9a96e;
                padding: 2px 10px; border-radius: 20px; font-size: 11px; font-weight: 700;">
                ${property.status === 'for-sale' ? 'للبيع' : 'للإيجار'}
              </div>
            </div>
            <div style="padding: 14px;">
              <h3 style="font-weight: 800; font-size: 14px; color: #0A1628; margin-bottom: 6px; line-height: 1.4;">
                ${property.title}
              </h3>
              <p style="color: #9ca3af; font-size: 11px; margin-bottom: 8px; display: flex; align-items: center; gap: 4px;">
                📍 ${property.location.district}، ${property.location.city}
              </p>
              <div style="display: flex; gap: 12px; margin-bottom: 10px; font-size: 11px; color: #6b7280;">
                ${property.bedrooms > 0 ? `<span>🛏 ${property.bedrooms} غرف</span>` : ''}
                ${property.bathrooms > 0 ? `<span>🚿 ${property.bathrooms} حمام</span>` : ''}
                <span>📐 ${property.area} م²</span>
              </div>
              <div style="display: flex; align-items: center; justify-content: space-between; border-top: 1px solid #f0f0f0; padding-top: 10px;">
                <div>
                  <p style="font-size: 10px; color: #9ca3af;">السعر</p>
                  <p style="font-weight: 900; color: #0A1628; font-size: 15px;">
                    ${property.price.toLocaleString('ar-SA')} <span style="font-size: 10px; font-weight: 400;">${property.priceUnit}</span>
                  </p>
                </div>
                <div style="display: flex; gap: 6px;">
                  <a href="https://wa.me/966500000000?text=أود الاستفسار عن ${encodeURIComponent(property.title)}"
                    target="_blank"
                    style="background: #25D366; color: white; padding: 6px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; text-decoration: none; display: flex; align-items: center; gap: 4px;">
                    واتساب
                  </a>
                  <a href="/properties/${property.id}"
                    style="background: #0A1628; color: white; padding: 6px 10px; border-radius: 8px; font-size: 11px; font-weight: 700; text-decoration: none;">
                    التفاصيل
                  </a>
                </div>
              </div>
            </div>
          </div>`;

        marker.bindPopup(popupContent, {
          maxWidth: 280,
          minWidth: 260,
          closeButton: true,
          className: 'custom-popup',
        });

        marker.on('click', () => setSelectedProperty(property));
        markersRef.current.push(marker);
      });

      mapInstanceRef.current = map;
      setIsLoaded(true);
    });

    return () => {
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, []);

  // Update markers when properties change
  useEffect(() => {
    if (!mapInstanceRef.current || !isLoaded) return;
  }, [properties, isLoaded]);

  return (
    <div className="relative rounded-2xl overflow-hidden border border-gray-200 shadow-luxury">
      {!isLoaded && (
        <div className="absolute inset-0 bg-gray-100 flex items-center justify-center z-20">
          <div className="text-center">
            <div className="w-12 h-12 border-4 border-navy-900 border-t-gold-500 rounded-full animate-spin mx-auto mb-3"></div>
            <p className="text-navy-900 font-medium text-sm">جاري تحميل الخريطة...</p>
          </div>
        </div>
      )}

      <div ref={mapRef} style={{ height, width: '100%' }} className="z-10" />

      {/* Legend */}
      <div className="absolute bottom-4 right-4 z-20 glass-dark rounded-xl p-3 text-xs text-white">
        <p className="font-bold mb-2 text-gold-400">المفتاح</p>
        <div className="flex items-center gap-2 mb-1">
          <div className="w-3 h-3 rounded-full bg-gold-500 border border-white"></div>
          <span className="text-white/80">عقارات متاحة</span>
        </div>
        <p className="text-white/50 text-xs mt-2">{properties.length} عقار على الخريطة</p>
      </div>
    </div>
  );
}
