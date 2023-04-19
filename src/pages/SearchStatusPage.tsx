import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../components/MainCard"
import { faSearch } from "@fortawesome/free-solid-svg-icons"
import { DataTable } from "../components/DataTable";



export const SearchStatusPage = () => {

    const columns = [
        { Header: "Id", accessor: "id" },
        { Header: "Placa", accessor: "plate" },
        { Header: "Solicitação", accessor: "request" },
        { Header: "Data", accessor: "date" },
        { Header: "Status", accessor: "status" },
        { Header: "Previsão", accessor: "forecast" },
        { Header: "Responsável", accessor: "responsible" },
        { Header: "Observação", accessor: "obesityservation" },
    ];

    const data = [
        {
            id: "1",
            plate: "QUA0388",
            request: "MERCOSUL",
            date: "21/01/2022",
            status: ["MULTA RENAINF"],
            forecast: "",
            responsible: "LOCALIZA",
            obesityservation: "DAREMOS SEQUENCIA APÓS BAIXA DA MULTA RENAINF"

        },
        {
            id: "2",
            plate: "QUA2192",
            request: "MERCOSUL",
            date: "06/01/2022",
            status: ["CONCLUÍDO"],
            forecast: "",
            responsible: "",
            obesityservation: "CONCLUÍDO 19/01/2022"

        },
        {
            id: "3",
            plate: "RMH1E15",
            request: "BAIXA DE VEÍCULO",
            date: "25/01/2022",
            status: ["EM PRODUÇÃO"],
            forecast: "",
            responsible: "",
            obesityservation: "REUNINDO DOCUMENTAÇÃO E PAGANDO TX DE SERVIÇOS"

        },
        {
            id: "4",
            plate: "ABC1234",
            request: "2ª VIA DO CRV",
            date: "18/01/2022",
            status: ["CONCLUÍDO", "EM PRODUÇÃO", "NO DETRAN"],
            forecast: "3 DIAS ÚTEIS",
            responsible: "",
            obesityservation: "CONCLUÍDO 19/01/2022"

        },
    ]

    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faSearch} color="white" className="" />}
            title="Pesquisar status"
        >
            <DataTable
                columns={columns}
                data={data}
                handleChangeActiveFilter={() => { }}
                count={1}
                page={1}
                onPageChange={() => { }}
            />
        </MainCard>
    )
}