import Link from 'next/link';
import { Map, ArrowLeft } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import dynamic from 'next/dynamic';
import { properties } from '@/data/properties';

const MapComponent = dynamic(() => import('@/components/map/MapComponent'), {
  ssr: false,
  loading: () => (
    <div className="h-96 bg-gray-100 rounded-2xl flex items-center justify-center animate-pulse">
      <div className="text-center">
        <Map size={40} className="text-navy-900/30 mx-auto mb-3" />
        <p className="text-gray-400 text-sm">جاري تحميل الخريطة...</p>
      </div>
    </div>
  ),
});

export default function MapPreviewSection() {
  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-10">
          <SectionTitle
            badge="الخريطة التفاعلية"
            title="استكشف العقارات"
            highlight="على الخريطة"
            subtitle="تصفح جميع عقاراتنا على خريطة الرياض التفاعلية واضغط على أي عقار لرؤية تفاصيله"
          />
          <Link
            href="/map"
            className="inline-flex items-center gap-2 text-navy-900 hover:text-gold-600 font-bold text-sm transition-colors group whitespace-nowrap"
          >
            <Map size={16} />
            الخريطة الكاملة
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <MapComponent properties={properties} height="450px" />
      </div>
    </section>
  );
}
