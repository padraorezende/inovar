import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../../components/MainCard"
import { faUserPlus } from "@fortawesome/free-solid-svg-icons"
import { useFormik } from "formik";
import { DataNewUser } from "../../types/NewUser";
import { Box, Chip, MenuItem, OutlinedInput, Select, Switch } from "@mui/material";


export type NewUserPageProps = {
    dataNewUser: Partial<DataNewUser>
    onAddUser: (dataNewUser: Partial<DataNewUser>) => void
    permissions: string[]
    usernameValidate: boolean
    emailValidate: boolean
    onValidateUsername: (username: string) => void
    onValidateEmail: (email: string) => void
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
                <div className="flex items-center justify-center mt-8">
                    <div className="w-1/2  px-3">
                        <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Username</label>
                        <input className={`w-full border rounded-md py-2 px-3 ${!props.usernameValidate && 'border-red-500'}`}
                            name="username"
                            value={formik.values.username}
                            onChange={formik.handleChange}
                            onBlur={(e) => props.onValidateUsername(e.target.value)}
                        />
                    </div>
                    <div className="w-1/2  px-3">
                        <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Senha</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="password"
                            type="password"
                            value={formik.values.password}
                            onChange={formik.handleChange}
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
                <div className="flex items-center mt-6">
                    <div className="w-1/2  px-3">
                        <label className="text-[#E95401] mr-2 text-sm mb-1">Telefone</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="phoneNumber"
                            value={formik.values.phoneNumber}
                            onChange={formik.handleChange}
                        />
                    </div>
                    <div className="w-1/2  px-3">
                        <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Departamento</label>
                        <input className="w-full border border-[#D2D1D1] rounded-md py-2 px-3"
                            name="department"
                            value={formik.values.department}
                            onChange={formik.handleChange}
                        />
                    </div>
                </div>
                <div className="flex flex-row justify-center items-center px-8 mt-6">
                    <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Ativo</label>
                    <Switch value={formik.values.active} onChange={(e) => formik.setFieldValue("active", e.target.checked)} />
                    <div className="w-full px-6">
                        <label className="text-[#E95401] ml-4 mr-2 text-sm mb">Permissões</label>
                        <Select
                            fullWidth
                            labelId="demo-multiple-chip-label"
                            id="demo-multiple-chip"
                            multiple
                            value={formik.values.permissions || []}
                            onChange={(e) => formik.setFieldValue("permissions", e.target.value)}
                            input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
                            renderValue={(selected) => (
                                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                                    {selected.map((value) => (
                                        <Chip key={value} label={value} />
                                    ))}
                                </Box>
                            )}
                        >
                            {props.permissions.map((name) => (
                                <MenuItem
                                    key={name}
                                    value={name}
                                >
                                    {name}
                                </MenuItem>
                            ))}
                        </Select>

                    </div>
                    <label className="text-[#E95401] ml-4 mr-2 text-sm mb-1">Administrador</label>
                    <Switch value={formik.values.admin} onChange={(e) => formik.setFieldValue("admin", e.target.checked)} />
                </div>

                <div className="flex items-center justify-center mt-6">
                    <button
                        className="w-1/2 bg-[#F27405] py-3 rounded-md text-white disabled:bg-[#a19999a4]"
                        onClick={() => props.onAddUser(formik.values)}
                        disabled={!props.emailValidate || !props.usernameValidate}
                    >
                        Adicionar usuário
                    </button>
                </div>
            </div>

        </MainCard >
    )
}