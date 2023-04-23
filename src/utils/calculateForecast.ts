interface StatusDaysMap {
    [status: string]: {
        [statusValue: string]: string;
    };
}

const statusDaysMap: StatusDaysMap = {
    "2ª VIA DO CRV": {
        "EM PRODUÇÃO": "5 dias úteis",
        "HOMOLOGANDO VISTORIA": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "TRANSFERÊNCIA UF": {
        "EM PRODUÇÃO": "5 dias úteis",
        "HOMOLOGANDO VISTORIA": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "ALTERAÇÃO DE DADOS": {
        "EM PRODUÇÃO": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "BLINDADO": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "VISTORIA MÓVEL": {
        "EM PRODUÇÃO": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "VISTORIA LACRADA": {
        "EM PRODUÇÃO": "Vide Observações",
        "NO DETRAN-MG": "Vide Observações",
        "PENDÊNCIA": "Vide Observações",
        "CONCLUÍDO": "Vide Observações"
    },
    "BAIXA DE VEÍCULO": {
        "EM PRODUÇÃO": "10 dias úteis",
        "HOMOLOGANDO VISTORIA": "9 dias úteis",
        "NO DETRAN-MG": "5 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "2ª VIA COM TROCA DE MOTOR": {
        "EM PRODUÇÃO": "5 dias úteis",
        "HOMOLOGANDO VISTORIA": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "TRANSFERÊNCIA BH": {
        "EM PRODUÇÃO": "5 dias úteis",
        "HOMOLOGANDO VISTORIA": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "ALTERAÇÃO DE DADOS MOTOR": {
        "EM PRODUÇÃO": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "REGRAVAÇÃO DE CHASSI": {
        "EM PRODUÇÃO": "36 dias úteis",
        "LAUDO DE VERIFICAÇÃO DE COMPONENTES": "24 dias úteis",
        "AUTORIZAÇÃO DE REMARCAÇÃO": "19 dias úteis",
        "REMARCAÇÃO": "12 dias úteis",
        "VISTORIA": "9 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "TROCA DE VIDROS": "",
        "PENDÊNCIA": "",
        "CONCLUÍDO": ""
    },
    "REGRAVAÇÃO DE MOTOR": {
        "EM PRODUÇÃO": "36 dias úteis",
        "LAUDO DE VERIFICAÇÃO DE COMPONENTES": "24 dias úteis",
        "AUTORIZAÇÃO DE REMARCAÇÃO": "19 dias úteis",
        "REMARCAÇÃO": "12 dias úteis",
        "VISTORIA": "9 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "TROCA DE VIDROS": "",
        "PENDÊNCIA": "",
        "CONCLUÍDO": ""
    },
    "2ª VIA COM MÉDIA MONTA": {
        "EM PRODUÇÃO": "17 dias úteis",
        "NO DETRAN-MG": "15 dias úteis",
        "PENDÊNCIA": "",
        "CONCLUÍDO": ""
    },
    "EXPEDIÇÃO DE CERTIDÃO": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "2ª VIA DE BAIXA": {
        "EM PRODUÇÃO": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "RECLASSIFICAÇÃO DE MONTA": {
        "EM PRODUÇÃO": "17 dias úteis",
        "NO DETRAN-MG": "15 dias úteis",
        "PENDÊNCIA": "",
        "CONCLUÍDO": ""
    },
    "REGULARIZAÇÃO DE MONTA": {
        "EM PRODUÇÃO": "17 dias úteis",
        "NO DETRAN-MG": "15 dias úteis",
        "PENDÊNCIA": "",
        "CONCLUÍDO": ""
    },
    "LAUDO COM VISTORIA MÓVEL": {
        "EM PRODUÇÃO": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "ALTERAÇÃO PARA PLACA MERCOSUL": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "SOLICITAÇÃO DE PRINT": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "SENHA GNV": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "REQUERIMENTO DE GERAÇÃO DE ATPV-E": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "ALTERAÇÃO DE GRAVAME FINANCEIRO": {
        "EM PRODUÇÃO": "5 dias úteis",
        "HOMOLOGANDO VISTORIA": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "SOLICITAÇÃO DE PRINT JURIDICO": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "AUTORIZAÇÃO PARA CONFECÇÃO DE PLACA": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "2ª VIA + LAUDO DE REMARCAÇÃO": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "DESBLOQUEIO PENDÊNCIA DE ESTAMPAGEM": {
        "EM PRODUÇÃO": "2 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "2ª VIA DE PLACAS": {
        "EM PRODUÇÃO": "2 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "ATUALIZAÇÃO PARA EMISSÃO DE CRLV VIA NET": {
        "EM PRODUÇÃO": "2 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "SOLICITAÇÃO DE B. O.  -  RED´S": {
        "EM PRODUÇÃO": "3 dias úteis",
        "NO DETRAN-MG": "2 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "LAUDO DE CLASSIFICAÇÃO DE DANOS": {
        "EM PRODUÇÃO": "5 dias úteis",
        "NO DETRAN-MG": "4 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "MICROFILMAGEM": {
        "EM PRODUÇÃO": "5 dias úteis",
        "NO DETRAN-MG": "4 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "SOLICITAÇÃO LAUDO METALOGRAFICO": {
        "EM PRODUÇÃO": "30 dias úteis",
        "COLETA DE DADOS": "15 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    },
    "REGULARIZAÇÃO CHASSI C/LAUDO DE DANOS": {
        "EM PRODUÇÃO": "41 dias úteis",
        "LAUDO DE VERIFICAÇÃO DE COMPONENTES": "36 dias úteis",
        "LAUDO DE CLASSIFICAÇÃO DE DANOS": "24 dias úteis",
        "AUTORIZAÇÃO DE REMARCAÇÃO": "19 dias úteis",
        "REMARCAÇÃO": "12 dias úteis",
        "VISTORIA": "9 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "TROCA DE VIDROS": "",
        "PENDÊNCIA": "",
        "CONCLUÍDO": "OK"
    },
    "ALT/DADOS INCLUSÃO FINANCEIRA": {
        "EM PRODUÇÃO": "5 dias úteis",
        "HOMOLOGANDO VISTORIA": "4 dias úteis",
        "NO DETRAN-MG": "3 dias úteis",
        "PENDÊNCIA": "Resolver pendência",
        "CONCLUÍDO": "OK"
    }
}

export const calculateForecast = (status: string[], request: string) => {
    const statusValue = status[status.length - 1];
    const statusMap = statusDaysMap[request];

    if (!statusMap || !statusMap[statusValue]) {
        return "";
    }

    const days = statusMap[statusValue];
    return days ?? "";
}

