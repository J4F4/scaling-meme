import Link from 'next/link';
import { ReactNode } from 'react';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'gold';
  size?: 'sm' | 'md' | 'lg';
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
  fullWidth?: boolean;
  external?: boolean;
}

const variants = {
  primary: 'bg-navy-900 hover:bg-navy-700 text-white shadow-luxury hover:shadow-xl',
  secondary: 'bg-white hover:bg-gray-50 text-navy-900 shadow-card hover:shadow-card-hover border border-gray-200',
  outline: 'bg-transparent border-2 border-navy-900 text-navy-900 hover:bg-navy-900 hover:text-white',
  ghost: 'bg-transparent hover:bg-navy-900/5 text-navy-900',
  gold: 'bg-gradient-gold hover:opacity-90 text-white shadow-gold hover:shadow-xl',
};

const sizes = {
  sm: 'px-4 py-2 text-sm rounded-lg',
  md: 'px-6 py-3 text-sm rounded-xl',
  lg: 'px-8 py-4 text-base rounded-xl',
};

export default function Button({
  children,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  className = '',
  type = 'button',
  disabled = false,
  fullWidth = false,
  external = false,
}: ButtonProps) {
  const baseClasses = `inline-flex items-center justify-center gap-2 font-bold transition-all duration-200 cursor-pointer select-none
    ${variants[variant]} ${sizes[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : 'hover:scale-[1.02] active:scale-[0.98]'} ${className}`;

  if (href) {
    if (external) {
      return (
        <a href={href} target="_blank" rel="noopener noreferrer" className={baseClasses}>
          {children}
        </a>
      );
    }
    return <Link href={href} className={baseClasses}>{children}</Link>;
  }

  return (
    <button type={type} onClick={onClick} className={baseClasses} disabled={disabled}>
      {children}
    </button>
  );
}
