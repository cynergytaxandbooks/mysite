import React from 'react';
import { Link } from 'react-router-dom';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'accent' | 'outline';
  to?: string;
  onClick?: () => void;
  className?: string;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  to, 
  onClick, 
  className = '',
  type = 'button',
  disabled = false
}) => {
  const baseStyles = "inline-flex items-center justify-center px-6 py-3 border text-base font-medium rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed";
  
  const variants = {
    primary: "border-transparent text-white bg-emerald hover:bg-emerald/90 focus:ring-emerald",
    secondary: "border-transparent text-navy bg-white hover:bg-gray-50 focus:ring-navy",
    accent: "border-transparent text-white bg-burntOrange hover:bg-burntOrange/90 focus:ring-burntOrange",
    outline: "border-navy text-navy bg-transparent hover:bg-navy/5 focus:ring-navy"
  };

  const combinedClassName = `${baseStyles} ${variants[variant]} ${className}`;

  if (to && !disabled) {
    return (
      <Link to={to} className={combinedClassName}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} className={combinedClassName} disabled={disabled}>
      {children}
    </button>
  );
};

export default Button;