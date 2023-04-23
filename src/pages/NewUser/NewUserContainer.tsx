import { useState } from "react"
import { NewUserPage } from "./NewUserPage"
import { DataNewUser } from "../../types/NewUser"
import { toast } from "react-toastify"
import { db } from "../../service/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

export const NewUserContainer = () => {
    const [dataNewUser, setDataNewUser] = useState<Partial<DataNewUser>>({})
    const [emailValidate, setEmailValidate] = useState<boolean>(false)
    const [showPassword, setShowPassword] = useState<boolean>(false)

    const permissions = [
        "Dashboard",
        "2ª Via",
        "Transferência",
        "Baixa",
        "Pesquisar status",
        "Importar dados",
        "Gerenciar acesso",
        "Adicionar usuário"
    ]

    const onAddUser = async (dataNewUser: Partial<DataNewUser>) => {
        try {
            if (dataNewUser.email && dataNewUser.password) {
                const auth = getAuth();
                await createUserWithEmailAndPassword(auth, dataNewUser.email, dataNewUser.password);
                await addDoc(collection(db, "users"), dataNewUser);
                setDataNewUser(dataNewUser);
                toast.success('Usuário adicionado com sucesso.')
            } else {
                toast.error('Por favor, insira um email e uma senha.')
            }
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente.')
        }
    }

    const onValidateEmail = async (email: string) => {
        try {
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'users'),
                    where('email', '==', email)
                )
            );
            setEmailValidate(querySnapshot.size === 0);
            if (querySnapshot.size !== 0) toast.error('Email já está em uso');
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };

    return (

        <NewUserPage
            dataNewUser={dataNewUser}
            permissions={permissions}
            onAddUser={onAddUser}
            onValidateEmail={onValidateEmail}
            emailValidate={emailValidate}
            onShowPassword={setShowPassword}
            showPassword={showPassword}
        />

    )
}