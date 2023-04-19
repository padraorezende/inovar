import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../components/MainCard"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"




export const NewUserPage = () => {
    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faUserPlus} color="white" className="" />}
            title="Adicionar usuário"
        >
            <div>
                <div className="flex items-center mt-8">
                    <div className="w-1/2  px-3">
                        <label className="text-[#E95401] ml-4 mr-2">Username</label>
                        <input className=" w-full border border-[#D2D1D1] rounded-md py-2" />
                    </div>
                    <div className="w-1/2  px-3">
                        <label className="text-[#E95401] ml-4 mr-2">Senha</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2" />
                    </div>
                </div>
                <div className="mt-6 px-3">
                    <label className="text-[#E95401] ml-4 mr-2">Email</label>
                    <input className="w-full border border-[#D2D1D1] rounded-md py-2" />
                </div>
                <div className="flex items-center mt-6">
                    <div className="w-1/2  px-3">
                        <label className="text-[#E95401] mr-2">Telefone</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2" />
                    </div>
                    <div className="w-1/2  px-3">
                        <label className="text-[#E95401] ml-4 mr-2">Departamento</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2" />
                    </div>
                </div>
                <div className="flex items-center justify-center mt-6">
                    <button className="w-1/2 bg-[#F8BB7A] text-white my-6 py-2 px-3 rounded-md">
                        Registrar
                    </button>
                </div>
            </div>

        </MainCard >
    )
}