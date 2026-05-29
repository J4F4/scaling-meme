'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Home, TrendingUp, Shield } from 'lucide-react';

const slides = [
  {
    image: 'https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1600&q=90',
    title: 'فلل فاخرة',
    subtitle: 'في أرقى أحياء الرياض',
  },
  {
    image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=90',
    title: 'أبراج سكنية',
    subtitle: 'بإطلالات بانورامية رائعة',
  },
  {
    image: 'https://images.unsplash.com/photo-1560448204-603b3fc33ddc?w=1600&q=90',
    title: 'شقق عصرية',
    subtitle: 'بتصاميم داخلية أنيقة',
  },
];

export default function HeroSection() {
  const [search, setSearch] = useState('');
  const [searchType, setSearchType] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (search) params.set('search', search);
    if (searchType) params.set('type', searchType);
    router.push(`/properties?${params.toString()}`);
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1613977257363-707ba9348227?w=1800&q=85"
          alt="فلل فاخرة الرياض"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="hero-overlay absolute inset-0"></div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-64 h-64 rounded-full bg-gold-500/5 blur-3xl"></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full bg-navy-700/30 blur-3xl"></div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 w-full">
        <div className="max-w-3xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 glass px-4 py-2 rounded-full text-white/90 text-sm font-medium mb-6 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse-slow"></span>
            عقارات الرياض الفاخرة
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-6 animate-fade-in-up" style={{animationDelay:'0.1s'}}>
            اعثر على{' '}
            <span className="gradient-text">عقارك المثالي</span>
            <br />
            في الرياض
          </h1>

          <p className="text-white/75 text-lg leading-8 mb-10 max-w-xl animate-fade-in-up" style={{animationDelay:'0.2s'}}>
            نوفر لك أفضل الفرص العقارية من فلل فاخرة وشقق راقية وأراضٍ استثمارية بأسعار تنافسية.
          </p>

          {/* Search Box */}
          <form onSubmit={handleSearch} className="glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2 mb-8 animate-fade-in-up" style={{animationDelay:'0.3s'}}>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="bg-white/10 text-white border-0 rounded-xl px-4 py-3 text-sm font-medium w-full sm:w-44 focus:bg-white/20 transition-all outline-none"
            >
              <option value="" className="text-navy-900">كل الأنواع</option>
              <option value="villa" className="text-navy-900">فيلا</option>
              <option value="apartment" className="text-navy-900">شقة</option>
              <option value="land" className="text-navy-900">أرض</option>
              <option value="commercial" className="text-navy-900">تجاري</option>
            </select>
            <div className="flex-1 relative">
              <MapPin size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-white/50" />
              <input
                type="text"
                placeholder="ابحث بالحي أو النوع..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full bg-white/10 text-white placeholder-white/50 border-0 rounded-xl pr-10 pl-4 py-3 text-sm focus:bg-white/20 transition-all outline-none"
              />
            </div>
            <button
              type="submit"
              className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-3 rounded-xl text-sm transition-all hover:shadow-gold flex items-center gap-2 justify-center"
            >
              <Search size={16} />
              بحث
            </button>
          </form>

          {/* Quick Stats */}
          <div className="flex flex-wrap gap-6 animate-fade-in-up" style={{animationDelay:'0.4s'}}>
            {[
              { icon: Home, value: '500+', label: 'عقار متاح' },
              { icon: TrendingUp, value: '1,200+', label: 'صفقة ناجحة' },
              { icon: Shield, value: '15+', label: 'سنة خبرة' },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex items-center gap-3 glass px-4 py-3 rounded-xl">
                <div className="w-8 h-8 bg-gold-500/20 rounded-lg flex items-center justify-center">
                  <Icon size={16} className="text-gold-400" />
                </div>
                <div>
                  <p className="text-white font-black text-sm">{value}</p>
                  <p className="text-white/60 text-xs">{label}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/50 animate-float">
        <span className="text-xs">اكتشف المزيد</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/50 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
