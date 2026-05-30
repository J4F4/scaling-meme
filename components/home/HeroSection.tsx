'use client';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Map, Key, DollarSign, MessageCircle, ChevronLeft } from 'lucide-react';

const quickActions = [
  { icon: MapPin,     label: 'الأقرب لك',        href: '/map' },
  { icon: Map,        label: 'ابحث على الخريطة',  href: '/map' },
  { icon: Key,        label: 'الإيجارات',          href: '/properties?status=for-rent' },
  { icon: DollarSign, label: 'حسب الميزانية',      href: '/properties' },
];

export default function HeroSection() {
  return (
    <>
      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex items-end overflow-hidden">

        {/* Background — Riyadh skyline */}
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=1800&q=90"
            alt="أفق الرياض"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0" style={{background:'linear-gradient(to bottom, rgba(8,18,40,0.55) 0%, rgba(8,18,40,0.80) 60%, rgba(8,18,40,0.97) 100%)'}}></div>
        </div>

        {/* Content */}
        <div className="relative z-10 w-full max-w-7xl mx-auto px-5 sm:px-8 pt-36 pb-12">

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-black text-white leading-tight mb-5">
            محمد الحبيشي
            <br />
            <span className="gradient-text">العقارية</span>
          </h1>

          <p className="text-white/70 text-base sm:text-lg leading-8 mb-10 max-w-lg">
            نبحث لك ونحلل معك ونختار لك — أفضل العقارات السكنية والتجارية في الرياض بخبرة تتجاوز 20 عاماً.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 mb-4">
            <Link
              href="/properties"
              className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-black px-8 py-4 rounded-2xl text-base transition-all shadow-gold hover:shadow-lg"
            >
              عرض العقارات
              <ChevronLeft size={18} />
            </Link>
            <a
              href="https://wa.me/966573888610?text=مرحباً، أود الاستفسار عن العقارات"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 border-2 border-white/30 hover:border-white/60 text-white font-black px-8 py-4 rounded-2xl text-base transition-all hover:bg-white/10"
            >
              <MessageCircle size={18} />
              تواصل معنا
            </a>
          </div>
        </div>
      </section>

      {/* ===== QUICK ACTIONS ===== */}
      <div className="bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-2 sm:grid-cols-4 divide-x divide-x-reverse divide-gray-100">
            {quickActions.map(({ icon: Icon, label, href }) => (
              <Link
                key={label}
                href={href}
                className="flex flex-col items-center gap-2.5 py-5 px-4 hover:bg-navy-700/5 transition-colors group"
              >
                <div className="w-11 h-11 rounded-xl bg-navy-700/8 group-hover:bg-navy-700 flex items-center justify-center transition-colors" style={{background:'rgba(23,59,115,0.08)'}}>
                  <Icon size={20} className="text-navy-700 group-hover:text-white transition-colors" />
                </div>
                <span className="text-sm font-bold text-gray-700 group-hover:text-navy-700 transition-colors text-center">{label}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
