import React from 'react';
import { MOCK_RH_DOCS } from '../constants';
import Card from '../components/Card';
import Button from '../components/Button';
import { FileText, ChevronRight } from 'lucide-react';

const RHDocuments: React.FC = () => {
  // Group by category
  const categories = Array.from(new Set(MOCK_RH_DOCS.map(d => d.categoria)));

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Documentos RH</h1>
        <p className="text-gray-500">Termos, políticas e comunicados.</p>
      </div>

      {categories.length > 0 ? (
        categories.map(category => {
          const docs = MOCK_RH_DOCS.filter(d => d.categoria === category);
          return (
            <section key={category}>
              <h2 className="text-lg font-semibold text-gray-800 mb-3 pl-1">{category}</h2>
              <div className="space-y-3">
                {docs.map(doc => (
                  <Card key={doc.id} className="hover:bg-gray-50 transition-colors cursor-pointer group">
                    <div className="flex justify-between items-center">
                      <div className="flex gap-4 items-start">
                        <div className="mt-1 bg-gray-100 p-2 rounded text-gray-600">
                          <FileText size={20} />
                        </div>
                        <div>
                          <h3 className="font-medium text-gray-900 group-hover:text-brand-primary transition-colors">
                            {doc.nome}
                          </h3>
                          <p className="text-sm text-gray-500 mt-0.5">{doc.descricao}</p>
                          <p className="text-xs text-gray-400 mt-1">Disponibilizado em: {doc.dataDisponibilizado}</p>
                        </div>
                      </div>
                      <ChevronRight className="text-gray-300 group-hover:text-brand-primary" />
                    </div>
                  </Card>
                ))}
              </div>
            </section>
          )
        })
      ) : (
         <div className="text-center py-12">
            <p className="text-gray-500">Nenhum documento disponível no momento.</p>
         </div>
      )}
    </div>
  );
};

export default RHDocuments;