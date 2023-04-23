import { getAuth, sendPasswordResetEmail, signInWithEmailAndPassword } from "firebase/auth";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { DataLogin } from "../../types/Login";
import { LoginPage } from "./LoginPage";
import { collection, getDocs, limit, query, where } from "firebase/firestore";
import { db } from "../../service/firebase";
import { DataNewUser } from "../../types/NewUser";


export const LoginContainer = () => {
    const navigate = useNavigate();
    const [dataLogin, setDataLogin] = useState<Partial<DataLogin>>({})
    const [showPassword, setShowPassword] = useState<boolean>(false)
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [emailRedefine, setEmailRedefine] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitSuccess, setSubmitSuccess] = useState(false);

    const onLogin = async (data: Partial<DataLogin>) => {
        try {
            const auth = getAuth();
            if (data.email && data.password) {
                const userCredential = await signInWithEmailAndPassword(auth, data.email, data.password);
                const user = userCredential.user;
                const token = await user.getIdToken()
                localStorage.setItem('auth_token', token);

                const querySnapshot = await getDocs(
                    query(
                        collection(db, 'users'),
                        where('email', '==', data.email),
                        limit(1)

                    ));

                const users = querySnapshot.docs.map((doc) => ({ ...doc.data() }) as DataNewUser);
                localStorage.setItem('user_admin', users[0].admin ? "admin" : "");

                toast.success("Login successful");
                navigate(users[0].admin  ? '/dashboard' : '/search-status');
            } else {
                toast.error("Por favor preencha todos os campos.");
            }
        } catch (error) {
            toast.error("Senha ou email inválido");
        }
    }


    const handleSubmit = async () => {
        try {
            const auth = getAuth();
            await sendPasswordResetEmail(auth, emailRedefine)
            setSubmitSuccess(true);
            toast.success("E-mail para redefinição de senha enviado com sucesso!");
        } catch (error) {
            toast.error("Não foi possível redefinir a senha. Verifique se o e-mail informado é válido e tente novamente.");
        } finally {
            setIsSubmitting(false);
        }
    }

    return (
        <LoginPage
            showPassword={showPassword}
            dataLogin={dataLogin}
            onLogin={onLogin}
            onShowPassword={setShowPassword}
            handleOpenModal={() => setOpenModal(!openModal)}
            isModalOpen={openModal}
            emailRedefine={emailRedefine}
            onChangeEmail={setEmailRedefine}
            handleSubmit={handleSubmit}
            isSubmitting={isSubmitting}
            submitSuccess={submitSuccess}
        />
    )
}