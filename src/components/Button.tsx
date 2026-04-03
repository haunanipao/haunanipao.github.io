import { Calendar, ArrowUpRight } from "lucide-react";

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: 'calendar' | 'arrow';
  className?: string;
}

export const PortfolioButton = ({ label, href, variant = 'primary', icon, className = "" }: ButtonProps) => {
  const baseStyles = "inline-flex items-center justify-center gap-2 px-4 py-2.5 md:px-6 md:py-3 rounded-full font-semibold tracking-wider transition-all duration-200 uppercase whitespace-nowrap";
  
  const variants = {
    primary: "bg-primary text-white hover:scale-105 hover-primary shadow-lg shadow-primary/20",
    secondary: "bg-white text-bg hover:bg-dsn-hover hover:scale-105"
  };

  // responsive text: text-[10px] for mobile, text-xs for tablet, text-sm for desktop
  const textStyles = "text-[10px] sm:text-xs lg:text-sm";

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${textStyles} ${className}`}
    >
      {icon === 'calendar' && <Calendar size={16} className="shrink-0" />}
      {label}
      {icon === 'arrow' && <ArrowUpRight size={16} className="shrink-0" />}
    </a>
  );
};