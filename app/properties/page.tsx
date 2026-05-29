'use client';
import { useState, useMemo, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { LayoutGrid, Map as MapIcon, List } from 'lucide-react';
import PropertyCard from '@/components/properties/PropertyCard';
import PropertyFilters from '@/components/properties/PropertyFilters';
import { properties } from '@/data/properties';
import { FilterState, Property } from '@/types';
import dynamic from 'next/dynamic';

const MapComponent = dynamic(() => import('@/components/map/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-[600px] bg-gray-100 rounded-2xl flex items-center justify-center animate-pulse">
      <p className="text-gray-400">جاري تحميل الخريطة...</p>
    </div>
  ),
});

function PropertiesContent() {
  const searchParams = useSearchParams();
  const [view, setView] = useState<'grid' | 'map'>('grid');

  const [filters, setFilters] = useState<FilterState>({
    type: searchParams.get('type') || '',
    status: searchParams.get('status') || '',
    district: searchParams.get('district') || '',
    minPrice: 0,
    maxPrice: 0,
    minBedrooms: 0,
    search: searchParams.get('search') || '',
  });

  const filtered = useMemo(() => {
    return properties.filter((p) => {
      if (filters.type && p.type !== filters.type) return false;
      if (filters.status && p.status !== filters.status) return false;
      if (filters.district && p.location.district !== filters.district) return false;
      if (filters.minBedrooms > 0 && p.bedrooms < filters.minBedrooms) return false;
      if (filters.search) {
        const q = filters.search.toLowerCase();
        if (
          !p.title.includes(filters.search) &&
          !p.location.district.includes(filters.search) &&
          !p.location.city.includes(filters.search) &&
          !p.description.includes(filters.search)
        ) return false;
      }
      return true;
    });
  }, [filters]);

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        {/* Page Header */}
        <div className="mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h1 className="text-3xl font-black text-navy-900 mb-2">العقارات المتاحة</h1>
              <p className="text-gray-500 text-sm">
                عرض <span className="font-bold text-navy-900">{filtered.length}</span> من أصل <span className="font-bold">{properties.length}</span> عقار
              </p>
            </div>
            {/* View Toggle */}
            <div className="flex items-center bg-white border border-gray-200 rounded-xl p-1 shadow-sm">
              <button
                onClick={() => setView('grid')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  view === 'grid' ? 'bg-navy-900 text-white shadow' : 'text-gray-500 hover:text-navy-900'
                }`}
              >
                <LayoutGrid size={16} />
                شبكة
              </button>
              <button
                onClick={() => setView('map')}
                className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-bold transition-all ${
                  view === 'map' ? 'bg-navy-900 text-white shadow' : 'text-gray-500 hover:text-navy-900'
                }`}
              >
                <MapIcon size={16} />
                خريطة
              </button>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div className="mb-8">
          <PropertyFilters filters={filters} onChange={setFilters} totalCount={filtered.length} />
        </div>

        {/* Content */}
        {view === 'grid' ? (
          filtered.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
              {filtered.map((property) => (
                <PropertyCard key={property.id} property={property} />
              ))}
            </div>
          ) : (
            <div className="text-center py-20">
              <div className="text-6xl mb-4">🏠</div>
              <h3 className="text-xl font-bold text-navy-900 mb-2">لا توجد نتائج</h3>
              <p className="text-gray-500 mb-6">جرب تعديل معايير البحث للحصول على نتائج</p>
              <button
                onClick={() => setFilters({ type: '', status: '', district: '', minPrice: 0, maxPrice: 0, minBedrooms: 0, search: '' })}
                className="bg-navy-900 text-white px-6 py-3 rounded-xl font-bold text-sm hover:bg-gold-500 transition-colors"
              >
                إعادة تعيين الفلاتر
              </button>
            </div>
          )
        ) : (
          <MapComponent properties={filtered} height="600px" showFilters />
        )}
      </div>
    </div>
  );
}

export default function PropertiesPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-gray-50 pt-24 flex items-center justify-center"><div className="w-10 h-10 border-4 border-navy-900 border-t-gold-500 rounded-full animate-spin"></div></div>}>
      <PropertiesContent />
    </Suspense>
  );
}
