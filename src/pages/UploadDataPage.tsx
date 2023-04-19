import React from "react"
import { MainCard } from "../components/MainCard"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { Dropzone } from "../components/Dropzone"


export const UploadDataPage = () => {
    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faArrowUp} color="white" className="" />}
            title="Importar Dados"
        >
            <div className="mt-8">
                <Dropzone />
            </div>
        </MainCard>
    )
}