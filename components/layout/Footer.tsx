import Link from 'next/link';
import { MapPin, Phone, Mail, Instagram, Twitter, Facebook, Youtube } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-navy-900 text-white">
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-5">
              <div className="w-12 h-12 rounded-xl bg-gradient-gold flex items-center justify-center">
                <span className="text-white font-black text-xl">م</span>
              </div>
              <div>
                <p className="font-bold text-lg leading-tight">محمد الحبيشي</p>
                <p className="text-gold-500 text-sm font-medium">العقارية</p>
              </div>
            </div>
            <p className="text-white/60 text-sm leading-7 mb-6">
              نحن شركة عقارية رائدة في الرياض متخصصة في بيع وشراء وتأجير العقارات الفاخرة. نقدم خدمات متكاملة بمعايير عالمية.
            </p>
            <div className="flex items-center gap-3">
              {[
                { icon: Twitter, href: '#', label: 'تويتر' },
                { icon: Instagram, href: '#', label: 'إنستغرام' },
                { icon: Facebook, href: '#', label: 'فيسبوك' },
                { icon: Youtube, href: '#', label: 'يوتيوب' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-lg bg-white/10 hover:bg-gold-500 flex items-center justify-center transition-all duration-200 hover:scale-110"
                >
                  <Icon size={16} />
                </a>
              ))}
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
                    className="text-white/60 hover:text-gold-500 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-500 transition-colors"></span>
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
                    className="text-white/60 hover:text-gold-500 text-sm transition-colors duration-200 flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-gold-500/40 group-hover:bg-gold-500 transition-colors"></span>
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
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold-500 mt-0.5 shrink-0" />
                <span className="text-white/60 text-sm leading-6">
                  الرياض، المملكة العربية السعودية<br />
                  حي العليا، طريق الملك فهد
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <a href="tel:+966500000000" className="text-white/60 hover:text-gold-500 text-sm transition-colors" dir="ltr">
                  +966 50 000 0000
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone size={18} className="text-gold-500 shrink-0" />
                <a href="tel:+966112345678" className="text-white/60 hover:text-gold-500 text-sm transition-colors" dir="ltr">
                  +966 11 234 5678
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail size={18} className="text-gold-500 shrink-0" />
                <a href="mailto:info@example.com" className="text-white/60 hover:text-gold-500 text-sm transition-colors">
                  info@example.com
                </a>
              </li>
            </ul>

            {/* Working Hours */}
            <div className="mt-6 p-4 bg-white/5 rounded-xl border border-white/10">
              <p className="text-gold-500 text-sm font-bold mb-2">أوقات العمل</p>
              <p className="text-white/60 text-xs leading-6">
                السبت – الخميس: 9 صباحاً – 9 مساءً<br />
                الجمعة: 4 مساءً – 9 مساءً
              </p>
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
            <Link href="/privacy" className="text-white/40 hover:text-gold-500 text-xs transition-colors">سياسة الخصوصية</Link>
            <span className="text-white/20">|</span>
            <Link href="/terms" className="text-white/40 hover:text-gold-500 text-xs transition-colors">الشروط والأحكام</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
