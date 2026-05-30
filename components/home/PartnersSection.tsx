import SectionTitle from '@/components/ui/SectionTitle';
import { partners } from '@/data/properties';

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100 relative overflow-hidden">
      {/* Logo watermark */}
      <div className="absolute inset-0 brand-bg-pattern pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <p className="text-center text-gray-400 text-sm font-medium mb-8 tracking-widest uppercase">
          شركاؤنا وعملاؤنا الموثوقون
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-6 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-50 hover:opacity-100 transition-all duration-300 group"
            >
              <div className="bg-navy-700/5 hover:bg-navy-700 rounded-xl px-3 py-3 w-full text-center transition-all duration-300 border border-navy-700/10 hover:border-navy-700">
                <span className="text-navy-700 group-hover:text-white text-xs font-bold leading-tight block transition-colors">
                  {partner.name}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
