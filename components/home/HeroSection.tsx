'use client';
import { useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Search, MapPin, Phone, MessageCircle } from 'lucide-react';

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

      {/* Background Image — Saudi luxury villa */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=1800&q=90"
          alt="فلل فاخرة الرياض"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        {/* Brand color overlay */}
        <div className="hero-overlay absolute inset-0"></div>
        {/* Extra brand color layer */}
        <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(23,59,115,0.7) 0%, rgba(10,31,61,0.5) 50%, rgba(23,59,115,0.65) 100%)'}}></div>
      </div>

      {/* ===== LOGO WATERMARK ===== */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-[1]">
        <div className="relative w-[92vw] max-w-[900px] aspect-square opacity-[0.11]">
          <Image
            src="/logo.jpg"
            alt=""
            fill
            className="object-contain filter brightness-0 invert select-none"
            priority={false}
          />
        </div>
      </div>

      {/* Decorative glows */}
      <div className="absolute top-1/4 left-10 w-80 h-80 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(201,169,110,0.08)'}}></div>
      <div className="absolute bottom-1/4 right-10 w-96 h-96 rounded-full blur-3xl pointer-events-none" style={{background:'rgba(23,59,115,0.3)'}}></div>

      {/* ===== LOGO SECTION — centered, large, official ===== */}
      <div className="relative z-10 w-full flex flex-col items-center justify-center pt-28 pb-8">
        {/* Gold decorative line */}
        <div className="w-16 h-px bg-gold-500/60 mb-6"></div>
        {/* Logo */}
        <div
          className="relative w-52 h-52 sm:w-64 sm:h-64 md:w-72 md:h-72"
          style={{filter:'invert(1)', mixBlendMode:'screen'}}
        >
          <Image
            src="/logo.jpg"
            alt="محمد الحبيشي العقارية"
            fill
            className="object-contain"
            priority
          />
        </div>
        {/* Gold decorative line */}
        <div className="w-16 h-px bg-gold-500/60 mt-6"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 pb-16 w-full">
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
            <br className="hidden sm:block"/>
            {' '}في الرياض
          </h1>

          <p className="text-white/80 text-lg leading-8 mb-10 max-w-xl animate-fade-in-up" style={{animationDelay:'0.2s'}}>
            نوفر لك أفضل الفرص العقارية من فلل فاخرة وشقق راقية وأراضٍ استثمارية بأسعار تنافسية وخدمة احترافية.
          </p>

          {/* Search */}
          <form onSubmit={handleSearch} className="glass rounded-2xl p-2 flex flex-col sm:flex-row gap-2 mb-8 animate-fade-in-up" style={{animationDelay:'0.3s'}}>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="bg-white/10 text-white border-0 rounded-xl px-4 py-3 text-sm font-medium w-full sm:w-44 focus:bg-white/20 transition-all outline-none"
            >
              <option value="" className="text-navy-700">كل الأنواع</option>
              <option value="villa" className="text-navy-700">فيلا</option>
              <option value="apartment" className="text-navy-700">شقة</option>
              <option value="land" className="text-navy-700">أرض</option>
              <option value="commercial" className="text-navy-700">تجاري</option>
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

          {/* Quick Action Buttons */}
          <div className="flex flex-wrap gap-3 animate-fade-in-up" style={{animationDelay:'0.4s'}}>
            <a
              href="tel:+966573888610"
              className="glass-gold flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:scale-105"
            >
              <Phone size={15} className="text-gold-400" />
              <div className="text-right">
                <div className="text-xs text-white/60 leading-none mb-0.5">للإيجار</div>
                <div dir="ltr">0573 888 610</div>
              </div>
            </a>
            <a
              href="tel:+966573888605"
              className="glass-gold flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:scale-105"
            >
              <Phone size={15} className="text-gold-400" />
              <div className="text-right">
                <div className="text-xs text-white/60 leading-none mb-0.5">للبيع</div>
                <div dir="ltr">0573 888 605</div>
              </div>
            </a>
            <a
              href="https://wa.me/966573888610?text=مرحباً، أود الاستفسار عن العقارات"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-white text-sm font-bold transition-all hover:scale-105"
              style={{background:'rgba(37,211,102,0.2)', border:'1px solid rgba(37,211,102,0.4)'}}
            >
              <MessageCircle size={15} style={{color:'#25D366'}} />
              واتساب
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 animate-float z-10">
        <span className="text-xs">اكتشف المزيد</span>
        <div className="w-5 h-8 border-2 border-white/30 rounded-full flex justify-center pt-1.5">
          <div className="w-1 h-2 bg-white/40 rounded-full animate-bounce"></div>
        </div>
      </div>
    </section>
  );
}
