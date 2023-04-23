import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../components/MainCard"


export const WriteOffPage = () => {
    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faInfoCircle} color="white" className="" />}
            title=""
        >
            <div className="container mx-auto">
                <div className="bg-gray-100 py-8 px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Baixa de Veículos</h1>
                    <p className="text-lg">Saiba como solicitar a baixa de um veículo</p>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-bold mb-4">Documentos necessários para solicitar a baixa</h2>
                    <ul className="list-disc pl-8">
                        <li className="my-2">RG</li>
                        <li className="my-2">CPF</li>
                        <li className="my-2">Comprovante de residência</li>
                        <li className="my-2">Documento do veículo</li>
                        <li className="my-2">Comprovante do pagamento de todas as multas e impostos</li>
                        <li className="my-2">Certificado de Registro do Veículo (CRV) original, ou uma declaração de perda ou furto emitida pela autoridade policial</li>
                        <li className="my-2">Autorização do proprietário caso ele não possa comparecer pessoalmente</li>
                    </ul>
                </div>
            </div>


        </MainCard>
    )
}