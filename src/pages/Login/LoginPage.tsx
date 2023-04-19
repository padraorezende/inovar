import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImg from "../../assets/logo.png";
import { DadosLogin } from "../../types/Login";
import { useFormik } from "formik";


export type LoginProps = {
    dadosLogin: DadosLogin
    onLogin: (dadosLogin: DadosLogin) => void
}

export const LoginPage = (props: LoginProps) => {


    const formik = useFormik({
        initialValues: { ...props.dadosLogin },
        onSubmit: (values, { }) => { },
        enableReinitialize: true,
    });

    return (
        <div className="flex flex-col md:flex-row h-screen px-20 py-28">
            <div className="flex items-center justify-center md:w-1/2">
                <img src={logoImg} alt="logo" className="w-[500px]" />
            </div>

            <div className="bg-[#F9F9F9] flex items-center justify-center md:w-1/2">
                <div className="w-full max-w-md flex flex-col items-center">
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        color="#F8BB7A"
                        size="5x"
                        className="mb-10"
                    />
                    <div className="w-4/5 flex flex-col items-start">
                        <label className="text-[#E95401]">Username:</label>
                        <input className="mb-4 w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="w-4/5 flex flex-col items-start">
                        <label className="text-[#E95401]">Password:</label>
                        <input className="mb-4 w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="password"
                            type="password"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <button className="w-4/5 bg-[#F8BB7A] text-white my-6 py-2 px-3 rounded-md"
                        onClick={() => props.onLogin(formik.values)}
                    >
                        Login now
                    </button>
                </div>
            </div>
        </div>
    );
};




