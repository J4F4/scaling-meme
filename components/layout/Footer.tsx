import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Phone, Mail, Instagram, Twitter, ExternalLink } from 'lucide-react';

const phones = [
  { number: '0573888610', label: 'للإيجار', href: 'tel:+966573888610' },
  { number: '0573888605', label: 'للبيع', href: 'tel:+966573888605' },
  { number: '0573888604', label: 'مبيعات', href: 'tel:+966573888604' },
  { number: '0573888601', label: 'خدمة العملاء', href: 'tel:+966573888601' },
];

export default function Footer() {
  return (
    <footer className="bg-navy-700 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="relative w-14 h-14 shrink-0 rounded-xl overflow-hidden bg-white ring-2 ring-gold-500/30">
                <Image
                  src="/logo.jpg"
                  alt="محمد الحبيشي العقارية"
                  fill
                  className="object-contain p-1"
                />
              </div>
              <div>
                <p className="font-bold text-base leading-tight">محمد الحبيشي</p>
                <p className="text-gold-400 text-sm font-medium">العقارية</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-7 mb-5">
              شركة عقارية رائدة في الرياض متخصصة في بيع وشراء وتأجير العقارات الفاخرة بمعايير عالمية.
            </p>

            {/* Social + Links */}
            <div className="flex flex-wrap items-center gap-2">
              <a
                href="https://whatsapp.com/channel/0029VaPvG7pBfxo3NHfsoD0z"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="قناة الواتساب"
                className="flex items-center gap-1.5 bg-[#25D366]/20 hover:bg-[#25D366]/40 border border-[#25D366]/30 text-[#25D366] text-xs font-bold px-3 py-1.5 rounded-full transition-all"
              >
                <svg viewBox="0 0 32 32" width="14" height="14" fill="currentColor">
                  <path d="M16 1C7.716 1 1 7.716 1 16c0 2.627.68 5.096 1.872 7.244L1 31l8.014-1.848A14.945 14.945 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm6.843 20.63c-.374-.188-2.215-1.093-2.558-1.217-.343-.125-.593-.188-.843.188-.25.375-.968 1.217-1.187 1.468-.218.25-.437.281-.812.094-.374-.188-1.578-.582-3.005-1.854-1.11-.992-1.86-2.217-2.078-2.591-.218-.374-.023-.578.165-.765.169-.17.374-.437.562-.656.188-.218.25-.375.375-.625.124-.25.062-.468-.031-.656-.094-.187-.843-2.031-1.155-2.78-.304-.73-.613-.631-.843-.643-.218-.01-.468-.013-.718-.013-.25 0-.656.094-.999.468-.343.375-1.312 1.281-1.312 3.124s1.343 3.624 1.53 3.874c.188.25 2.644 4.04 6.406 5.665.895.386 1.593.617 2.137.79.897.285 1.714.244 2.36.148.72-.107 2.215-.905 2.527-1.78.312-.874.312-1.624.218-1.78-.093-.156-.343-.25-.718-.437z"/>
                </svg>
                قناة الواتساب
              </a>
              <a
                href="https://linktr.ee/AlhubishiRE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Linktree"
                className="flex items-center gap-1.5 bg-white/10 hover:bg-white/20 text-white/80 text-xs font-bold px-3 py-1.5 rounded-full transition-all"
              >
                <ExternalLink size={12} />
                روابطنا
              </a>
              <a
                href="https://twitter.com/AlhubishiRE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="تويتر"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-all"
              >
                <Twitter size={14} />
              </a>
              <a
                href="https://instagram.com/AlhubishiRE"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="إنستغرام"
                className="w-8 h-8 rounded-full bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-all"
              >
                <Instagram size={14} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gold-500 rounded-full inline-block"></span>
              روابط سريعة
            </h3>
            <ul className="space-y-3">
              {[
                { href: '/properties', label: 'العقارات المتاحة' },
                { href: '/projects', label: 'مشاريعنا' },
                { href: '/map', label: 'الخريطة التفاعلية' },
                { href: '/services', label: 'خدماتنا' },
                { href: '/about', label: 'من نحن' },
                { href: '/contact', label: 'تواصل معنا' },
                { href: '/admin', label: 'لوحة التحكم' },
              ].map(({ href, label }) => (
                <li key={href}>
                  <Link
                    href={href}
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors"></span>
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h3 className="font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gold-500 rounded-full inline-block"></span>
              أنواع العقارات
            </h3>
            <ul className="space-y-3">
              {[
                'فلل للبيع', 'شقق للإيجار', 'أراضي تجارية', 'مكاتب ومحلات',
                'عمارات سكنية', 'مستودعات', 'استثمارات عقارية', 'مشاريع كاملة',
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/properties"
                    className="text-white/60 hover:text-gold-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-400 transition-colors"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-bold text-base mb-5 flex items-center gap-2">
              <span className="w-1 h-5 bg-gold-500 rounded-full inline-block"></span>
              تواصل معنا
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin size={16} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-6">
                  الرياض، المملكة العربية السعودية
                </span>
              </li>
              {phones.map(({ number, label, href }) => (
                <li key={number} className="flex items-center gap-3">
                  <Phone size={15} className="text-gold-400 shrink-0" />
                  <div className="flex items-center gap-2">
                    <a href={href} className="text-white/70 hover:text-gold-400 text-sm transition-colors font-medium" dir="ltr">
                      {number}
                    </a>
                    <span className="text-white/30 text-xs">({label})</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* WhatsApp Channel */}
            <div className="mt-5 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-gold-400 text-xs font-bold mb-2">قنواتنا</p>
              <div className="space-y-2">
                <a
                  href="https://whatsapp.com/channel/0029VaPvG7pBfxo3NHfsoD0z"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-[#25D366] hover:text-[#20c05e] text-xs font-medium transition-colors"
                >
                  <svg viewBox="0 0 32 32" width="13" height="13" fill="currentColor"><path d="M16 1C7.716 1 1 7.716 1 16c0 2.627.68 5.096 1.872 7.244L1 31l8.014-1.848A14.945 14.945 0 0016 31c8.284 0 15-6.716 15-15S24.284 1 16 1zm6.843 20.63c-.374-.188-2.215-1.093-2.558-1.217-.343-.125-.593-.188-.843.188-.25.375-.968 1.217-1.187 1.468-.218.25-.437.281-.812.094-.374-.188-1.578-.582-3.005-1.854-1.11-.992-1.86-2.217-2.078-2.591-.218-.374-.023-.578.165-.765.169-.17.374-.437.562-.656.188-.218.25-.375.375-.625.124-.25.062-.468-.031-.656-.094-.187-.843-2.031-1.155-2.78-.304-.73-.613-.631-.843-.643-.218-.01-.468-.013-.718-.013-.25 0-.656.094-.999.468-.343.375-1.312 1.281-1.312 3.124s1.343 3.624 1.53 3.874c.188.25 2.644 4.04 6.406 5.665.895.386 1.593.617 2.137.79.897.285 1.714.244 2.36.148.72-.107 2.215-.905 2.527-1.78.312-.874.312-1.624.218-1.78-.093-.156-.343-.25-.718-.437z"/></svg>
                  قناة الواتساب الرسمية
                </a>
                <a
                  href="https://linktr.ee/AlhubishiRE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-white/50 hover:text-gold-400 text-xs font-medium transition-colors"
                >
                  <ExternalLink size={12} />
                  كل روابطنا — Linktree
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-white/40 text-sm text-center">
            © {new Date().getFullYear()} محمد الحبيشي العقارية. جميع الحقوق محفوظة.
          </p>
          <div className="flex items-center gap-4">
            <Link href="/privacy" className="text-white/40 hover:text-gold-400 text-xs transition-colors">سياسة الخصوصية</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="text-white/40 hover:text-gold-400 text-xs transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
