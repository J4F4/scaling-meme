'use client';
import { useState, useMemo } from 'react';
import dynamic from 'next/dynamic';
import { SlidersHorizontal, Search, X } from 'lucide-react';
import { properties, districts } from '@/data/properties';
import { FilterState } from '@/types';

const MapComponent = dynamic(() => import('@/components/map/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex-1 bg-gray-100 flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-4 border-navy-900 border-t-gold-500 rounded-full animate-spin mx-auto mb-3"></div>
        <p className="text-gray-500 font-medium">جاري تحميل الخريطة...</p>
      </div>
    </div>
  ),
});

export default function MapPage() {
  const [showFilters, setShowFilters] = useState(true);
  const [filters, setFilters] = useState<FilterState>({
    type: '', status: '', district: '', minPrice: 0, maxPrice: 0, minBedrooms: 0, search: '',
  });

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.type && p.type !== filters.type) return false;
      if (filters.status && p.status !== filters.status) return false;
      if (filters.district && p.location.district !== filters.district) return false;
      if (filters.minBedrooms > 0 && p.bedrooms < filters.minBedrooms) return false;
      if (filters.search && !p.title.includes(filters.search) && !p.location.district.includes(filters.search)) return false;
      return true;
    });
  }, [filters]);

  const update = (key: keyof FilterState, value: string | number) =>
    setFilters((prev) => ({ ...prev, [key]: value }));

  const reset = () =>
    setFilters({ type: '', status: '', district: '', minPrice: 0, maxPrice: 0, minBedrooms: 0, search: '' });

  const hasFilters = filters.type || filters.status || filters.district || filters.minBedrooms > 0 || filters.search;

  return (
    <div className="pt-20 h-screen flex flex-col overflow-hidden bg-gray-50">
      {/* Top Bar */}
      <div className="bg-white border-b border-gray-200 shadow-sm z-10 shrink-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 flex items-center gap-4">
          <div>
            <h1 className="font-black text-navy-900 text-lg">الخريطة التفاعلية</h1>
            <p className="text-gray-400 text-xs">{filtered.length} عقار معروض</p>
          </div>
          <div className="flex-1 relative max-w-sm">
            <Search size={15} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="ابحث بالحي أو اسم العقار..."
              value={filters.search}
              onChange={(e) => update('search', e.target.value)}
              className="w-full pr-9 pl-4 py-2.5 border border-gray-200 rounded-xl text-sm focus:border-gold-500 transition-all"
            />
          </div>
          <div className="hidden sm:flex items-center gap-2">
            <select value={filters.type} onChange={(e) => update('type', e.target.value)}
              className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:border-gold-500">
              <option value="">كل الأنواع</option>
              <option value="villa">فيلا</option>
              <option value="apartment">شقة</option>
              <option value="land">أرض</option>
              <option value="commercial">تجاري</option>
            </select>
            <select value={filters.status} onChange={(e) => update('status', e.target.value)}
              className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:border-gold-500">
              <option value="">الكل</option>
              <option value="for-sale">للبيع</option>
              <option value="for-rent">للإيجار</option>
            </select>
            <select value={filters.district} onChange={(e) => update('district', e.target.value)}
              className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:border-gold-500">
              <option value="">كل الأحياء</option>
              {districts.map((d) => <option key={d} value={d}>{d}</option>)}
            </select>
            <select value={filters.minBedrooms} onChange={(e) => update('minBedrooms', Number(e.target.value))}
              className="px-3 py-2.5 border border-gray-200 rounded-xl text-sm bg-white focus:border-gold-500">
              <option value={0}>كل الغرف</option>
              <option value={1}>1+ غرفة</option>
              <option value={2}>2+ غرفة</option>
              <option value={3}>3+ غرف</option>
              <option value={4}>4+ غرف</option>
            </select>
          </div>
          {hasFilters && (
            <button onClick={reset} className="flex items-center gap-1.5 text-red-500 hover:text-red-700 text-sm font-medium transition-colors">
              <X size={14} />
              إعادة
            </button>
          )}
        </div>
      </div>

      {/* Map fills remaining height */}
      <div className="flex-1 p-4">
        <MapComponent properties={filtered} height="100%" />
      </div>
    </div>
  );
}
