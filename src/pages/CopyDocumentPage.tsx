import { faInfoCircle } from "@fortawesome/free-solid-svg-icons"
import { MainCard } from "../components/MainCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


export const CopyDocumentPage = () => {
    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faInfoCircle} color="white" className="" />}
            title="2ª Via"
        >

        </MainCard>
    )

}