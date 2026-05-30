import Image from 'next/image';
import { Star } from 'lucide-react';
import SectionTitle from '@/components/ui/SectionTitle';
import { testimonials } from '@/data/properties';

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-1">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          size={14}
          className={i < rating ? 'text-gold-500 fill-gold-500' : 'text-gray-300'}
        />
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-navy-700 relative overflow-hidden">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMwLTkuOTQtOC4wNi0xOC0xOC0xOFYwaDQydjQySDM2VjE4eiIgZmlsbD0icmdiYSgyNTUsMjU1LDI1NSwwLjAyKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <SectionTitle
          badge="آراء عملاؤنا"
          title="ماذا يقول"
          highlight="عملاؤنا"
          subtitle="ثقة عملائنا هي أكبر شهادة على جودة خدماتنا وحرصنا على إرضائهم"
          center
          light
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-14">
          {testimonials.slice(0, 6).map((t) => (
            <div key={t.id} className="glass rounded-2xl p-7 hover:bg-white/15 transition-all duration-300 group">
              {/* Quote */}
              <div className="text-gold-500/30 text-7xl font-serif leading-none mb-4 select-none">"</div>

              <StarRating rating={t.rating} />

              <p className="text-white/75 text-sm leading-7 mt-4 mb-6 line-clamp-3">
                {t.content}
              </p>

              <div className="flex items-center gap-4 pt-4 border-t border-white/10">
                <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-gold-500/30">
                  <Image
                    src={t.avatar}
                    alt={t.name}
                    width={48}
                    height={48}
                    className="object-cover w-full h-full"
                  />
                </div>
                <div>
                  <p className="text-white font-bold text-sm">{t.name}</p>
                  <p className="text-gold-500 text-xs">{t.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
