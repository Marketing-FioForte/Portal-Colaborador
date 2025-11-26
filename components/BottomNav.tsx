import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import { Home, Award, HeartPulse, FileText, User } from 'lucide-react';

const BottomNav: React.FC = () => {
  const location = useLocation();
  const currentPath = location.pathname;

  const navItems = [
    { label: 'Início', path: '/dashboard', icon: Home },
    { label: 'Treinos', path: '/treinamentos', icon: Award },
    { label: 'Saúde', path: '/saude-seguranca', icon: HeartPulse },
    { label: 'Docs RH', path: '/documentos-rh', icon: FileText },
    { label: 'Perfil', path: '/perfil', icon: User },
  ];

  return (
    <nav className="fixed bottom-0 left-0 right-0 z-50 bg-white border-t border-gray-200 pb-safe md:hidden shadow-[0_-4px_6px_-1px_rgba(0,0,0,0.05)]">
      <div className="flex justify-around items-center h-16">
        {navItems.map((item) => {
          const isActive = currentPath === item.path;
          const Icon = item.icon;
          
          return (
            <Link
              key={item.path}
              to={item.path}
              className={`flex flex-col items-center justify-center w-full h-full px-1 ${
                isActive ? 'text-brand-primary' : 'text-gray-400 hover:text-gray-600'
              }`}
            >
              <Icon size={22} strokeWidth={isActive ? 2.5 : 2} />
              <span className={`text-[10px] mt-1 font-medium ${isActive ? 'text-brand-primary' : 'text-gray-500'}`}>
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
};

export default BottomNav;