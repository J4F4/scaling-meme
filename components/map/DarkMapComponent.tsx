'use client';
import { useEffect, useRef } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { Property } from '@/types';

interface Props {
  properties: Property[];
  onSelect: (p: Property) => void;
  selected: Property | null;
}

const RIYADH: [number, number] = [24.7136, 46.6753];

function makeIcon(isSelected: boolean) {
  const bg = isSelected ? '#c9a96e' : '#173B73';
  const border = isSelected ? '#fff' : '#c9a96e';
  const size = isSelected ? 18 : 14;
  return L.divIcon({
    className: '',
    iconSize: [size + 12, size + 12],
    iconAnchor: [(size + 12) / 2, size + 12],
    html: `<div style="
      width:${size + 12}px;height:${size + 12}px;
      background:${bg};
      border:2.5px solid ${border};
      border-radius:50%;
      box-shadow:0 0 ${isSelected ? 10 : 6}px ${isSelected ? 'rgba(201,169,110,0.7)' : 'rgba(23,59,115,0.5)'};
      display:flex;align-items:center;justify-content:center;
      transition:all 0.2s;
    ">
      <div style="width:${size - 6}px;height:${size - 6}px;background:${isSelected ? '#fff' : '#c9a96e'};border-radius:50%;"></div>
    </div>`,
  });
}

export default function DarkMapComponent({ properties, onSelect, selected }: Props) {
  const mapRef = useRef<L.Map | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const markersRef = useRef<Map<string, L.Marker>>(new Map());

  useEffect(() => {
    if (!containerRef.current || mapRef.current) return;

    const map = L.map(containerRef.current, {
      center: RIYADH,
      zoom: 11,
      zoomControl: false,
    });

    L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> &copy; <a href="https://carto.com/">CARTO</a>',
      subdomains: 'abcd',
      maxZoom: 19,
    }).addTo(map);

    L.control.zoom({ position: 'bottomleft' }).addTo(map);

    mapRef.current = map;

    return () => {
      map.remove();
      mapRef.current = null;
      markersRef.current.clear();
    };
  }, []);

  useEffect(() => {
    const map = mapRef.current;
    if (!map) return;

    markersRef.current.forEach(m => m.remove());
    markersRef.current.clear();

    properties.forEach(p => {
      if (!p.location.lat || !p.location.lng) return;
      const isSelected = selected?.id === p.id;
      const marker = L.marker([p.location.lat, p.location.lng], { icon: makeIcon(isSelected) });

      const price = p.price.toLocaleString('ar-SA');
      const status = p.status === 'for-sale' ? 'للبيع' : 'للإيجار';
      const statusColor = p.status === 'for-sale' ? '#10b981' : '#3b82f6';

      marker.bindPopup(`
        <div dir="rtl" style="font-family:Cairo,sans-serif;min-width:200px;padding:4px;">
          <img src="${p.images[0]?.url}" style="width:100%;height:110px;object-fit:cover;border-radius:8px;margin-bottom:8px;" />
          <p style="font-weight:900;font-size:13px;color:#173B73;margin:0 0 4px;">${p.title}</p>
          <p style="font-size:11px;color:#666;margin:0 0 6px;">📍 ${p.location.district}</p>
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <span style="font-weight:900;color:#c9a96e;font-size:14px;">${price} ر.س</span>
            <span style="background:${statusColor};color:#fff;font-size:10px;font-weight:700;padding:2px 8px;border-radius:999px;">${status}</span>
          </div>
          <a href="/properties/${p.id}" style="display:block;text-align:center;background:#173B73;color:#fff;padding:7px;border-radius:8px;text-decoration:none;font-size:12px;font-weight:700;">
            عرض التفاصيل
          </a>
        </div>
      `, { maxWidth: 240, className: 'dark-map-popup' });

      marker.on('click', () => onSelect(p));
      marker.addTo(map);
      markersRef.current.set(p.id, marker);
    });
  }, [properties, selected, onSelect]);

  useEffect(() => {
    const map = mapRef.current;
    if (!map || !selected?.location.lat || !selected?.location.lng) return;
    map.setView([selected.location.lat, selected.location.lng], 13, { animate: true });
    markersRef.current.forEach((marker, id) => {
      marker.setIcon(makeIcon(id === selected.id));
    });
  }, [selected]);

  return (
    <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
  );
}
