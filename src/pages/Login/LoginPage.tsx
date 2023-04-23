import { faEye, faEyeSlash, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import logoImg from "../../assets/logo.png";
import { DataLogin } from "../../types/Login";
import { useFormik } from "formik";
import { TextField } from "@mui/material";


export type LoginProps = {
    dataLogin: Partial<DataLogin>
    onLogin: (dataLogin: Partial<DataLogin>) => void
    showPassword: boolean
    onShowPassword: (show: boolean) => void
}

export const LoginPage = (props: LoginProps) => {

    const formik = useFormik({
        initialValues: { ...props.dataLogin },
        onSubmit: (values, { }) => { },
        enableReinitialize: true,
    });

    return (
        <div className="flex flex-col md:flex-row h-screen px-20 py-28">
            <div className="flex items-center justify-center md:w-1/2">
                <img src={logoImg} alt="logo" className="w-[500px]" />
            </div>

            <div className="bg-[#ebebeb] flex items-center justify-center md:w-1/2">
                <div className="w-full max-w-md flex flex-col items-center">
                    <FontAwesomeIcon
                        icon={faUserCircle}
                        color="#f5a957"
                        size="5x"
                        className="mb-10"
                    />
                    <div className="w-4/5 flex flex-col items-start">
                        <label className="text-[#E95401] text-sm mb-1">Username</label>
                        <input className="mb-4 w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="w-4/5 flex flex-col items-start">
                        <label className="text-[#E95401] text-sm mb-1">Password</label>
                        <div className="flex flex-row justify-center items-center w-full">
                            <input className="mb-4 border w-full border-[#D2D1D1] rounded-md py-2 px-3"
                                name="password"
                                type={props.showPassword ? "text" : "password"}
                                value={formik.values.password}
                                onChange={formik.handleChange}
                            />
                            <FontAwesomeIcon
                                icon={props.showPassword ? faEye : faEyeSlash} className="mb-4 mx-2"
                                cursor={"pointer"} onClick={() => props.onShowPassword(!props.showPassword)}
                            />
                        </div>

                    </div>
                    <button className="w-4/5 bg-[#f5a957] text-white my-6 py-2 px-3 rounded-md"
                        onClick={() => props.onLogin(formik.values)}
                    >
                        Login now
                    </button>
                </div>
            </div>
        </div>
    );
};




