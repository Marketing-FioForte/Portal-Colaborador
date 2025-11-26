import React from 'react';
import { MOCK_HEALTH_DOCS } from '../constants';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';
import { Download, FileText, AlertCircle } from 'lucide-react';

const HealthSafety: React.FC = () => {
  const aso = MOCK_HEALTH_DOCS.find(d => d.categoria === 'ASO Ocupacional');
  const otherDocs = MOCK_HEALTH_DOCS.filter(d => d.categoria !== 'ASO Ocupacional');

  return (
    <div className="space-y-6 fade-in">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Saúde & Segurança</h1>
        <p className="text-gray-500">Documentos médicos ocupacionais.</p>
      </div>

      {/* Main ASO Card */}
      <section>
        <h2 className="text-lg font-semibold text-gray-800 mb-3">ASO Vigente</h2>
        {aso ? (
          <Card className="border-l-4 border-l-brand-primary">
            <div className="space-y-4">
              <div className="flex justify-between items-start">
                 <div>
                   <h3 className="font-bold text-gray-900 text-lg">ASO Ocupacional</h3>
                   <p className="text-sm text-gray-500">{aso.tipo}</p>
                 </div>
                 <Badge status={aso.status} />
              </div>

              <div className="flex flex-col sm:flex-row gap-4 text-sm">
                <div className="flex-1 bg-gray-50 p-3 rounded-md border border-gray-100">
                  <span className="block text-gray-500 text-xs uppercase tracking-wide">Emissão</span>
                  <span className="font-semibold text-gray-900">{aso.dataEmissao}</span>
                </div>
                {aso.dataValidade && (
                  <div className="flex-1 bg-gray-50 p-3 rounded-md border border-gray-100">
                    <span className="block text-gray-500 text-xs uppercase tracking-wide">Validade</span>
                    <span className="font-semibold text-gray-900">{aso.dataValidade}</span>
                  </div>
                )}
              </div>

              <div className="flex gap-3">
                <Button fullWidth variant="primary" icon={<FileText size={18}/>}>
                  Visualizar ASO
                </Button>
                <Button variant="outline" icon={<Download size={18}/>} />
              </div>
            </div>
          </Card>
        ) : (
          <div className="bg-yellow-50 p-4 rounded-lg flex gap-3 text-yellow-800">
            <AlertCircle className="shrink-0 mt-0.5" />
            <div>
              <p className="font-semibold">Nenhum ASO encontrado</p>
              <p className="text-sm mt-1">Entre em contato com o RH para regularizar sua situação.</p>
            </div>
          </div>
        )}
      </section>

      {/* Other Docs */}
      {otherDocs.length > 0 && (
        <section>
          <h2 className="text-lg font-semibold text-gray-800 mb-3">Outros Documentos</h2>
          <div className="space-y-3">
            {otherDocs.map(doc => (
              <Card key={doc.id} className="py-3 px-4">
                <div className="flex justify-between items-center">
                   <div className="flex items-center gap-3">
                     <div className="bg-blue-50 p-2 rounded-lg text-brand-primary">
                       <FileText size={20} />
                     </div>
                     <div>
                       <p className="font-medium text-gray-900">{doc.tipo}</p>
                       <p className="text-xs text-gray-500">{doc.dataEmissao}</p>
                     </div>
                   </div>
                   <Button variant="ghost" size="sm" className="text-brand-primary">
                     Baixar
                   </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};

export default HealthSafety;