import { Registers } from "../types/Registers";

interface StatusDaysMap {
    [status: string]: {
        [statusValue: string]: string;
    };
}

const statusDaysMap: StatusDaysMap = {
    '2ª via do CRV': {
        'Em produção': "5 dias úteis",
        'Homologando vistoria': "4 dias úteis",
        'No DETRAN-MG': "3 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Transferência UF': {
        'Em produção': "5 dias úteis",
        'Homologando vistoria': "4 dias úteis",
        'No DETRAN-MG': "3 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Alteração de Dados': {
        'Em produção': "4 dias úteis",
        'No DETRAN-MG': "3 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Blindado': {
        'Em produção': "3 dias úteis",
        'No DETRAN-MG': "2 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Vistoria Móvel': {
        'Em produção': "4 dias úteis",
        'No DETRAN-MG': "3 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Vistoria Lacrada': {
        'Em produção': "Vide Observações",
        'No DETRAN-MG': "Vide Observações",
        'Pendência': 'Vide Observações',
        'Concluído': 'Vide Observações'
    },
    'Baixa de veículo': {
        'Em produção': "10 dias úteis",
        'Homologando vistoria': '9 dias úteis',
        'No DETRAN-MG': "5 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    '2ª via com troca de motor': {
        'Em produção': "5 dias úteis",
        'Homologando vistoria': '4 dias úteis',
        'No DETRAN-MG': "3 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Transferência BH': {
        'Em produção': '5 dias úteis',
        'Homologando vistoria': '4 dias úteis',
        'No DETRAN-MG': '3 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Alteração de Dados MOTOR': {
        'Em produção': '4 dias úteis',
        'No DETRAN-MG': '3 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Regravação de chassi': {
        'Em produção': '36 dias úteis',
        'Laudo de Verificação de Componentes': '24 dias úteis',
        'Autorização de Remarcação': '19 dias úteis',
        'Remarcação': '12 dias úteis',
        'Vistoria': '9 dias úteis',
        'No DETRAN-MG': '3 dias úteis',
        'Troca de Vidros': '',
        'Pendência': '',
        'Concluído': ''
    },
    'Regravação de motor': {
        'Em produção': '36 dias úteis',
        'Laudo de Verificação de Componentes': '24 dias úteis',
        'Autorização de Remarcação': '19 dias úteis',
        'Remarcação': '12 dias úteis',
        'Vistoria': '9 dias úteis',
        'No DETRAN-MG': '3 dias úteis',
        'Troca de Vidros': '',
        'Pendência': '',
        'Concluído': ''
    },
    '2ª via com média monta': {
        'Em produção': '17 dias úteis',
        'No DETRAN-MG': '15 dias úteis',
        'Pendência': '',
        'Concluído': ''
    },
    'Expedição de Certidão': {
        'Em produção': '3 dias úteis',
        'No DETRAN-MG': '2 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    '2ª via de Baixa': {
        'Em produção': '4 dias úteis',
        'No DETRAN-MG': '3 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Reclassificação de MONTA': {
        'Em produção': '17 dias úteis',
        'No DETRAN-MG': '15 dias úteis',
        'Pendência': '',
        'Concluído': ''
    },
    'Regularização de MONTA': {
        'Em produção': '17 dias úteis',
        'No DETRAN-MG': '15 dias úteis',
        'Pendência': '',
        'Concluído': ''
    },
    'Laudo com vistoria móvel': {
        'Em produção': '4 dias úteis',
        'No DETRAN-MG': '3 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Alteração para placa MERCOSUL': {
        'Em produção': '3 dias úteis',
        'No DETRAN-MG': '2 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK',
    },
    'Solicitação de print': {
        'Em produção': '3 dias úteis',
        'No DETRAN-MG': '2 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK',
    },
    'Senha GNV': {
        'Em produção': '3 dias úteis',
        'No DETRAN-MG': '2 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK',
    },
    'Requerimento de geração de ATPV-e': {
        'Em produção': '3 dias úteis',
        'No DETRAN-MG': '2 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK',
    },
    'Alteração de GRAVAME FINANCEIRO': {
        'Em produção': '5 dias úteis',
        'Homologando vistoria': '4 dias úteis',
        'No DETRAN-MG': '3 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK',
    },
    'Solicitação de Print juridico': {
        'Em produção': '3 dias úteis',
        'No DETRAN-MG': '2 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK',
    },
    'Autorização para confecção de placa': {
        'Em produção': '3 dias úteis',
        'No DETRAN-MG': '2 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK',
    },
    '2ª via + laudo de remarcação': {
        'Em produção': '3 dias úteis',
        'No DETRAN-MG': '2 dias úteis',
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK',
    },
    'Desbloqueio pendência de estampagem': {
        'Em produção': "2 dias úteis",
        'No DETRAN-MG': "2 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    '2ª via de placas': {
        'Em produção': "2 dias úteis",
        'No DETRAN-MG': "2 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Atualização para emissão de CRLV via net': {
        'Em produção': "2 dias úteis",
        'No DETRAN-MG': "2 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Solicitação de B. O.  -  RED´s': {
        'Em produção': "3 dias úteis",
        'No DETRAN-MG': "2 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Laudo de classificação de danos': {
        'Em produção': "5 dias úteis",
        'No DETRAN-MG': "4 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Microfilmagem': {
        'Em produção': "5 dias úteis",
        'No DETRAN-MG': "4 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Solicitação LAUDO METALOGRAFICO': {
        'Em produção': "30 dias úteis",
        'Coleta de dados': "15 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    },
    'Regularização chassi c/laudo de danos': {
        'Em produção': "41 dias úteis",
        'Laudo de Verificação de Componentes': "36 dias úteis",
        'Laudo de Classificação de danos': "24 dias úteis",
        'Autorização de Remarcação': "19 dias úteis",
        'Remarcação': "12 dias úteis",
        'Vistoria': "9 dias úteis",
        'No DETRAN-MG': "3 dias úteis",
        'Troca de Vidros': '',
        'Pendência': '',
        'Concluído': 'OK'
    },
    'Alt/dados inclusão financeira': {
        'Em produção': "5 dias úteis",
        'Homologando vistoria': '4 dias úteis',
        'No DETRAN-MG': "3 dias úteis",
        'Pendência': 'Resolver pendência',
        'Concluído': 'OK'
    }

};

export const calculateForecast = (status: string[], request: string) => {
    const statusValue = status[status.length - 1];
    const statusMap = statusDaysMap[request];

    if (!statusMap || !statusMap[statusValue]) {
        return "";
    }

    const days = statusMap[statusValue];
    return days ?? "";
}

