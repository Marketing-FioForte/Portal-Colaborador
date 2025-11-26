import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MOCK_USER, MOCK_TRAININGS, MOCK_HEALTH_DOCS } from '../constants';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { ArrowLeft, CheckCircle2, AlertTriangle } from 'lucide-react';

const QuickProof: React.FC = () => {
  const navigate = useNavigate();
  const user = MOCK_USER;
  const mandatoryTrainings = MOCK_TRAININGS.filter(t => t.obrigatorio);
  const aso = MOCK_HEALTH_DOCS.find(d => d.categoria === 'ASO Ocupacional');

  return (
    <div className="min-h-screen bg-gray-900 text-white pb-10">
      {/* Top Bar */}
      <div className="sticky top-0 bg-gray-900 z-10 p-4 border-b border-gray-800 flex items-center">
        <Button 
          variant="ghost" 
          className="text-gray-300 hover:text-white hover:bg-gray-800 mr-2"
          onClick={() => navigate('/dashboard')}
        >
          <ArrowLeft size={24} />
        </Button>
        <span className="font-semibold text-lg">Comprovante Digital</span>
      </div>

      <div className="p-4 max-w-lg mx-auto space-y-6">
        
        {/* User Card - High Contrast */}
        <div className="bg-white rounded-2xl p-6 text-gray-900 shadow-xl">
           <div className="flex justify-between items-start mb-4">
              <div>
                 <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-1">COLABORADOR</p>
                 <h1 className="text-2xl font-bold leading-tight">{user.nomeCompleto}</h1>
              </div>
              <div className="bg-brand-primary text-white font-bold px-2 py-1 rounded text-xs">
                 ATIVO
              </div>
           </div>
           
           <div className="space-y-1 text-sm text-gray-700 border-t border-gray-100 pt-4">
             <div className="flex justify-between">
                <span className="text-gray-500">Matrícula:</span>
                <span className="font-medium">{user.matricula}</span>
             </div>
             <div className="flex justify-between">
                <span className="text-gray-500">Cargo:</span>
                <span className="font-medium">{user.cargo}</span>
             </div>
             <div className="flex justify-between">
                <span className="text-gray-500">Empresa:</span>
                <span className="font-medium">{user.empresa}</span>
             </div>
           </div>
        </div>

        {/* Status Highlights */}
        <div className="space-y-4">
          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wider ml-1">
             Treinamentos Obrigatórios
          </h2>
          
          <div className="space-y-3">
             {mandatoryTrainings.map(training => (
               <div key={training.id} className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex justify-between items-center">
                  <div className="pr-2">
                     <p className="font-medium text-white text-sm sm:text-base">{training.nome}</p>
                     <p className="text-xs text-gray-400 mt-1">
                       Validade: {training.dataValidade}
                     </p>
                  </div>
                  <div>
                    {training.status === 'valido' ? (
                      <CheckCircle2 className="text-green-500 h-6 w-6" />
                    ) : (
                      <AlertTriangle className="text-red-500 h-6 w-6" />
                    )}
                  </div>
               </div>
             ))}
          </div>

          <h2 className="text-gray-400 text-sm font-semibold uppercase tracking-wider ml-1 mt-6">
             Saúde Ocupacional
          </h2>
          
          <div className="bg-gray-800 rounded-xl p-4 border border-gray-700 flex justify-between items-center">
              <div>
                 <p className="font-medium text-white">ASO - {aso?.tipo || 'N/A'}</p>
                 <p className="text-xs text-gray-400 mt-1">
                    Validade: {aso?.dataValidade || '---'}
                 </p>
              </div>
              <div>
                 <Badge status={aso?.status} />
              </div>
          </div>
        </div>

        <div className="mt-8 text-center">
           <p className="text-gray-500 text-xs">
             Documento gerado digitalmente em {new Date().toLocaleDateString()}.
             <br/>Verifique a autenticidade junto ao RH do Grupo FioForte.
           </p>
        </div>
      </div>
    </div>
  );
};

export default QuickProof;