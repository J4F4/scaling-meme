import Image from 'next/image';
import { CheckCircle2, Award, Users, Building2, Target, Eye, Heart } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'من نحن',
  description: 'تعرف على شركة محمد الحبيشي العقارية وقصة نجاحنا في سوق العقارات السعودي',
};

const team = [
  {
    name: 'محمد الحبيشي',
    role: 'المؤسس والمدير العام',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&q=80',
    bio: 'أكثر من 20 عاماً من الخبرة في سوق العقارات السعودي',
  },
  {
    name: 'أحمد العمري',
    role: 'مدير المبيعات',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&q=80',
    bio: 'متخصص في بيع الفلل والمجمعات السكنية الفاخرة',
  },
  {
    name: 'سلمى الغامدي',
    role: 'مستشارة عقارية',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&q=80',
    bio: 'خبيرة في تأجير الوحدات السكنية والتجارية',
  },
  {
    name: 'عبدالله الشمري',
    role: 'مدير الاستثمار',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&q=80',
    bio: 'متخصص في الاستشارات الاستثمارية والتقييم العقاري',
  },
];

const values = [
  { icon: Target, title: 'رسالتنا', text: 'تقديم أفضل الحلول العقارية بشفافية ونزاهة، وضمان رضا عملائنا الكامل في كل معاملة.' },
  { icon: Eye, title: 'رؤيتنا', text: 'أن نكون الشركة العقارية الأولى والأكثر موثوقية في المملكة العربية السعودية بحلول عام 2030.' },
  { icon: Heart, title: 'قيمنا', text: 'الأمانة والشفافية والاحترافية في التعامل مع عملائنا وشركائنا وموظفينا.' },
];

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="relative py-24 bg-gradient-navy overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="من نحن"
            fill
            className="object-cover opacity-20"
          />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 border border-gold-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            قصتنا
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">
            من نحن
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-8">
            شركة عقارية سعودية رائدة تأسست على أسس من الخبرة والثقة والالتزام بتقديم أفضل الخدمات العقارية
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <SectionTitle
                badge="قصتنا"
                title="15 عاماً من"
                highlight="التميز العقاري"
                subtitle="رحلة بدأت بحلم وأصبحت واقعاً يخدم آلاف العائلات السعودية"
              />
              <div className="mt-8 space-y-4 text-gray-600 text-sm leading-8">
                <p>
                  تأسست شركة محمد الحبيشي العقارية عام 2009 برؤية واضحة: تقديم خدمات عقارية متكاملة تجمع بين الاحترافية العالية والأمانة الكاملة في التعامل.
                </p>
                <p>
                  بدأنا بفريق صغير من المتخصصين ونما خلال السنوات لنصبح اليوم من أبرز الشركات العقارية في الرياض، مع سجل حافل يضم أكثر من 1,200 صفقة ناجحة.
                </p>
                <p>
                  نفخر بثقة عملائنا الذين يعودون إلينا مرة بعد مرة، لأننا نضع مصالحهم فوق كل اعتبار ونقدم لهم الحل الأمثل لاحتياجاتهم العقارية.
                </p>
              </div>
              <div className="grid grid-cols-3 gap-6 mt-10">
                {[
                  { value: '15+', label: 'سنة خبرة' },
                  { value: '1200+', label: 'صفقة ناجحة' },
                  { value: '500+', label: 'عميل راضٍ' },
                ].map(({ value, label }) => (
                  <div key={label} className="text-center">
                    <p className="text-3xl font-black text-navy-900 gradient-text">{value}</p>
                    <p className="text-gray-500 text-xs mt-1">{label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-square shadow-luxury">
                <Image
                  src="https://images.unsplash.com/photo-1560520653-9e0e4c89eb11?w=800&q=80"
                  alt="مكتبنا"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-gold-500 text-white p-6 rounded-2xl shadow-gold">
                <p className="text-3xl font-black">15+</p>
                <p className="text-sm font-medium opacity-90">سنة من الثقة</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-cream-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle badge="ما يميزنا" title="رسالتنا ورؤيتنا" highlight="وقيمنا" center />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-14">
            {values.map(({ icon: Icon, title, text }) => (
              <div key={title} className="bg-white rounded-2xl p-8 shadow-card text-center hover:shadow-card-hover transition-all">
                <div className="w-16 h-16 bg-navy-900 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Icon size={28} className="text-gold-400" />
                </div>
                <h3 className="font-black text-navy-900 text-xl mb-4">{title}</h3>
                <p className="text-gray-500 text-sm leading-7">{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionTitle badge="فريقنا" title="الخبراء" highlight="المتخصصون" subtitle="فريق من أمهر المتخصصين في سوق العقارات السعودي" center />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-14">
            {team.map((member) => (
              <div key={member.name} className="group text-center">
                <div className="relative w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 border-4 border-gray-100 group-hover:border-gold-500 transition-all duration-300 shadow-card">
                  <Image src={member.image} alt={member.name} fill className="object-cover" />
                </div>
                <h3 className="font-black text-navy-900 text-base mb-1">{member.name}</h3>
                <p className="text-gold-500 text-sm font-bold mb-2">{member.role}</p>
                <p className="text-gray-500 text-xs leading-6">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us */}
      <section className="py-20 bg-navy-900 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
          <SectionTitle badge="لماذا نحن" title="لماذا تختار" highlight="الحبيشي" subtitle="ما يجعلنا الخيار الأول لعملائنا" center light />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
            {[
              'فريق متخصص ومرخص من الهيئة العامة للعقارات',
              'خبرة أكثر من 15 عاماً في سوق الرياض',
              'قاعدة بيانات ضخمة بأكثر من 500 عقار',
              'إجراءات قانونية سليمة 100%',
              'شفافية تامة في الأسعار والمعاملات',
              'خدمة عملاء 24/7 على مدار الأسبوع',
              'ضمان أفضل سعر في السوق',
              'شبكة علاقات واسعة مع كبار الملاك',
              'تمويل عقاري بالتعاون مع كبار البنوك',
            ].map((point) => (
              <div key={point} className="flex items-start gap-3 glass rounded-xl p-4">
                <CheckCircle2 size={18} className="text-gold-400 mt-0.5 shrink-0" />
                <span className="text-white/80 text-sm leading-6">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
