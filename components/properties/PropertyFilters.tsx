'use client';
import { Search, SlidersHorizontal, X } from 'lucide-react';
import { FilterState } from '@/types';
import { districts } from '@/data/properties';

interface Props {
  filters: FilterState;
  onChange: (filters: FilterState) => void;
  totalCount: number;
}

export default function PropertyFilters({ filters, onChange, totalCount }: Props) {
  const update = (key: keyof FilterState, value: string | number) =>
    onChange({ ...filters, [key]: value });

  const reset = () =>
    onChange({ type: '', status: '', district: '', minPrice: 0, maxPrice: 0, minBedrooms: 0, search: '' });

  const hasActiveFilters = filters.type || filters.status || filters.district || filters.minBedrooms > 0 || filters.search;

  return (
    <div className="bg-white rounded-2xl shadow-card border border-gray-100 p-6">
      {/* Header */}
      <div className="flex items-center justify-between mb-5">
        <div className="flex items-center gap-2">
          <SlidersHorizontal size={18} className="text-gold-500" />
          <h3 className="font-bold text-navy-900">تصفية النتائج</h3>
          <span className="bg-navy-900 text-white text-xs font-bold px-2.5 py-0.5 rounded-full">{totalCount}</span>
        </div>
        {hasActiveFilters && (
          <button
            onClick={reset}
            className="flex items-center gap-1.5 text-gray-400 hover:text-red-500 text-sm font-medium transition-colors"
          >
            <X size={14} />
            إعادة تعيين
          </button>
        )}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6 gap-4">
        {/* Search */}
        <div className="xl:col-span-2 relative">
          <Search size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400" />
          <input
            type="text"
            placeholder="ابحث عن عقار..."
            value={filters.search}
            onChange={(e) => update('search', e.target.value)}
            className="w-full pr-10 pl-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-gold-500 focus:ring-2 focus:ring-gold-500/10 transition-all"
          />
        </div>

        {/* Type */}
        <div>
          <select
            value={filters.type}
            onChange={(e) => update('type', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-gold-500 transition-all bg-white appearance-none"
          >
            <option value="">كل الأنواع</option>
            <option value="villa">فيلا</option>
            <option value="apartment">شقة</option>
            <option value="land">أرض</option>
            <option value="commercial">تجاري</option>
            <option value="duplex">دبلكس</option>
          </select>
        </div>

        {/* Status */}
        <div>
          <select
            value={filters.status}
            onChange={(e) => update('status', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-gold-500 transition-all bg-white appearance-none"
          >
            <option value="">للبيع والإيجار</option>
            <option value="for-sale">للبيع</option>
            <option value="for-rent">للإيجار</option>
          </select>
        </div>

        {/* District */}
        <div>
          <select
            value={filters.district}
            onChange={(e) => update('district', e.target.value)}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-gold-500 transition-all bg-white appearance-none"
          >
            <option value="">كل الأحياء</option>
            {districts.map((d) => (
              <option key={d} value={d}>{d}</option>
            ))}
          </select>
        </div>

        {/* Bedrooms */}
        <div>
          <select
            value={filters.minBedrooms}
            onChange={(e) => update('minBedrooms', Number(e.target.value))}
            className="w-full px-4 py-3 border border-gray-200 rounded-xl text-sm focus:border-gold-500 transition-all bg-white appearance-none"
          >
            <option value={0}>كل الغرف</option>
            <option value={1}>1+ غرفة</option>
            <option value={2}>2+ غرفة</option>
            <option value={3}>3+ غرف</option>
            <option value={4}>4+ غرف</option>
            <option value={5}>5+ غرف</option>
          </select>
        </div>
      </div>
    </div>
  );
}
