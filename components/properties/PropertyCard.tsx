import Image from 'next/image';
import Link from 'next/link';
import { MapPin, BedDouble, Bath, Maximize2, Heart } from 'lucide-react';
import { Property } from '@/types';

const statusLabels: Record<string, { label: string; color: string }> = {
  'for-sale': { label: 'للبيع', color: 'bg-emerald-500' },
  'for-rent': { label: 'للإيجار', color: 'bg-blue-500' },
  'sold':     { label: 'تم البيع', color: 'bg-gray-500' },
  'rented':   { label: 'مؤجر', color: 'bg-orange-500' },
};

const typeLabels: Record<string, string> = {
  villa:      'فيلا',
  apartment:  'شقة',
  land:       'أرض',
  commercial: 'تجاري',
  duplex:     'دبلكس',
  compound:   'كمبوند',
};

interface Props {
  property: Property;
  featured?: boolean;
}

export default function PropertyCard({ property, featured = false }: Props) {
  const { label: statusLabel, color: statusColor } = statusLabels[property.status];
  const typeLabel = typeLabels[property.type];
  const priceFormatted = property.price.toLocaleString('ar-SA');

  return (
    <div className={`property-card group bg-white rounded-2xl overflow-hidden shadow-card border border-gray-100 ${featured ? 'ring-2 ring-gold-500/30' : ''}`}>
      {/* Image */}
      <div className="relative overflow-hidden aspect-[4/3]">
        <Image
          src={property.images[0]?.url || 'https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=800&q=80'}
          alt={property.images[0]?.alt || property.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        <div className="absolute inset-0 bg-gradient-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        {/* Badges */}
        <div className="absolute top-3 right-3 flex flex-col gap-2">
          <span className={`${statusColor} text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg`}>
            {statusLabel}
          </span>
          <span className="bg-navy-900/80 text-white text-xs font-medium px-3 py-1 rounded-full backdrop-blur-sm">
            {typeLabel}
          </span>
        </div>

        {/* Featured */}
        {featured && (
          <div className="absolute top-3 left-3">
            <span className="bg-gold-500 text-white text-xs font-bold px-3 py-1 rounded-full shadow-gold flex items-center gap-1">
              ⭐ مميز
            </span>
          </div>
        )}

        {/* Image Count */}
        {property.images.length > 1 && (
          <div className="absolute bottom-3 left-3 bg-black/50 text-white text-xs px-2.5 py-1 rounded-full backdrop-blur-sm flex items-center gap-1">
            <span>📷</span>
            <span>{property.images.length} صور</span>
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Location */}
        <div className="flex items-center gap-1.5 text-gray-400 text-xs mb-2">
          <MapPin size={13} />
          <span>{property.location.district}، {property.location.city}</span>
        </div>

        {/* Title */}
        <h3 className="font-bold text-navy-900 text-base mb-3 line-clamp-2 group-hover:text-gold-600 transition-colors leading-relaxed">
          {property.title}
        </h3>

        {/* Features Row */}
        <div className="flex items-center gap-4 py-3 border-y border-gray-100 mb-4">
          <div className="flex items-center gap-1.5 text-gray-500 text-xs">
            <Maximize2 size={14} className="text-gold-500" />
            <span className="font-medium">{property.area} م²</span>
          </div>
          {property.bedrooms > 0 && (
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <BedDouble size={14} className="text-gold-500" />
              <span className="font-medium">{property.bedrooms} غرف</span>
            </div>
          )}
          {property.bathrooms > 0 && (
            <div className="flex items-center gap-1.5 text-gray-500 text-xs">
              <Bath size={14} className="text-gold-500" />
              <span className="font-medium">{property.bathrooms} حمام</span>
            </div>
          )}
        </div>

        {/* Price + CTA */}
        <div className="flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 mb-0.5">السعر</p>
            <p className="font-black text-navy-900 text-lg leading-tight">
              {priceFormatted}
              <span className="text-xs text-gray-400 font-medium mr-1">{property.priceUnit}</span>
            </p>
          </div>
          <Link
            href={`/properties/${property.id}`}
            className="bg-navy-900 hover:bg-gold-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all duration-200 hover:shadow-gold"
          >
            التفاصيل
          </Link>
        </div>
      </div>
    </div>
  );
}
