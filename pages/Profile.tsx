import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER } from '../constants';
import Card from '../components/Card';
import Button from '../components/Button';
import { User, LogOut, Lock, Phone, Mail, Briefcase, Building } from 'lucide-react';

const Profile: React.FC = () => {
  const navigate = useNavigate();
  const [isLoggingOut, setIsLoggingOut] = useState(false);
  const user = MOCK_USER;

  const handleLogout = () => {
    const confirmLogout = window.confirm("Deseja realmente sair? Você precisará fazer login novamente.");
    if (confirmLogout) {
      setIsLoggingOut(true);
      setTimeout(() => {
        navigate('/acesso');
      }, 500);
    }
  };

  const InfoRow = ({ icon: Icon, label, value }: { icon: any, label: string, value: string }) => (
    <div className="flex items-start py-3 border-b border-gray-100 last:border-0">
      <div className="mt-0.5 text-gray-400 mr-3">
        <Icon size={18} />
      </div>
      <div>
        <p className="text-xs text-gray-500 font-medium uppercase tracking-wide">{label}</p>
        <p className="text-gray-900 font-medium">{value}</p>
      </div>
    </div>
  );

  return (
    <div className="space-y-6 fade-in max-w-2xl mx-auto">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Meu Perfil</h1>
        <p className="text-gray-500">Seus dados cadastrais e segurança.</p>
      </div>

      <div className="flex items-center space-x-4 mb-6">
        <div className="h-20 w-20 bg-brand-primary rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-lg">
          {user.primeiroNome.charAt(0)}
        </div>
        <div>
           <h2 className="text-xl font-bold text-gray-900">{user.nomeCompleto}</h2>
           <p className="text-gray-500">Matrícula: {user.matricula}</p>
        </div>
      </div>

      <Card title="Dados Profissionais">
        <div className="px-2">
          <InfoRow icon={Briefcase} label="Cargo" value={user.cargo} />
          <InfoRow icon={Building} label="Setor" value={user.setor} />
          <InfoRow icon={Building} label="Empresa" value={user.empresa} />
        </div>
      </Card>

      <Card title="Contato">
        <div className="px-2">
           <InfoRow icon={Mail} label="E-mail" value={user.email} />
           <InfoRow icon={Phone} label="Telefone" value={user.telefone} />
        </div>
      </Card>

      <Card title="Segurança da Conta">
         <div className="space-y-4 pt-2">
            <Button variant="outline" fullWidth icon={<Lock size={18}/>}>
               Alterar senha
            </Button>
            
            <Button 
              variant="danger" 
              fullWidth 
              icon={<LogOut size={18}/>}
              onClick={handleLogout}
              isLoading={isLoggingOut}
            >
               Sair da conta
            </Button>
         </div>
      </Card>
      
      <p className="text-center text-xs text-gray-400 mt-8">
        Versão do aplicativo: 1.0.0
      </p>
    </div>
  );
};

export default Profile;