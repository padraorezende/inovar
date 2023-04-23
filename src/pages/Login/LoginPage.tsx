import { faEye, faEyeSlash, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogContent } from "@mui/material";
import { useFormik } from "formik";
import logoImg from "../../assets/logo.png";
import { DataLogin } from "../../types/Login";

export type LoginProps = {
    dataLogin: Partial<DataLogin>
    onLogin: (dataLogin: Partial<DataLogin>) => void
    showPassword: boolean
    onShowPassword: (show: boolean) => void
    isModalOpen: boolean
    handleOpenModal: () => void
    isSubmitting: boolean
    handleSubmit: () => void
    onChangeEmail: (email: string) => void
    emailRedefine: string
    submitSuccess: boolean
}

export const LoginPage = (props: LoginProps) => {

    const formik = useFormik({
        initialValues: { ...props.dataLogin },
        onSubmit: (values, { }) => { },
        enableReinitialize: true,
    });

    return (
        <div className="flex flex-col md:flex-row h-screen md:px-20 md:py-28">
            <div className="md:flex items-center justify-center md:w-1/2 px-6 hidden">
                <img src={logoImg} alt="logo" className="w-[500px]" />
            </div>

            <div className="bg-[#ebebeb] flex items-center justify-center w-full h-full md:w-1/2">
                <div className="w-full max-w-md flex flex-col items-center">
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        color="#f5a957"
                        size="5x"
                        className="mt-6 mb-10"
                    />
                    <h2 className="text-center font-semibold mt-4 text-[#E95401]">Descomplique a burocracia conosco! </h2>
                    <h2 className="text-center font-semibold mb-6 text-[#E95401]">Faça login e verifique o status dos seus serviços.</h2>
                    <div className="w-4/5 flex flex-col items-start">
                        <label className="text-[#E95401] text-sm mb-1">Email</label>
                        <input className="mb-4 w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="email"
                            value={formik.values.email}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="w-4/5 flex flex-col items-start relative">
                        <label className="text-[#E95401] text-sm mb-1">Password</label>
                        <div className="flex flex-row justify-center items-center w-full">
                            <input
                                className="mb-4 border w-full border-[#D2D1D1] rounded-md py-2 px-3 pr-10"
                                name="password"
                                type={props.showPassword ? "text" : "password"}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            <FontAwesomeIcon
                                icon={props.showPassword ? faEye : faEyeSlash}
                                className="mb-4 mt-1 absolute top-1/2 right-3 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                                onClick={() => props.onShowPassword(!props.showPassword)}
                            />
                        </div>
                    </div>


                    <div className="flex justify-end items-end w-4/5 mb-8">
                        <p onClick={props.handleOpenModal} className="text-[#cf8739] text-sm cursor-pointer">Forgotten passowrd ?</p>
                    </div>


                    <button className="w-4/5 bg-[#f5a957] text-white my-6 py-2 px-3 rounded-md"
                        onClick={() => props.onLogin(formik.values)}
                    >
                        Login now
                    </button>
                </div>
            </div>

            <Dialog open={props.isModalOpen} onClose={props.handleOpenModal} fullWidth>
                <DialogContent>
                    {!props.submitSuccess ? (
                        <div className="bg-white p-6 rounded-md">
                            <h2 className="text-lg font-medium mb-8">
                                Redefinir senha pelo email
                            </h2>
                            <div className="mb-4">
                                <label
                                    className="block text-gray-700 font-medium mb-2"
                                >
                                    Endereço de e-mail
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="border border-gray-400 rounded-md py-2 px-3 w-full"
                                    value={props.emailRedefine}
                                    onChange={(e) => props.onChangeEmail(e.target.value)}
                                    required
                                />
                            </div>
                            <button
                                className={`bg-[#f5a957] hover:bg-[#f79d3d] text-white font-bold py-2 px-4 rounded-md 
                                ${props.isSubmitting && "opacity-50 cursor-not-allowed"}`}
                                onClick={props.handleSubmit}
                                disabled={props.isSubmitting}
                            >
                                {props.isSubmitting ? "Enviando..." : "Enviar link de redefinição"}
                            </button>
                        </div>
                    ) : (
                        <div className="bg-white p-6 rounded-md text-center">
                            <h2 className="text-lg font-medium mb-4">
                                Link enviado com sucesso!
                            </h2>
                            <p className="text-gray-700">
                                Verifique seu e-mail para redefinir sua senha.
                            </p>
                            <button
                                onClick={props.handleOpenModal}
                                className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium mt-6 px-4 py-2 rounded-md"
                            >
                                Fechar
                            </button>
                        </div>
                    )}
                </DialogContent>
            </Dialog>

        </div>
    );
};




