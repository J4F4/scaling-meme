'use client';
import { useState, useMemo, useEffect, useRef } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, X, BedDouble, Maximize2, Phone, MessageCircle, SlidersHorizontal, LayoutList, Map as MapIcon, ChevronLeft, ChevronRight } from 'lucide-react';
import { properties, districts } from '@/data/properties';
import { Property, FilterState } from '@/types';
import dynamic from 'next/dynamic';

const DarkMap = dynamic(() => import('@/components/map/DarkMapComponent'), {
  ssr: false,
  loading: () => (
    <div className="flex-1 bg-[#0d1b2e] flex items-center justify-center">
      <div className="text-center">
        <div className="w-12 h-12 border-3 border-navy-700 border-t-gold-500 rounded-full animate-spin mx-auto mb-3" style={{borderWidth:'3px'}}></div>
        <p className="text-white/50 text-sm font-medium">جاري تحميل الخريطة...</p>
      </div>
    </div>
  ),
});

const typeLabels: Record<string, string> = {
  villa:'فيلا', apartment:'شقة', land:'أرض', commercial:'تجاري', duplex:'دبلكس',
};

const statusLabels: Record<string, { label: string; color: string }> = {
  'for-sale': { label: 'للبيع',    color: 'bg-emerald-500' },
  'for-rent': { label: 'للإيجار', color: 'bg-blue-500' },
};

