import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { MainCard } from "../components/MainCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const CopyDocumentPage = () => {
    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faInfoCircle} color="white" className="" />}
            title=""
        >
            <div className="container mx-auto">
                <div className="bg-gray-100 py-8 px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Segunda Via de Documentos de Veículos</h1>
                    <p className="text-lg">Saiba como solicitar a segunda via do documento do seu veículo</p>
                </div>

                <div className="my-8">
                    <h2 className="text-2xl font-bold mb-4">Documentos necessários para solicitar a segunda via</h2>
                    <ul className="list-disc pl-8">
                        <li className="my-2">RG</li>
                        <li className="my-2">CPF</li>
                        <li className="my-2">Comprovante de residência</li>
                        <li className="my-2">Documento do veículo</li>
                        <li className="my-2">Comprovante do pagamento da taxa de emissão da segunda via do documento</li>
                    </ul>
                </div>
            </div>


        </MainCard>
    )

}