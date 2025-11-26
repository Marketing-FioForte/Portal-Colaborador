import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowRight, Lock, User as UserIcon } from 'lucide-react';
import Button from '../components/Button';

const Login: React.FC = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({ login: '', password: '' });

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API delay
    setTimeout(() => {
      setIsLoading(false);
      navigate('/dashboard');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-brand-bg flex items-center justify-center p-4">
      <div className="max-w-md w-full">
        {/* Brand Logo Placeholder */}
        <div className="flex justify-center mb-8">
           <div className="h-16 w-16 bg-brand-primary rounded-xl flex items-center justify-center transform rotate-3 shadow-lg">
              <span className="text-white font-bold text-2xl">FF</span>
           </div>
        </div>

        <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="px-8 pt-8 pb-6">
            <h1 className="text-2xl font-bold text-center text-gray-900 mb-2">
              Acesse seu painel
            </h1>
            <p className="text-center text-gray-500 mb-8 text-sm">
              Consulte seus treinamentos, ASO e documentos de forma rápida e segura.
            </p>

            <form onSubmit={handleLogin} className="space-y-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="login">
                  Matrícula ou e-mail
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <UserIcon className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="login"
                    type="text"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary sm:text-sm transition-shadow"
                    placeholder="Ex.: 123456 ou seu@fioforte.com.br"
                    value={formData.login}
                    onChange={(e) => setFormData({...formData, login: e.target.value})}
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1" htmlFor="password">
                  Senha
                </label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                    <Lock className="h-5 w-5 text-gray-400" />
                  </div>
                  <input
                    id="password"
                    type="password"
                    required
                    className="block w-full pl-10 pr-3 py-3 border border-gray-300 rounded-lg leading-5 bg-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-brand-primary focus:border-brand-primary sm:text-sm transition-shadow"
                    placeholder="********"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                  />
                </div>
                <div className="flex justify-end mt-2">
                  <a href="#" className="text-xs font-medium text-brand-primary hover:text-brand-dark">
                    Esqueci minha senha
                  </a>
                </div>
              </div>

              <Button
                type="submit"
                fullWidth
                size="lg"
                isLoading={isLoading}
                icon={!isLoading && <ArrowRight size={20} />}
              >
                Entrar
              </Button>
            </form>
          </div>
          <div className="bg-gray-50 px-8 py-4 border-t border-gray-100">
            <p className="text-xs text-center text-gray-500">
              Dúvidas sobre o acesso? Fale com o RH do Grupo FioForte.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;