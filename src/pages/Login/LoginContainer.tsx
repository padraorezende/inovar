import { collection, getDocs } from "firebase/firestore";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { db } from "../../service/firebase";
import { DataLogin } from "../../types/Login";
import { LoginPage } from "./LoginPage";

export const LoginContainer = () => {
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState<Partial<DataLogin>>({})
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const onLogin = async (data: Partial<DataLogin>) => {
        try {
            const querySnapshot = await getDocs(collection(db, "users"));
            const users = querySnapshot.docs.map((doc) => doc.data());

            const user = users.find((user) =>
                (user.email === data.username || user.usermame === data.username) &&
                user.password === data.password
            );

            if (user) {
                setDataLogin(data)
                toast.success("Login successful");
                navigate('/dashboard');
            } else {
                toast.error("Invalid username or password");
            }
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente.')
        }
    }

    return (
        <LoginPage
            showPassword={showPassword}
            dataLogin={dataLogin}
            onLogin={onLogin}
            onShowPassword={setShowPassword}
        />
    )
}