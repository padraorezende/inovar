import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../components/MainCard"

export const TransferencesPage = () => {
    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faInfoCircle} color="white" className="" />}
            title="Transferência"
        >

        </MainCard>
    )
}