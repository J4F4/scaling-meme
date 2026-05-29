import Image from 'next/image';
import Link from 'next/link';
import { Home, Key, BarChart3, Building2, FileText, Headphones, Shield, TrendingUp, CheckCircle2 } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'خدماتنا',
  description: 'خدمات عقارية متكاملة من محمد الحبيشي العقارية - بيع وشراء وتأجير وإدارة وتقييم عقاري',
};

const services = [
  {
    icon: Home,
    title: 'بيع وشراء العقارات',
    description: 'نوفر أفضل الفرص العقارية من فلل وشقق وأراضٍ بأسعار تنافسية وإجراءات قانونية سليمة بالكامل.',
    features: ['قاعدة بيانات ضخمة بأكثر من 500 عقار', 'تقييم عادل للأسعار', 'إجراءات ملكية كاملة', 'ضمان سلامة العقد'],
    image: 'https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80',
    color: 'from-blue-600 to-blue-800',
  },
  {
    icon: Key,
    title: 'تأجير العقارات',
    description: 'سواء كنت تبحث عن عقار للإيجار أو تريد تأجير عقارك، نضمن لك أفضل النتائج بأسرع وقت.',
    features: ['تقييم العقار مجاناً', 'تسويق احترافي', 'فحص المستأجرين', 'تحصيل الإيجار'],
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?w=800&q=80',
    color: 'from-emerald-600 to-emerald-800',
  },
  {
    icon: BarChart3,
    title: 'الاستشارات العقارية',
    description: 'خبراؤنا يقدمون لك دراسة جدوى شاملة وتحليل سوق دقيق لمساعدتك في اتخاذ أفضل قرار استثماري.',
    features: ['تحليل السوق', 'دراسة الجدوى', 'التخطيط الاستثماري', 'تقييم المخاطر'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80',
    color: 'from-amber-600 to-amber-800',
  },
  {
    icon: Building2,
    title: 'إدارة الأملاك',
    description: 'نتولى إدارة عقاراتك بالكامل من صيانة دورية وتأجير وتجديد عقود وتحصيل إيجارات وتقارير دورية.',
    features: ['صيانة دورية', 'إدارة المستأجرين', 'التقارير الشهرية', 'خدمة طوارئ 24/7'],
    image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&q=80',
    color: 'from-purple-600 to-purple-800',
  },
  {
    icon: FileText,
    title: 'التوثيق والتسجيل',
    description: 'نضمن إتمام جميع إجراءات البيع والشراء والتوثيق والتسجيل في الهيئة العامة للعقارات بشكل صحيح.',
    features: ['تسجيل الملكية', 'توثيق العقود', 'إجراءات الكاتب العدل', 'متابعة البلدية'],
    image: 'https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=800&q=80',
    color: 'from-rose-600 to-rose-800',
  },
  {
    icon: TrendingUp,
    title: 'التقييم العقاري',
    description: 'تقييم عقاري دقيق ومعتمد من خبراء معتمدين لتحديد القيمة السوقية العادلة لعقارك.',
    features: ['تقييم معتمد', 'تقرير مفصل', 'خبراء مرخصون', 'أسعار تنافسية'],
    image: 'https://images.unsplash.com/photo-1554224155-6726b3ff858f?w=800&q=80',
    color: 'from-cyan-600 to-cyan-800',
  },
];

export default function ServicesPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-gold-500 blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-blue-500 blur-3xl"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 border border-gold-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            ما نقدمه لك
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">خدماتنا العقارية</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-8">
            حلول عقارية متكاملة تغطي كل ما تحتاجه من بيع وشراء وتأجير وإدارة وتقييم واستشارات
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="space-y-16">
            {services.map((service, idx) => (
              <div
                key={service.title}
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${idx % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className={idx % 2 === 1 ? 'lg:order-2' : ''}>
                  <div className={`inline-flex items-center gap-3 bg-gradient-to-r ${service.color} text-white px-5 py-2.5 rounded-full text-sm font-bold mb-5`}>
                    <service.icon size={16} />
                    {service.title}
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-black text-navy-900 mb-4 leading-tight">{service.title}</h2>
                  <p className="text-gray-600 text-sm leading-8 mb-6">{service.description}</p>
                  <div className="grid grid-cols-2 gap-3">
                    {service.features.map((f) => (
                      <div key={f} className="flex items-center gap-2">
                        <CheckCircle2 size={16} className="text-gold-500 shrink-0" />
                        <span className="text-gray-600 text-sm">{f}</span>
                      </div>
                    ))}
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 mt-8 bg-navy-900 hover:bg-gold-500 text-white font-bold px-6 py-3 rounded-xl transition-all text-sm"
                  >
                    طلب الخدمة
                  </Link>
                </div>
                <div className={`${idx % 2 === 1 ? 'lg:order-1' : ''} relative rounded-2xl overflow-hidden aspect-[4/3] shadow-luxury`}>
                  <Image src={service.image} alt={service.title} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
                  <div className="absolute inset-0 bg-gradient-to-t from-navy-900/30 to-transparent"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle badge="كيف نعمل" title="خطوات" highlight="التعامل معنا" subtitle="عملية بسيطة وشفافة لضمان حصولك على أفضل نتيجة" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {[
              { step: '01', title: 'تواصل معنا', text: 'اتصل بنا أو أرسل رسالة واتساب وسيرد عليك مستشارنا فوراً' },
              { step: '02', title: 'تحديد الاحتياجات', text: 'نستمع لاحتياجاتك ونحدد المتطلبات والميزانية المناسبة' },
              { step: '03', title: 'عرض الخيارات', text: 'نقدم لك أفضل الخيارات المتاحة التي تناسب متطلباتك' },
              { step: '04', title: 'إتمام الصفقة', text: 'نرافقك خلال كل خطوة حتى إتمام الصفقة بنجاح' },
            ].map(({ step, title, text }) => (
              <div key={step} className="text-center relative">
                <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-5 relative z-10">
                  <span className="text-gold-400 font-black text-lg">{step}</span>
                </div>
                <h3 className="font-black text-navy-900 text-base mb-3">{title}</h3>
                <p className="text-gray-500 text-sm leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
