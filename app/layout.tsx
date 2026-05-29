import type { Metadata } from 'next';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import WhatsAppButton from '@/components/layout/WhatsAppButton';

export const metadata: Metadata = {
  title: {
    default: 'محمد الحبيشي العقارية | عقارات فاخرة في الرياض',
    template: '%s | محمد الحبيشي العقارية',
  },
  description: 'شركة محمد الحبيشي العقارية - متخصصون في بيع وشراء وتأجير العقارات الفاخرة في الرياض. فلل، شقق، أراضي، مكاتب تجارية بأفضل الأسعار.',
  keywords: ['عقارات الرياض', 'فلل للبيع', 'شقق للإيجار', 'محمد الحبيشي', 'عقارات فاخرة', 'استثمار عقاري'],
  authors: [{ name: 'محمد الحبيشي العقارية' }],
  creator: 'محمد الحبيشي العقارية',
  openGraph: {
    type: 'website',
    locale: 'ar_SA',
    siteName: 'محمد الحبيشي العقارية',
    title: 'محمد الحبيشي العقارية | عقارات فاخرة في الرياض',
    description: 'متخصصون في بيع وشراء وتأجير العقارات الفاخرة في الرياض',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'محمد الحبيشي العقارية',
    description: 'عقارات فاخرة في الرياض',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
  viewport: 'width=device-width, initial-scale=1',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ar" dir="rtl">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cairo:wght@300;400;500;600;700;800;900&family=Tajawal:wght@300;400;500;700;800&display=swap"
          rel="stylesheet"
        />
        <link
          rel="stylesheet"
          href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css"
          integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY="
          crossOrigin=""
        />
      </head>
      <body className="font-arabic">
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
