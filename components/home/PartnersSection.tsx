import SectionTitle from '@/components/ui/SectionTitle';
import { partners } from '@/data/properties';

export default function PartnersSection() {
  return (
    <section className="py-16 bg-white border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <p className="text-center text-gray-400 text-sm font-medium mb-8 tracking-widest uppercase">
          شركاؤنا وعملاؤنا الموثوقون
        </p>
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-8 items-center">
          {partners.map((partner) => (
            <div
              key={partner.id}
              className="flex items-center justify-center opacity-40 hover:opacity-80 transition-opacity duration-300 grayscale hover:grayscale-0"
            >
              <div className="bg-gray-100 rounded-xl px-4 py-3 w-full text-center">
                <span className="text-gray-600 text-xs font-bold leading-tight block">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
