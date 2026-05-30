'use client';
import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { Menu, X, Phone } from 'lucide-react';

const navLinks = [
  { href: '/', label: 'الرئيسية' },
  { href: '/properties', label: 'العقارات' },
  { href: '/map', label: 'الخريطة التفاعلية' },
  { href: '/projects', label: 'المشاريع' },
  { href: '/services', label: 'خدماتنا' },
  { href: '/about', label: 'من نحن' },
  { href: '/contact', label: 'تواصل معنا' },
];

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === '/';

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const headerBg = isScrolled || !isHome
    ? 'bg-navy-700/98 backdrop-blur-md shadow-luxury'
    : 'bg-transparent';

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${headerBg}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 h-12 shrink-0 rounded-xl overflow-hidden bg-white shadow-md ring-2 ring-gold-500/40">
              <Image
                src="/logo.jpg"
                alt="محمد الحبيشي العقارية"
                fill
                className="object-contain p-1"
                priority
              />
            </div>
            <div className="hidden sm:block">
              <p className="text-white font-bold text-sm leading-tight tracking-wide">محمد الحبيشي</p>
              <p className="text-gold-400 text-xs font-medium tracking-widest">العقارية</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-all duration-200 whitespace-nowrap
                  ${pathname === link.href
                    ? 'text-gold-400 bg-white/10'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-3">
            <a
              href="tel:+966573888610"
              className="hidden md:flex items-center gap-2 bg-gold-500 hover:bg-gold-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold transition-all duration-200 shadow-gold hover:shadow-lg"
            >
              <Phone size={15} />
              <span>اتصل الآن</span>
            </a>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="lg:hidden text-white p-2 rounded-lg hover:bg-white/10 transition-colors"
              aria-label="القائمة"
            >
              {isMobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden transition-all duration-300 overflow-hidden ${isMobileOpen ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}`}>
        <div className="bg-navy-700/98 backdrop-blur-md border-t border-white/10 px-4 py-4">
          <nav className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsMobileOpen(false)}
                className={`px-4 py-3 rounded-xl text-sm font-medium transition-colors
                  ${pathname === link.href
                    ? 'text-gold-400 bg-white/10'
                    : 'text-white/85 hover:text-white hover:bg-white/10'
                  }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="mt-2 grid grid-cols-2 gap-2">
              <a
                href="tel:+966573888610"
                className="flex items-center justify-center gap-2 bg-gold-500 text-white px-3 py-3 rounded-xl text-xs font-bold"
              >
                <Phone size={14} />
                للإيجار
              </a>
              <a
                href="tel:+966573888605"
                className="flex items-center justify-center gap-2 bg-navy-700 border border-white/20 text-white px-3 py-3 rounded-xl text-xs font-bold"
              >
                <Phone size={14} />
                للبيع
              </a>
            </div>
          </nav>
        </div>
      </div>
    </header>
  );
}
