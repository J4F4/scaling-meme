interface SectionTitleProps {
  badge?: string;
  title: string;
  highlight?: string;
  subtitle?: string;
  center?: boolean;
  light?: boolean;
}

export default function SectionTitle({
  badge,
  title,
  highlight,
  subtitle,
  center = false,
  light = false,
}: SectionTitleProps) {
  return (
    <div className={`${center ? 'text-center' : ''}`}>
      {badge && (
        <span className="inline-flex items-center gap-2 bg-gold-500/10 text-gold-600 border border-gold-500/20 px-4 py-1.5 rounded-full text-sm font-bold mb-4">
          <span className="w-1.5 h-1.5 rounded-full bg-gold-500 inline-block"></span>
          {badge}
        </span>
      )}
      <h2 className={`text-3xl sm:text-4xl font-black leading-tight mb-3 ${light ? 'text-white' : 'text-navy-900'}`}>
        {title}
        {highlight && (
          <>
            {' '}
            <span className="gradient-text">{highlight}</span>
          </>
        )}
      </h2>
      <div className={`section-divider ${center ? 'mx-auto' : ''} mb-4`}></div>
      {subtitle && (
        <p className={`text-base leading-7 max-w-2xl ${center ? 'mx-auto' : ''} ${light ? 'text-white/70' : 'text-gray-500'}`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}
