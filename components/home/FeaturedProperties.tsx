import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import PropertyCard from '@/components/properties/PropertyCard';
import SectionTitle from '@/components/ui/SectionTitle';
import { properties } from '@/data/properties';

export default function FeaturedProperties() {
  const featured = properties.filter((p) => p.isFeatured).slice(0, 6);

  return (
    <section className="py-20 bg-cream-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <SectionTitle
            badge="عقاراتنا المميزة"
            title="أبرز العقارات"
            highlight="المتاحة"
            subtitle="اكتشف مجموعة مختارة من أفخم العقارات في أرقى أحياء الرياض"
          />
          <Link
            href="/properties"
            className="inline-flex items-center gap-2 text-navy-900 hover:text-gold-600 font-bold text-sm transition-colors group whitespace-nowrap"
          >
            عرض جميع العقارات
            <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} featured />
          ))}
        </div>
      </div>
    </section>
  );
}
