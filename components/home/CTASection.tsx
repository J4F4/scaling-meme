import Link from 'next/link';
import { Phone, MessageCircle, ArrowLeft } from 'lucide-react';

export default function CTASection() {
  return (
    <section className="py-20 bg-gradient-navy relative overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-72 h-72 rounded-full bg-gold-500 blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 rounded-full bg-blue-500 blur-3xl"></div>
      </div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center relative z-10">
        <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 border border-gold-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
          <span className="w-2 h-2 rounded-full bg-gold-400 animate-pulse"></span>
          هل أنت مستعد؟
        </span>

        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white leading-tight mb-6">
          ابدأ رحلتك العقارية
          <br />
          <span className="gradient-text">معنا اليوم</span>
        </h2>

        <p className="text-white/70 text-lg leading-8 mb-10 max-w-2xl mx-auto">
          سواء كنت تبحث عن منزل أحلامك أو فرصة استثمارية مربحة، فريقنا جاهز لمساعدتك في كل خطوة.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/properties"
            className="inline-flex items-center justify-center gap-2 bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-gold text-base"
          >
            تصفح العقارات
            <ArrowLeft size={18} />
          </Link>
          <a
            href="https://wa.me/966500000000?text=مرحباً، أود الاستفسار عن عقار"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 glass border border-white/20 hover:border-green-400/50 text-white hover:text-green-400 font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            <MessageCircle size={18} />
            تواصل واتساب
          </a>
          <a
            href="tel:+966500000000"
            className="inline-flex items-center justify-center gap-2 glass border border-white/20 hover:border-gold-400/50 text-white hover:text-gold-400 font-bold px-8 py-4 rounded-xl transition-all duration-200 text-base"
          >
            <Phone size={18} />
            اتصل الآن
          </a>
        </div>
      </div>
    </section>
  );
}
