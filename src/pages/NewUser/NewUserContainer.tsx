import { useState } from "react"
import { NewUserPage } from "./NewUserPage"
import { DataNewUser } from "../../types/NewUser"
import { toast } from "react-toastify"
import { db } from "../../service/firebase";
import { addDoc, collection, getDocs, query, where } from "firebase/firestore";

export const NewUserContainer = () => {

    const [dataNewUser, setDataNewUser] = useState<Partial<DataNewUser>>({})
    const [emailValidate, setEmailValidate] = useState<boolean>(false)
    const [usernameValidate, setUsernameValidate] = useState<boolean>(false)

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

            if (dataNewUser.permissions) {
                dataNewUser.permissions.sort((a, b) =>
                    permissions.indexOf(a) - permissions.indexOf(b))
            }
            
            await addDoc(collection(db, "users"), dataNewUser);
            setDataNewUser(dataNewUser);
            toast.success('Usuário adicionado com sucesso.')
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

    const onValidateUsername = async (username: string) => {
        try {
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'users'),
                    where('username', '==', username)
                )
            );
            setUsernameValidate(querySnapshot.size === 0);

            if (querySnapshot.size !== 0) toast.error('Nome de usuário já está em uso');

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
            onValidateUsername={onValidateUsername}
            emailValidate={emailValidate}
            usernameValidate={usernameValidate}
        />

    )
}