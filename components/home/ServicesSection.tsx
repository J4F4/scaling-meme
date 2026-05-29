import Link from 'next/link';
import { Home, BarChart3, Key, Building2, FileText, Headphones } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';

const services = [
  {
    icon: Home,
    title: 'بيع وشراء العقارات',
    description: 'نوفر أفضل الفرص العقارية من فلل وشقق وأراضٍ بأسعار تنافسية وإجراءات سلسة.',
    color: 'bg-blue-50 text-blue-600',
  },
  {
    icon: Key,
    title: 'تأجير العقارات',
    description: 'نساعدك في إيجاد عقارك المثالي للإيجار أو تأجير عقارك بأعلى سعر وأسرع وقت.',
    color: 'bg-emerald-50 text-emerald-600',
  },
  {
    icon: BarChart3,
    title: 'الاستشارات العقارية',
    description: 'فريق من الخبراء المتخصصين يقدم لك أفضل النصائح والاستشارات الاستثمارية العقارية.',
    color: 'bg-gold-500/10 text-gold-600',
  },
  {
    icon: Building2,
    title: 'إدارة الأملاك',
    description: 'نتولى إدارة عقاراتك بالكامل من صيانة وتأجير وتحصيل إيجارات بكل احترافية.',
    color: 'bg-purple-50 text-purple-600',
  },
  {
    icon: FileText,
    title: 'التوثيق والتسجيل',
    description: 'نضمن لك إتمام جميع إجراءات البيع والشراء والتوثيق والتسجيل بشكل قانوني سليم.',
    color: 'bg-rose-50 text-rose-600',
  },
  {
    icon: Headphones,
    title: 'خدمة ما بعد البيع',
    description: 'لا تنتهي خدمتنا بإتمام الصفقة، نحن معك في كل خطوة لضمان رضاك التام.',
    color: 'bg-cyan-50 text-cyan-600',
  },
];

export default function ServicesSection() {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <SectionTitle
          badge="ما نقدمه"
          title="خدماتنا"
          highlight="العقارية"
          subtitle="نقدم حلولاً عقارية متكاملة تلبي جميع احتياجاتك بأعلى معايير الجودة والاحترافية"
          center
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {services.map((service, idx) => (
            <div
              key={service.title}
              className="group p-7 rounded-2xl border border-gray-100 hover:border-gold-500/30 hover:shadow-card-hover transition-all duration-300 bg-white"
            >
              <div className={`w-14 h-14 ${service.color} rounded-2xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon size={26} />
              </div>
              <h3 className="font-bold text-navy-900 text-lg mb-3">{service.title}</h3>
              <p className="text-gray-500 text-sm leading-7">{service.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 bg-navy-900 hover:bg-gold-500 text-white font-bold px-8 py-4 rounded-xl transition-all duration-200 hover:shadow-gold"
          >
            اعرف أكثر عن خدماتنا
          </Link>
        </div>
      </div>
    </section>
  );
}
