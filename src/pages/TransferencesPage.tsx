import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../components/MainCard"

export const TransferencesPage = () => {
    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faInfoCircle} color="white" className="" />}
            title=""
        >
            <div className="container mx-auto">
                <div className="bg-gray-100 py-8 px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Transferência de Veículos</h1>
                    <p className="text-lg">Saiba como fazer a transferência de propriedade do seu veículo</p>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-bold mb-4">Documentos necessários para a transferência</h2>
                    <ul className="list-disc pl-8">
                        <li className="my-2">RG</li>
                        <li className="my-2">CPF</li>
                        <li className="my-2">Comprovante de residência</li>
                        <li className="my-2">Documento do veículo (CRV ou CRLV)</li>
                        <li className="my-2">Comprovante do pagamento do IPVA e das taxas de transferência</li>
                    </ul>
                </div>
            </div>


        </MainCard>
    )
}