import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../../components/MainCard"
import { faEye, faEyeSlash, faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { useFormik } from "formik";
import { DataNewUser } from "../../types/NewUser";
import { Box, Chip, MenuItem, OutlinedInput, Select, Switch } from "@mui/material";


export type NewUserPageProps = {
    dataNewUser: Partial<DataNewUser>
    onAddUser: (dataNewUser: Partial<DataNewUser>) => void
    permissions: string[]
    emailValidate: boolean
    onValidateEmail: (email: string) => void
    showPassword: boolean
    onShowPassword: (show: boolean) => void
}

export const NewUserPage = (props: NewUserPageProps) => {
    const formik = useFormik({
        initialValues: {
            ...props.dataNewUser,
            active: props.dataNewUser?.active ?? false,
            admin: props.dataNewUser.admin ?? false
        },
        onSubmit: (values, { }) => { },
        enableReinitialize: true,
    });

    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faUserPlus} color="white" className="" />}
            title="Adicionar usuário"
        >
            <div>
                <div className="flex flex-wrap justify-center items-center mt-8">
                    <div className="w-full sm:w-1/2 px-3">
                        <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Nome</label>
                        <input className="w-full border rounded-md py-2 px-3"
                            name="name"
                            value={formik.values.name}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="w-full sm:w-1/2 px-3 relative">
                        <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Senha</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="password"
                            type={props.showPassword ? "text" : "password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                        />
                        <FontAwesomeIcon
                            icon={props.showPassword ? faEye : faEyeSlash}
                            onClick={() => props.onShowPassword(!props.showPassword)}
                            className="mb-4 mt-3 absolute top-1/2 right-6 transform -translate-y-1/2 text-gray-400 cursor-pointer"
                        />
                    </div>
                </div>
                <div className="mt-6 px-3">
                    <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Email</label>
                    <input className={`w-full border rounded-md py-2 px-3 ${!props.emailValidate && 'border-red-500'}`}
                        name="email"
                        value={formik.values.email}
                        onChange={formik.handleChange}
                        onBlur={(e) => props.onValidateEmail(e.target.value)}
                    />
                </div>
                <div className="flex flex-wrap mt-6">
                    <div className="w-full sm:w-1/2 px-3 mb-3 sm:mb-0">
                        <label className="text-[#E95401] mr-2 text-sm mb-1">Telefone</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="w-full sm:w-1/2 px-3">
                        <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Departamento</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="department"
                            value={formik.values.department}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center px-8 mt-6">
                    <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Administrador</label>
                    <Switch value={formik.values.admin} onChange={(e) => formik.setFieldValue("admin", e.target.checked)} />
                </div>

                <div className="flex flex-col items-center justify-center mt-8">
                    <button
                        className="w-full md:w-1/2 bg-[#F27405] py-3 rounded-md text-white disabled:bg-[#a19999a4]"
                        onClick={() => props.onAddUser(formik.values)}
                        disabled={!props.emailValidate}
                    >
                        Adicionar usuário
                    </button>
                </div>
            </div>

        </MainCard >
    )
}