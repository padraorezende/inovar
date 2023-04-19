import { LoginPage } from "./LoginPage"

export const LoginContainer = () => {
    
    return (
        <LoginPage
            dadosLogin={{
                password: "",
                username: ""
            }}
            onLogin={() => { }} />
    )
}