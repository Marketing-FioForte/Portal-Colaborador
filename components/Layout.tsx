import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Menu, LogOut, Home, Award, HeartPulse, FileText, User } from 'lucide-react';
import BottomNav from './BottomNav';

const Layout: React.FC = () => {
  const location = useLocation();

  const navItems = [
    { label: 'Início', path: '/dashboard', icon: Home },
    { label: 'Treinamentos', path: '/treinamentos', icon: Award },
    { label: 'Saúde & Segurança', path: '/saude-seguranca', icon: HeartPulse },
    { label: 'Documentos RH', path: '/documentos-rh', icon: FileText },
    { label: 'Perfil', path: '/perfil', icon: User },
  ];

  return (
    <div className="min-h-screen bg-brand-bg flex flex-col md:flex-row">
      {/* Desktop Sidebar */}
      <aside className="hidden md:flex flex-col w-64 bg-white border-r border-gray-200 fixed h-full z-30">
        <div className="p-6 border-b border-gray-100 flex items-center justify-center">
          <div className="text-2xl font-bold text-brand-primary tracking-tighter">
            FioForte
          </div>
        </div>
        <nav className="flex-1 p-4 space-y-2">
          {navItems.map((item) => {
             const isActive = location.pathname === item.path;
             const Icon = item.icon;
             return (
               <Link
                 key={item.path}
                 to={item.path}
                 className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                   isActive 
                    ? 'bg-blue-50 text-brand-primary' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                 }`}
               >
                 <Icon size={20} className="mr-3" />
                 {item.label}
               </Link>
             )
          })}
        </nav>
        <div className="p-4 border-t border-gray-200">
           <Link to="/acesso" className="flex items-center px-4 py-3 rounded-lg text-sm font-medium text-red-600 hover:bg-red-50 transition-colors">
             <LogOut size={20} className="mr-3" />
             Sair
           </Link>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 md:ml-64 pb-20 md:pb-8 relative">
         {/* Mobile Header */}
         <header className="bg-white border-b border-gray-200 sticky top-0 z-20 md:hidden h-16 flex items-center justify-between px-4 shadow-sm">
           <div className="text-xl font-bold text-brand-primary">FioForte</div>
           <button className="text-gray-500 hover:text-gray-700">
             <Menu size={24} />
           </button>
         </header>

         {/* Content Area */}
         <div className="max-w-5xl mx-auto p-4 md:p-8">
           <Outlet />
         </div>
      </main>

      {/* Mobile Bottom Navigation */}
      <BottomNav />
    </div>
  );
};

export default Layout;