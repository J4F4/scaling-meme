import Image from 'next/image';
import Link from 'next/link';
import { MapPin, Building2, CheckCircle2, Clock, ArrowUpRight } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { projects } from '@/data/properties';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'مشاريعنا',
  description: 'استكشف مشاريع وعمارات محمد الحبيشي العقارية في الرياض',
};

const statusConfig = {
  'completed': { label: 'مكتمل', color: 'bg-emerald-500', icon: CheckCircle2 },
  'under-construction': { label: 'قيد الإنشاء', color: 'bg-amber-500', icon: Clock },
  'upcoming': { label: 'قادم قريباً', color: 'bg-blue-500', icon: Building2 },
};

const typeLabels: Record<string, string> = {
  villa: 'فلل', apartment: 'شقق', land: 'أراضٍ', commercial: 'تجاري', compound: 'كمبوند',
};

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Hero */}
      <section className="py-24 bg-gradient-navy relative overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=1600&q=80"
            alt="مشاريعنا"
            fill
            className="object-cover opacity-15"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10 text-center">
          <span className="inline-flex items-center gap-2 bg-gold-500/20 text-gold-400 border border-gold-500/30 px-4 py-1.5 rounded-full text-sm font-bold mb-6">
            إنجازاتنا
          </span>
          <h1 className="text-4xl sm:text-5xl font-black text-white mb-6">مشاريعنا وعماراتنا</h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto leading-8">
            مجموعة متميزة من المشاريع العقارية المكتملة وتحت الإنشاء والقادمة قريباً في أرقى مناطق الرياض
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {[
              { value: '4', label: 'مشاريع' },
              { value: '433', label: 'وحدة' },
              { value: '2', label: 'مكتمل' },
              { value: '1', label: 'قيد الإنشاء' },
            ].map(({ value, label }) => (
              <div key={label} className="glass px-5 py-3 rounded-xl text-center">
                <p className="text-2xl font-black text-gold-400">{value}</p>
                <p className="text-white/70 text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project) => {
              const { label, color, icon: StatusIcon } = statusConfig[project.status];
              const progress = project.totalUnits > 0
                ? Math.round((project.completedUnits / project.totalUnits) * 100)
                : 0;

              return (
                <div key={project.id} className="bg-white rounded-2xl overflow-hidden shadow-card hover:shadow-card-hover transition-all duration-300 group">
                  {/* Image */}
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover transition-transform duration-700 group-hover:scale-110"
                      sizes="(max-width: 768px) 100vw, 50vw"
                    />
                    <div className="absolute inset-0 bg-gradient-overlay"></div>
                    <div className="absolute top-4 right-4">
                      <span className={`${color} text-white text-xs font-bold px-3 py-1.5 rounded-full flex items-center gap-1.5 shadow-lg`}>
                        <StatusIcon size={12} />
                        {label}
                      </span>
                    </div>
                    <div className="absolute bottom-4 right-4">
                      <span className="bg-navy-900/80 text-gold-400 text-xs font-bold px-3 py-1.5 rounded-full backdrop-blur-sm">
                        {typeLabels[project.type] || project.type}
                      </span>
                    </div>
                    <div className="absolute bottom-4 left-4">
                      <div className="glass rounded-xl px-3 py-2 text-center">
                        <p className="text-white font-black text-lg leading-none">{project.totalUnits}</p>
                        <p className="text-white/70 text-xs">وحدة</p>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-7">
                    <div className="flex items-start justify-between gap-4 mb-3">
                      <h2 className="font-black text-navy-900 text-lg leading-tight">{project.title}</h2>
                      <span className="text-gold-500 shrink-0">
                        <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                      </span>
                    </div>

                    <div className="flex items-center gap-2 text-gray-400 text-xs mb-4">
                      <MapPin size={13} />
                      <span>{project.location}</span>
                    </div>

                    <p className="text-gray-500 text-sm leading-7 mb-5 line-clamp-2">{project.description}</p>

                    {/* Progress */}
                    {project.status === 'under-construction' && (
                      <div className="mb-5">
                        <div className="flex justify-between text-xs font-bold mb-2">
                          <span className="text-gray-600">نسبة الإنجاز</span>
                          <span className="text-gold-600">{progress}%</span>
                        </div>
                        <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-gradient-gold rounded-full transition-all duration-1000"
                            style={{ width: `${progress}%` }}
                          />
                        </div>
                        <p className="text-gray-400 text-xs mt-2">
                          {project.completedUnits} من {project.totalUnits} وحدة مكتملة
                        </p>
                      </div>
                    )}

                    <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                      <div>
                        <p className="text-xs text-gray-400">موعد التسليم</p>
                        <p className="text-navy-900 font-bold text-sm">{project.completionDate}</p>
                      </div>
                      <Link
                        href="/contact"
                        className="bg-navy-900 hover:bg-gold-500 text-white text-sm font-bold px-5 py-2.5 rounded-xl transition-all"
                      >
                        طلب معلومات
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-navy-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 text-center">
          <h2 className="text-3xl font-black text-white mb-4">
            مهتم بالاستثمار في مشاريعنا؟
          </h2>
          <p className="text-white/70 mb-8">تواصل معنا اليوم للحصول على معلومات تفصيلية وعروض خاصة للمستثمرين</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/contact" className="bg-gold-500 hover:bg-gold-600 text-white font-bold px-8 py-4 rounded-xl transition-all">
              تواصل معنا
            </Link>
            <a
              href="https://wa.me/966573888610?text=أود الاستفسار عن مشاريعكم العقارية"
              target="_blank"
              rel="noopener noreferrer"
              className="glass border border-white/20 text-white font-bold px-8 py-4 rounded-xl transition-all hover:border-green-400"
            >
              واتساب مباشر
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
