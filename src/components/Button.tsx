import { Calendar, ArrowUpRight } from "lucide-react";

interface ButtonProps {
  label: string;
  href: string;
  variant?: 'primary' | 'secondary';
  icon?: 'calendar' | 'arrow';
  size?: 'sm' | 'md' | 'lg'; // Added size prop
  className?: string;
}

export const PortfolioButton = ({ 
  label, 
  href, 
  variant = 'primary', 
  icon, 
  size = 'md', 
  className = "" 
}: ButtonProps) => {
  
  // Define scale based on size
  const sizeStyles = {
    sm: "px-4 py-2 text-[10px] sm:text-xs",          // Nav style
    md: "px-6 py-3 text-xs sm:text-sm md:text-base", // Default / Tablet
    lg: "px-8 py-4 sm:px-10 sm:py-5 text-sm sm:text-lg md:text-xl" // Hero / Contact
  };

  const iconSizes = {
    sm: 14,
    md: 18,
    lg: 24
  };

  const baseStyles = "inline-flex items-center justify-center gap-2 md:gap-3 rounded-full font-semibold tracking-wider transition-all duration-200 uppercase whitespace-nowrap";
  const variantStyles = {
    primary: "bg-primary text-white hover:scale-105 hover-primary shadow-lg shadow-primary/20",
    secondary: "bg-white text-bg hover:bg-dsn-hover hover:scale-105"
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`}
    >
      {icon === 'calendar' && <Calendar size={iconSizes[size]} className="shrink-0" />}
      {label}
      {icon === 'arrow' && <ArrowUpRight size={iconSizes[size]} className="shrink-0" />}
    </a>
  );
};