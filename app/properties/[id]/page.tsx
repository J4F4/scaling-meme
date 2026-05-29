import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { MapPin, BedDouble, Bath, Maximize2, Calendar, Phone, MessageCircle, ChevronRight, Star, CheckCircle2 } from 'lucide-react';
import { properties } from '@/data/properties';
import PropertyCard from '@/components/properties/PropertyCard';
import dynamic from 'next/dynamic';
import type { Metadata } from 'next';

const MapComponent = dynamic(() => import('@/components/map/MapComponent'), { ssr: false });

interface Props { params: { id: string } }

export async function generateStaticParams() {
  return properties.map((p) => ({ id: p.id }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const property = properties.find((p) => p.id === params.id);
  if (!property) return {};
  return {
    title: property.title,
    description: property.description.substring(0, 160),
  };
}

export default function PropertyDetailPage({ params }: Props) {
  const property = properties.find((p) => p.id === params.id);
  if (!property) notFound();

  const related = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3);
  const priceFormatted = property.price.toLocaleString('ar-SA');

  const statusMap: Record<string, { label: string; color: string }> = {
    'for-sale': { label: 'للبيع', color: 'bg-emerald-500' },
    'for-rent': { label: 'للإيجار', color: 'bg-blue-500' },
  };
  const { label: statusLabel, color: statusColor } = statusMap[property.status] || { label: '', color: '' };

  return (
    <div className="min-h-screen bg-gray-50 pt-20">
      {/* Breadcrumb */}
      <div className="bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <div className="flex items-center gap-2 text-sm text-gray-500">
            <Link href="/" className="hover:text-gold-600 transition-colors">الرئيسية</Link>
            <ChevronRight size={14} className="rotate-180" />
            <Link href="/properties" className="hover:text-gold-600 transition-colors">العقارات</Link>
            <ChevronRight size={14} className="rotate-180" />
            <span className="text-navy-900 font-medium line-clamp-1">{property.title}</span>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">

            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-card">
              <div className="relative aspect-[16/9]">
                <Image
                  src={property.images[0]?.url}
                  alt={property.images[0]?.alt || property.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                <div className="absolute top-4 right-4 flex gap-2">
                  <span className={`${statusColor} text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-lg`}>
                    {statusLabel}
                  </span>
                  {property.isFeatured && (
                    <span className="bg-gold-500 text-white text-sm font-bold px-4 py-1.5 rounded-full shadow-gold">
                      ⭐ مميز
                    </span>
                  )}
                </div>
              </div>

              {/* Thumbnails */}
              {property.images.length > 1 && (
                <div className="grid grid-cols-4 gap-1 p-1">
                  {property.images.slice(1, 5).map((img, i) => (
                    <div key={i} className="relative aspect-[4/3] overflow-hidden rounded-lg">
                      <Image
                        src={img.url}
                        alt={img.alt}
                        fill
                        className="object-cover hover:scale-105 transition-transform cursor-pointer"
                        sizes="25vw"
                      />
                      {i === 3 && property.images.length > 5 && (
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                          <span className="text-white font-bold text-lg">+{property.images.length - 5}</span>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Property Info */}
            <div className="bg-white rounded-2xl p-8 shadow-card">
              <div className="flex items-start gap-3 mb-2">
                <MapPin size={18} className="text-gold-500 mt-1 shrink-0" />
                <p className="text-gray-500 text-sm">{property.location.address}</p>
              </div>
              <h1 className="text-2xl sm:text-3xl font-black text-navy-900 mb-6 leading-tight">
                {property.title}
              </h1>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'المساحة', value: `${property.area} م²`, icon: Maximize2 },
                  ...(property.bedrooms > 0 ? [{ label: 'غرف النوم', value: `${property.bedrooms} غرفة`, icon: BedDouble }] : []),
                  ...(property.bathrooms > 0 ? [{ label: 'دورات المياه', value: `${property.bathrooms} دورة`, icon: Bath }] : []),
                  ...(property.yearBuilt ? [{ label: 'سنة البناء', value: property.yearBuilt.toString(), icon: Calendar }] : []),
                ].map(({ label, value, icon: Icon }) => (
                  <div key={label} className="bg-gray-50 rounded-xl p-4 text-center">
                    <Icon size={20} className="text-gold-500 mx-auto mb-2" />
                    <p className="text-navy-900 font-bold text-sm">{value}</p>
                    <p className="text-gray-400 text-xs">{label}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div>
                <h2 className="font-bold text-navy-900 text-lg mb-4">وصف العقار</h2>
                <p className="text-gray-600 text-sm leading-8">{property.description}</p>
              </div>
            </div>

            {/* Features */}
            {property.features.length > 0 && (
              <div className="bg-white rounded-2xl p-8 shadow-card">
                <h2 className="font-bold text-navy-900 text-lg mb-6">المميزات والخدمات</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {property.features.map((feature) => (
                    <div key={feature} className="flex items-center gap-3 bg-gray-50 rounded-xl px-4 py-3">
                      <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                      <span className="text-gray-700 text-sm font-medium">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Map */}
            <div className="bg-white rounded-2xl p-6 shadow-card">
              <h2 className="font-bold text-navy-900 text-lg mb-4">موقع العقار</h2>
              <MapComponent properties={[property]} height="300px" />
              <p className="text-gray-500 text-sm mt-3 flex items-center gap-2">
                <MapPin size={14} className="text-gold-500" />
                {property.location.address}، {property.location.city}
              </p>
            </div>

          </div>

          {/* Sidebar */}
          <div className="space-y-6">

            {/* Price Card */}
            <div className="bg-navy-900 rounded-2xl p-6 shadow-luxury text-white sticky top-24">
              <p className="text-white/60 text-xs mb-1">السعر</p>
              <p className="text-3xl font-black text-white mb-1">
                {priceFormatted}
              </p>
              <p className="text-gold-400 text-sm font-medium mb-6">{property.priceUnit}</p>

              <div className="grid grid-cols-2 gap-3 mb-6 text-sm">
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-white/50 text-xs">النوع</p>
                  <p className="font-bold">
                    {{villa:'فيلا',apartment:'شقة',land:'أرض',commercial:'تجاري',duplex:'دبلكس',compound:'كمبوند'}[property.type]}
                  </p>
                </div>
                <div className="bg-white/10 rounded-xl p-3">
                  <p className="text-white/50 text-xs">الحي</p>
                  <p className="font-bold">{property.location.district}</p>
                </div>
              </div>

              <div className="space-y-3">
                <a
                  href={`https://wa.me/966500000000?text=أود الاستفسار عن عقار: ${encodeURIComponent(property.title)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-2 w-full bg-green-500 hover:bg-green-600 text-white font-bold py-3.5 rounded-xl transition-all text-sm"
                >
                  <MessageCircle size={18} />
                  تواصل واتساب
                </a>
                <a
                  href="tel:+966500000000"
                  className="flex items-center justify-center gap-2 w-full bg-white/10 hover:bg-white/20 text-white font-bold py-3.5 rounded-xl transition-all text-sm border border-white/20"
                >
                  <Phone size={18} />
                  اتصل: 0500000000
                </a>
              </div>

              <div className="mt-6 pt-6 border-t border-white/10">
                <p className="text-white/60 text-xs text-center">أو أرسل لنا استفساراً</p>
                <Link
                  href={`/contact?property=${property.id}`}
                  className="block text-center text-gold-400 hover:text-gold-300 text-sm font-bold mt-2 transition-colors"
                >
                  نموذج الاستفسار
                </Link>
              </div>
            </div>

          </div>
        </div>

        {/* Related */}
        {related.length > 0 && (
          <div className="mt-16">
            <h2 className="text-2xl font-black text-navy-900 mb-8">عقارات مشابهة</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p) => <PropertyCard key={p.id} property={p} />)}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
