import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER, MOCK_TRAININGS, MOCK_HEALTH_DOCS } from '../constants';
import Card from '../components/Card';
import Button from '../components/Button';
import Badge from '../components/Badge';
import { ShieldCheck, Calendar, FileText, QrCode } from 'lucide-react';

const Dashboard: React.FC = () => {
  const navigate = useNavigate();
  const user = MOCK_USER;
  
  // Computed Data
  const concludedTrainings = MOCK_TRAININGS.filter(t => t.dataConclusao).length;
  const mandatoryTrainings = MOCK_TRAININGS.filter(t => t.obrigatorio);
  const mandatoryValid = mandatoryTrainings.filter(t => t.status === 'valido').length;
  const totalMandatory = mandatoryTrainings.length;
  const nextExpiring = MOCK_TRAININGS
    .filter(t => t.status === 'valido' && t.dataValidade)
    .sort((a, b) => new Date(a.dataValidade!).getTime() - new Date(b.dataValidade!).getTime())[0];

  const aso = MOCK_HEALTH_DOCS.find(d => d.categoria === 'ASO Ocupacional');

  return (
    <div className="space-y-6 fade-in">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Olá, {user.primeiroNome}</h1>
          <p className="text-gray-500">Bem-vindo ao seu painel no Grupo FioForte.</p>
        </div>
        <div className="hidden md:block">
           <span className="text-sm text-gray-400 bg-white px-3 py-1 rounded-full border border-gray-200">
             {user.cargo}
           </span>
        </div>
      </div>

      {/* User Info Card */}
      <Card className="bg-gradient-to-r from-brand-primary to-brand-dark text-white border-none">
        <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
          <div>
            <p className="text-blue-100 text-sm font-medium">Colaborador</p>
            <h2 className="text-xl font-semibold mt-1">{user.nomeCompleto}</h2>
            <div className="flex flex-wrap gap-x-4 gap-y-1 mt-2 text-sm text-blue-100 opacity-90">
              <span>Matrícula: {user.matricula}</span>
              <span className="hidden sm:inline">•</span>
              <span>{user.setor}</span>
            </div>
          </div>
          <div className="shrink-0">
             {/* Could be an avatar or QR code icon */}
          </div>
        </div>
      </Card>

      {/* Quick Actions */}
      <div>
        <h2 className="text-lg font-semibold text-gray-900 mb-3">Atalhos rápidos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Button 
            variant="outline" 
            className="justify-start h-auto py-4 bg-white hover:bg-blue-50 hover:border-blue-200 group"
            onClick={() => navigate('/comprovante')}
          >
            <div className="bg-blue-100 text-brand-primary p-2 rounded-lg mr-3 group-hover:bg-brand-primary group-hover:text-white transition-colors">
              <QrCode size={20} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Mostrar comprovante</div>
              <div className="text-xs text-gray-500">Para auditor ou engenheiro</div>
            </div>
          </Button>
          
          <Button 
            variant="outline"
            className="justify-start h-auto py-4 bg-white hover:bg-blue-50 hover:border-blue-200 group"
             onClick={() => navigate('/treinamentos')}
          >
             <div className="bg-green-100 text-green-700 p-2 rounded-lg mr-3 group-hover:bg-green-600 group-hover:text-white transition-colors">
              <ShieldCheck size={20} />
            </div>
            <div className="text-left">
              <div className="font-semibold text-gray-900">Meus Treinamentos</div>
              <div className="text-xs text-gray-500">Ver lista completa</div>
            </div>
          </Button>
        </div>
      </div>

      {/* Status Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        
        {/* Trainings Summary */}
        <Card title="Treinamentos">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Concluídos</span>
              <span className="font-semibold text-gray-900">{concludedTrainings}</span>
            </div>
            <div className="flex items-center justify-between">
              <span className="text-gray-600">Obrigatórios em dia</span>
              <span className={`font-semibold ${mandatoryValid === totalMandatory ? 'text-green-600' : 'text-orange-500'}`}>
                {mandatoryValid} <span className="text-gray-400 font-normal">/ {totalMandatory}</span>
              </span>
            </div>
            
            {nextExpiring && (
              <div className="bg-yellow-50 p-3 rounded-lg border border-yellow-100">
                <p className="text-xs text-yellow-800 font-medium mb-1 flex items-center">
                  <Calendar size={12} className="mr-1"/> Próximo vencimento
                </p>
                <p className="text-sm text-gray-900 font-medium line-clamp-1">{nextExpiring.nome}</p>
                <p className="text-xs text-gray-500">{nextExpiring.dataValidade}</p>
              </div>
            )}
            
            <Button variant="ghost" fullWidth onClick={() => navigate('/treinamentos')} className="text-sm mt-2">
              Ver detalhes
            </Button>
          </div>
        </Card>

        {/* Health Summary */}
        <Card title="Saúde & Segurança">
          <div className="flex flex-col h-full justify-between space-y-4">
             <div>
                <div className="flex items-start justify-between mb-2">
                   <div>
                     <p className="font-medium text-gray-900">ASO Ocupacional</p>
                     <p className="text-sm text-gray-500">{aso ? aso.tipo : 'Não encontrado'}</p>
                   </div>
                   {aso && <Badge status={aso.status} />}
                </div>
                {aso?.dataValidade && (
                  <p className="text-sm text-gray-600">
                    Válido até: <span className="font-medium">{aso.dataValidade}</span>
                  </p>
                )}
             </div>
             
             <Button variant="ghost" fullWidth onClick={() => navigate('/saude-seguranca')} className="text-sm">
              Ver documentos médicos
            </Button>
          </div>
        </Card>

        {/* RH Docs Summary */}
        <Card title="Documentos RH">
           <div className="flex flex-col h-full justify-between space-y-4">
             <div className="flex items-start space-x-3">
               <div className="bg-blue-50 p-2 rounded-full">
                 <FileText size={20} className="text-brand-primary"/>
               </div>
               <div>
                 <p className="text-sm text-gray-600 leading-relaxed">
                   Acesse seus termos assinados, políticas internas e comunicados importantes.
                 </p>
               </div>
             </div>
             <Button variant="ghost" fullWidth onClick={() => navigate('/documentos-rh')} className="text-sm">
              Ver documentos
            </Button>
           </div>
        </Card>

      </div>
    </div>
  );
};

export default Dashboard;