export default function MapPage() {
  const [filters, setFilters] = useState<FilterState>({
    type: '', status: '', district: '', minPrice: 0, maxPrice: 0, minBedrooms: 0, search: '',
  });
  const [selected, setSelected] = useState<Property | null>(null);
  const [view, setView] = useState<'map' | 'list'>('map');
  const [sidebarOpen, setSidebarOpen] = useState(true);

  const update = (k: keyof FilterState, v: string | number) =>
    setFilters(p => ({ ...p, [k]: v }));

  const filtered = useMemo(() => properties.filter(p => {
    if (filters.type && p.type !== filters.type) return false;
    if (filters.status && p.status !== filters.status) return false;
    if (filters.district && p.location.district !== filters.district) return false;
    if (filters.minBedrooms > 0 && p.bedrooms < filters.minBedrooms) return false;
    if (filters.search && !p.title.includes(filters.search) && !p.location.district.includes(filters.search)) return false;
    return true;
  }), [filters]);

  const hasFilters = filters.type || filters.status || filters.district || filters.minBedrooms > 0 || filters.search;

  return (
    <div className="h-screen flex flex-col overflow-hidden" style={{background:'#0d1b2e'}}>

      {/* ===== HEADER ===== */}
      <header className="shrink-0 h-16 flex items-center justify-between px-4 sm:px-6 z-30 border-b border-white/10" style={{background:'#0d1b2e'}}>
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative w-10 h-10 shrink-0 rounded-xl overflow-hidden bg-white ring-1 ring-gold-500/40">
            <Image src="/logo.jpg" alt="محمد الحبيشي العقارية" fill className="object-contain p-0.5" />
          </div>
          <div className="hidden sm:block">
            <p className="text-white font-bold text-xs leading-tight">محمد الحبيشي</p>
            <p className="text-gold-400 text-[10px] font-medium tracking-widest">العقارية</p>
          </div>
        </Link>

        {/* Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {[
            { href: '/', label: 'الرئيسية' },
            { href: '/properties', label: 'العقارات' },
            { href: '/projects', label: 'المشاريع' },
            { href: '/services', label: 'خدماتنا' },
            { href: '/about', label: 'من نحن' },
            { href: '/contact', label: 'تواصل معنا' },
          ].map(l => (
            <Link key={l.href} href={l.href}
              className="px-3 py-1.5 text-white/70 hover:text-white text-xs font-medium rounded-lg hover:bg-white/10 transition-all whitespace-nowrap">
              {l.label}
            </Link>
          ))}
        </nav>

        {/* Phone */}
        <a href="tel:+966573888610"
          className="flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2 rounded-xl text-xs font-bold transition-all shadow-gold">
          <Phone size={13} />
          <span className="hidden sm:inline" dir="ltr">0573 888 610</span>
          <span className="sm:hidden">اتصل</span>
        </a>
      </header>

      {/* ===== BODY ===== */}
      <div className="flex-1 flex overflow-hidden relative">

        {/* ===== LEFT SIDEBAR ===== */}
        <div className={`shrink-0 flex flex-col border-l border-white/10 transition-all duration-300 z-20 ${sidebarOpen ? 'w-72' : 'w-0 overflow-hidden'}`}
          style={{background:'rgba(13,27,46,0.97)', backdropFilter:'blur(12px)'}}>

          <div className="p-4 border-b border-white/10">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-white font-black text-sm flex items-center gap-2">
                <SlidersHorizontal size={14} className="text-gold-400" />
                البحث والفلترة
              </h2>
              {hasFilters && (
                <button onClick={() => setFilters({type:'',status:'',district:'',minPrice:0,maxPrice:0,minBedrooms:0,search:''})}
                  className="text-white/40 hover:text-red-400 text-xs flex items-center gap-1 transition-colors">
                  <X size={12} />مسح
                </button>
              )}
            </div>
            {/* Search */}
            <div className="relative mb-3">
              <Search size={13} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/30" />
              <input type="text" placeholder="بحث بالحي أو العقار..."
                value={filters.search} onChange={e => update('search', e.target.value)}
                className="w-full bg-white/8 border border-white/10 text-white placeholder-white/30 text-xs rounded-xl pr-9 pl-3 py-2.5 focus:border-gold-500/50 outline-none transition-all"
                style={{background:'rgba(255,255,255,0.05)'}} />
            </div>
            {/* Filters */}
            <div className="space-y-2">
              <select value={filters.type} onChange={e => update('type', e.target.value)}
                className="w-full text-xs rounded-xl px-3 py-2.5 border border-white/10 text-white focus:border-gold-500/50 outline-none"
                style={{background:'rgba(255,255,255,0.05)'}}>
                <option value="" className="text-navy-900 bg-white">نوع العقار</option>
                <option value="villa" className="text-navy-900 bg-white">فيلا</option>
                <option value="apartment" className="text-navy-900 bg-white">شقة</option>
                <option value="land" className="text-navy-900 bg-white">أرض</option>
                <option value="commercial" className="text-navy-900 bg-white">تجاري</option>
                <option value="duplex" className="text-navy-900 bg-white">دبلكس</option>
              </select>
              <select value={filters.status} onChange={e => update('status', e.target.value)}
                className="w-full text-xs rounded-xl px-3 py-2.5 border border-white/10 text-white focus:border-gold-500/50 outline-none"
                style={{background:'rgba(255,255,255,0.05)'}}>
                <option value="" className="text-navy-900 bg-white">نوع التملك</option>
                <option value="for-sale" className="text-navy-900 bg-white">للبيع</option>
                <option value="for-rent" className="text-navy-900 bg-white">للإيجار</option>
              </select>
              <select value={filters.district} onChange={e => update('district', e.target.value)}
                className="w-full text-xs rounded-xl px-3 py-2.5 border border-white/10 text-white focus:border-gold-500/50 outline-none"
                style={{background:'rgba(255,255,255,0.05)'}}>
                <option value="" className="text-navy-900 bg-white">كل الأحياء</option>
                {districts.map(d => <option key={d} value={d} className="text-navy-900 bg-white">{d}</option>)}
              </select>
              <select value={filters.minBedrooms} onChange={e => update('minBedrooms', Number(e.target.value))}
                className="w-full text-xs rounded-xl px-3 py-2.5 border border-white/10 text-white focus:border-gold-500/50 outline-none"
                style={{background:'rgba(255,255,255,0.05)'}}>
                <option value={0} className="text-navy-900 bg-white">عدد الغرف</option>
                <option value={1} className="text-navy-900 bg-white">1+ غرفة</option>
                <option value={2} className="text-navy-900 bg-white">2+ غرفة</option>
                <option value={3} className="text-navy-900 bg-white">3+ غرف</option>
                <option value={4} className="text-navy-900 bg-white">4+ غرف</option>
                <option value={5} className="text-navy-900 bg-white">5+ غرف</option>
              </select>
            </div>
          </div>

          {/* Results count */}
          <div className="px-4 py-2.5 border-b border-white/10 flex items-center justify-between">
            <span className="text-white/50 text-xs">النتائج</span>
            <span className="text-gold-400 font-black text-sm">{filtered.length} عقار</span>
          </div>

          {/* Property mini list */}
          <div className="flex-1 overflow-y-auto scrollbar-hide">
            {filtered.map(p => {
              const { label, color } = statusLabels[p.status] || { label: '', color: '' };
              return (
                <button key={p.id} onClick={() => setSelected(p)}
                  className={`w-full text-right p-3 border-b border-white/5 hover:bg-white/5 transition-all flex gap-3 items-start ${selected?.id === p.id ? 'bg-white/8 border-r-2 border-r-gold-500' : ''}`}>
                  <div className="relative w-16 h-14 rounded-lg overflow-hidden shrink-0">
                    <Image src={p.images[0]?.url} alt={p.title} fill className="object-cover" sizes="64px" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-white text-xs font-bold line-clamp-2 leading-relaxed mb-1">{p.title}</p>
                    <p className="text-white/40 text-[10px] mb-1">{p.location.district}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-gold-400 text-xs font-black">{p.price.toLocaleString('ar-SA')}</span>
                      <span className={`${color} text-white text-[9px] font-bold px-2 py-0.5 rounded-full`}>{label}</span>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>

          {/* Bottom link */}
          <div className="p-3 border-t border-white/10">
            <Link href="/properties"
              className="flex items-center justify-center gap-2 w-full bg-white/5 hover:bg-white/10 border border-white/10 text-white/70 hover:text-white text-xs font-medium py-2.5 rounded-xl transition-all">
              <LayoutList size={13} />
              عرض الكل في قائمة
            </Link>
          </div>
        </div>

        {/* Toggle sidebar button */}
        <button
          onClick={() => setSidebarOpen(o => !o)}
          className="absolute right-0 top-1/2 -translate-y-1/2 z-30 w-6 h-12 flex items-center justify-center rounded-l-xl transition-all"
          style={{background:'rgba(13,27,46,0.9)', border:'1px solid rgba(255,255,255,0.1)', borderRight:'none', right: sidebarOpen ? '288px' : '0'}}
        >
          {sidebarOpen ? <ChevronRight size={14} className="text-white/50" /> : <ChevronLeft size={14} className="text-white/50" />}
        </button>

        {/* ===== MAP ===== */}
        <div className="flex-1 relative">
          <DarkMap
            properties={filtered}
            onSelect={setSelected}
            selected={selected}
          />

          {/* Results badge on map */}
          <div className="absolute top-4 right-1/2 translate-x-1/2 z-20 pointer-events-none">
            <div className="glass-dark px-4 py-2 rounded-full flex items-center gap-2 shadow-luxury">
              <MapIcon size={13} className="text-gold-400" />
              <span className="text-white text-xs font-bold">{filtered.length} وحدة في المنطقة</span>
            </div>
          </div>
        </div>

        {/* ===== RIGHT PROPERTY CARD ===== */}
        {selected && (
          <div className="shrink-0 w-72 flex flex-col border-r border-white/10 z-20 overflow-y-auto"
            style={{background:'rgba(13,27,46,0.97)', backdropFilter:'blur(12px)'}}>

            <div className="p-3 flex items-center justify-between border-b border-white/10">
              <h3 className="text-white text-xs font-black">تفاصيل العقار</h3>
              <button onClick={() => setSelected(null)}
                className="w-7 h-7 rounded-lg bg-white/10 hover:bg-white/20 flex items-center justify-center text-white/60 hover:text-white transition-all">
                <X size={14} />
              </button>
            </div>

            {/* Image */}
            <div className="relative aspect-video overflow-hidden">
              <Image src={selected.images[0]?.url} alt={selected.title} fill className="object-cover" sizes="288px" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              <div className="absolute top-3 right-3 flex gap-1.5">
                <span className={`${statusLabels[selected.status]?.color || 'bg-gray-500'} text-white text-[10px] font-bold px-2.5 py-1 rounded-full shadow-lg`}>
                  {statusLabels[selected.status]?.label}
                </span>
                <span className="bg-navy-700/80 text-gold-400 text-[10px] font-bold px-2.5 py-1 rounded-full backdrop-blur-sm">
                  {typeLabels[selected.type] || selected.type}
                </span>
              </div>
              {selected.images.length > 1 && (
                <div className="absolute bottom-2 left-2 bg-black/60 text-white text-[9px] px-2 py-1 rounded-full backdrop-blur-sm">
                  📷 {selected.images.length} صور
                </div>
              )}
            </div>

            {/* Info */}
            <div className="p-4 flex-1">
              <h2 className="text-white font-black text-sm leading-relaxed mb-1">{selected.title}</h2>
              <p className="text-white/40 text-xs mb-3 flex items-center gap-1">
                📍 {selected.location.district}، {selected.location.city}
              </p>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-2 mb-4">
                <div className="bg-white/5 rounded-xl p-2 text-center border border-white/8">
                  <p className="text-gold-400 text-xs font-black">{selected.area}</p>
                  <p className="text-white/40 text-[9px] mt-0.5">م²</p>
                </div>
                {selected.bedrooms > 0 && (
                  <div className="bg-white/5 rounded-xl p-2 text-center border border-white/8">
                    <p className="text-gold-400 text-xs font-black">{selected.bedrooms}</p>
                    <p className="text-white/40 text-[9px] mt-0.5">غرف</p>
                  </div>
                )}
                {selected.bathrooms > 0 && (
                  <div className="bg-white/5 rounded-xl p-2 text-center border border-white/8">
                    <p className="text-gold-400 text-xs font-black">{selected.bathrooms}</p>
                    <p className="text-white/40 text-[9px] mt-0.5">حمام</p>
                  </div>
                )}
              </div>

              {/* Price */}
              <div className="bg-gradient-to-r from-navy-700/50 to-navy-800/50 rounded-xl p-3 mb-4 border border-gold-500/20">
                <p className="text-white/50 text-[10px] mb-0.5">السعر</p>
                <p className="text-gold-400 font-black text-lg leading-none">
                  {selected.price.toLocaleString('ar-SA')}
                </p>
                <p className="text-white/40 text-[10px] mt-0.5">{selected.priceUnit}</p>
              </div>

              {/* Features */}
              {selected.features.length > 0 && (
                <div className="mb-4">
                  <p className="text-white/50 text-[10px] font-bold mb-2">المميزات</p>
                  <div className="flex flex-wrap gap-1.5">
                    {selected.features.slice(0, 4).map(f => (
                      <span key={f} className="bg-white/5 border border-white/10 text-white/60 text-[9px] px-2 py-1 rounded-full">{f}</span>
                    ))}
                    {selected.features.length > 4 && (
                      <span className="bg-gold-500/10 border border-gold-500/20 text-gold-400 text-[9px] px-2 py-1 rounded-full">
                        +{selected.features.length - 4}
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Buttons */}
              <div className="space-y-2">
                <Link href={`/properties/${selected.id}`}
                  className="flex items-center justify-center gap-2 w-full bg-navy-700 hover:bg-gold-500 text-white font-bold py-3 rounded-xl transition-all text-xs">
                  عرض التفاصيل الكاملة
                </Link>
                <a href={`https://wa.me/966573888610?text=أود الاستفسار عن: ${encodeURIComponent(selected.title)}`}
                  target="_blank" rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full font-bold py-3 rounded-xl transition-all text-xs text-white"
                  style={{background:'rgba(37,211,102,0.2)', border:'1px solid rgba(37,211,102,0.4)'}}>
                  <MessageCircle size={13} style={{color:'#25D366'}} />
                  <span style={{color:'#25D366'}}>تواصل واتساب</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
