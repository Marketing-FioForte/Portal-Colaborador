import { User, Training, HealthDoc, RHDoc } from './types';

export const MOCK_USER: User = {
  nomeCompleto: "João da Silva Souza",
  primeiroNome: "João",
  matricula: "123456",
  cargo: "Eletricista Industrial",
  setor: "Manutenção",
  empresa: "Grupo FioForte",
  email: "joao.silva@fioforte.com.br",
  telefone: "(27) 99999-0000"
};

export const MOCK_TRAININGS: Training[] = [
  {
    id: "1",
    nome: "NR-10 - Segurança em Instalações Elétricas",
    descricaoCurta: "Curso básico de segurança em instalações e serviços com eletricidade.",
    status: "valido",
    dataConclusao: "15/01/2024",
    dataValidade: "15/01/2026",
    obrigatorio: true,
    urlCertificado: "#"
  },
  {
    id: "2",
    nome: "NR-35 - Trabalho em Altura",
    descricaoCurta: "Capacitação para trabalhos realizados acima de 2 metros.",
    status: "vencido",
    dataConclusao: "10/02/2022",
    dataValidade: "10/02/2024",
    obrigatorio: true,
    urlCertificado: "#"
  },
  {
    id: "3",
    nome: "SEP - Sistema Elétrico de Potência",
    descricaoCurta: "Curso complementar à NR-10 para alta tensão.",
    status: "valido",
    dataConclusao: "20/03/2024",
    dataValidade: "20/03/2026",
    obrigatorio: true,
    urlCertificado: "#"
  },
  {
    id: "4",
    nome: "Direção Defensiva",
    descricaoCurta: "Técnicas para condução segura de veículos da empresa.",
    status: "em_andamento",
    obrigatorio: false,
    urlCertificado: "#"
  }
];

export const MOCK_HEALTH_DOCS: HealthDoc[] = [
  {
    id: "h1",
    tipo: "Periódico",
    categoria: "ASO Ocupacional",
    dataEmissao: "10/05/2024",
    dataValidade: "10/05/2025",
    status: "valido",
    urlPdf: "#"
  },
  {
    id: "h2",
    tipo: "Audiometria",
    categoria: "Exame Complementar",
    dataEmissao: "10/05/2024",
    status: "valido",
    urlPdf: "#"
  }
];

export const MOCK_RH_DOCS: RHDoc[] = [
  {
    id: "r1",
    categoria: "Termos assinados",
    nome: "Termo de Responsabilidade - EPI",
    descricao: "Confirmação de recebimento de EPIs básicos.",
    dataDisponibilizado: "12/01/2024",
    urlPdf: "#"
  },
  {
    id: "r2",
    categoria: "Políticas internas",
    nome: "Código de Conduta FioForte",
    descricao: "Diretrizes de comportamento e ética.",
    dataDisponibilizado: "01/01/2024",
    urlPdf: "#"
  },
  {
    id: "r3",
    categoria: "Comunicados",
    nome: "Plano de Saúde - Reajuste Anual",
    descricao: "Informativo sobre novos valores da coparticipação.",
    dataDisponibilizado: "05/04/2024",
    urlPdf: "#"
  }
];