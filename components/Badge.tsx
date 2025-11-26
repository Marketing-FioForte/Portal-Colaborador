import React from 'react';
import { Status } from '../types';

interface BadgeProps {
  status?: Status;
  text?: string;
  variant?: 'success' | 'danger' | 'warning' | 'neutral';
}

const Badge: React.FC<BadgeProps> = ({ status, text, variant }) => {
  let badgeClasses = "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium";
  let displayVariant = variant;

  // Auto-detect variant from status if not provided
  if (!displayVariant && status) {
    if (status === 'valido') displayVariant = 'success';
    else if (status === 'vencido') displayVariant = 'danger';
    else if (status === 'em_andamento') displayVariant = 'neutral';
  }

  // Fallback
  if (!displayVariant) displayVariant = 'neutral';

  const styles = {
    success: "bg-green-100 text-green-800",
    danger: "bg-red-100 text-red-800",
    warning: "bg-yellow-100 text-yellow-800",
    neutral: "bg-blue-100 text-blue-800",
  };

  const labels = {
    valido: "Válido",
    vencido: "Vencido",
    em_andamento: "Em andamento"
  };

  const displayText = text || (status ? labels[status] : "Status");

  return (
    <span className={`${badgeClasses} ${styles[displayVariant]}`}>
      {displayText}
    </span>
  );
};

export default Badge;