import React, { useState } from 'react';
import { MOCK_TRAININGS } from '../constants';
import { Status } from '../types';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { Download, Eye } from 'lucide-react';

const Trainings: React.FC = () => {
  const [filter, setFilter] = useState<'todos' | Status>('todos');

  const filteredTrainings = MOCK_TRAININGS.filter(t => {
    if (filter === 'todos') return true;
    return t.status === filter;
  });

  const handleDownload = (name: string) => {
    alert(`Iniciando download do certificado: ${name}`);
  };

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Meus Treinamentos</h1>
        <p className="text-gray-500">Cursos e certificações registrados pelo RH.</p>
      </div>

      {/* Filters */}
      <div className="flex space-x-2 overflow-x-auto pb-2 scrollbar-hide">
        {(['todos', 'valido', 'vencido', 'em_andamento'] as const).map((key) => {
          const labels: Record<string, string> = {
            todos: 'Todos',
            valido: 'Válidos',
            vencido: 'Vencidos',
            em_andamento: 'Em andamento'
          };
          const active = filter === key;
          
          return (
            <button
              key={key}
              onClick={() => setFilter(key)}
              className={`
                px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-colors
                ${active 
                  ? 'bg-brand-primary text-white shadow-md' 
                  : 'bg-white text-gray-600 border border-gray-200 hover:bg-gray-50'}
              `}
            >
              {labels[key]}
            </button>
          );
        })}
      </div>

      {/* List */}
      <div className="grid gap-4">
        {filteredTrainings.length > 0 ? (
          filteredTrainings.map((training) => (
            <Card key={training.id} className="hover:border-blue-300 transition-colors">
              <div className="flex flex-col space-y-3">
                <div className="flex justify-between items-start">
                  <div className="pr-4">
                    <h3 className="font-semibold text-gray-900 text-lg">{training.nome}</h3>
                    <p className="text-sm text-gray-500 mt-1">{training.descricaoCurta}</p>
                  </div>
                  <Badge status={training.status} />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1 text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
                  {training.dataConclusao && (
                    <p>Concluído em: <span className="font-medium text-gray-900">{training.dataConclusao}</span></p>
                  )}
                  {training.dataValidade && (
                    <p>Válido até: <span className="font-medium text-gray-900">{training.dataValidade}</span></p>
                  )}
                  {training.obrigatorio && (
                     <p className="text-blue-600 text-xs font-medium sm:col-span-2 mt-1">
                       • Treinamento obrigatório
                     </p>
                  )}
                </div>

                {training.status !== 'em_andamento' && (
                  <div className="flex gap-3 pt-2">
                    <Button variant="primary" size="sm" className="flex-1" icon={<Eye size={16}/>}>
                      Ver Certificado
                    </Button>
                    <Button 
                      variant="outline" 
                      size="sm" 
                      onClick={(e) => {
                        e.stopPropagation();
                        handleDownload(training.nome);
                      }}
                    >
                      <Download size={16} />
                    </Button>
                  </div>
                )}
              </div>
            </Card>
          ))
        ) : (
          <div className="text-center py-12 bg-white rounded-xl border border-gray-200 border-dashed">
             <div className="mx-auto h-12 w-12 text-gray-300 mb-3">
               <Eye className="h-full w-full" />
             </div>
             <h3 className="text-lg font-medium text-gray-900">Nenhum treinamento encontrado</h3>
             <p className="text-gray-500">Tente alterar os filtros acima.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default Trainings;