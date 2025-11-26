import React from 'react';

interface CardProps {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  title?: string;
  subtitle?: string;
  action?: React.ReactNode;
}

const Card: React.FC<CardProps> = ({ children, className = '', onClick, title, subtitle, action }) => {
  return (
    <div 
      onClick={onClick}
      className={`bg-white rounded-xl border border-gray-200 shadow-sm overflow-hidden ${onClick ? 'cursor-pointer hover:shadow-md transition-shadow' : ''} ${className}`}
    >
      {(title || subtitle || action) && (
        <div className="px-4 py-4 sm:px-6 border-b border-gray-100 flex justify-between items-start">
          <div>
            {title && <h3 className="text-lg leading-6 font-semibold text-gray-900">{title}</h3>}
            {subtitle && <p className="mt-1 max-w-2xl text-sm text-gray-500">{subtitle}</p>}
          </div>
          {action && <div className="ml-4 flex-shrink-0">{action}</div>}
        </div>
      )}
      <div className="px-4 py-4 sm:px-6">
        {children}
      </div>
    </div>
  );
};

export default Card;