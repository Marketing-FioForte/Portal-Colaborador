export interface User {
  nomeCompleto: string;
  primeiroNome: string;
  matricula: string;
  cargo: string;
  setor: string;
  empresa: string;
  email: string;
  telefone: string;
}

export type Status = 'valido' | 'vencido' | 'em_andamento';

export interface Training {
  id: string;
  nome: string;
  descricaoCurta: string;
  status: Status;
  dataConclusao?: string;
  dataValidade?: string;
  obrigatorio: boolean;
  urlCertificado: string;
}

export interface HealthDoc {
  id: string;
  tipo: string;
  categoria: string;
  dataEmissao: string;
  dataValidade?: string;
  status: 'valido' | 'vencido';
  urlPdf: string;
}

export interface RHDoc {
  id: string;
  categoria: 'Termos assinados' | 'Políticas internas' | 'Comunicados';
  nome: string;
  descricao: string;
  dataDisponibilizado: string;
  urlPdf: string;
}