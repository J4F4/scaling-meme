'use client';
import { useEffect, useRef, useState } from 'react';
import { Building2, Users, Award, TrendingUp } from 'lucide-react';

const stats = [
  { icon: Building2, value: 500,  suffix: '+', label: 'عقار متاح', color: 'text-blue-400' },
  { icon: Users,     value: 1200, suffix: '+', label: 'عميل راضٍ', color: 'text-gold-400' },
  { icon: Award,     value: 15,   suffix:  '', label: 'سنة خبرة',  color: 'text-emerald-400' },
  { icon: TrendingUp,value: 98,   suffix: '%', label: 'نسبة رضا العملاء', color: 'text-purple-400' },
];

function useCounter(target: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  const [started, setStarted] = useState(false);

  const start = () => {
    if (started) return;
    setStarted(true);
    const startTime = Date.now();
    const tick = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  };

  return { count, start };
}

function StatItem({ icon: Icon, value, suffix, label, color, isVisible }: typeof stats[0] & { isVisible: boolean }) {
  const { count, start } = useCounter(value);
  useEffect(() => { if (isVisible) start(); }, [isVisible]);

  return (
    <div className="text-center group">
      <div className={`w-16 h-16 rounded-2xl bg-white/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-all duration-300`}>
        <Icon size={32} className={color} />
      </div>
      <p className={`text-4xl sm:text-5xl font-black counter-item mb-2 ${color}`}>
        {count.toLocaleString('ar-SA')}{suffix}
      </p>
      <p className="text-white/70 font-medium text-base">{label}</p>
    </div>
  );
}

export default function StatsSection() {
  const ref = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.3 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-20 bg-gradient-navy relative overflow-hidden">
      {/* Decoration */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-gold-500/30 to-transparent"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 rounded-full bg-gold-500/5 blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-10">
          {stats.map((stat) => (
            <StatItem key={stat.label} {...stat} isVisible={isVisible} />
          ))}
        </div>
      </div>
    </section>
  );
}
