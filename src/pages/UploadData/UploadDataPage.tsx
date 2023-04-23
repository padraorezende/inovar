import { faArrowUp } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Dropzone } from "../../components/Dropzone"
import { MainCard } from "../../components/MainCard"

export type UploadDataPageProps = {
    files: File[]
    selectedFiles: (files: File[]) => void
    onDrop: (acceptedFiles: File[]) => void
    onUpload: (files: File[]) => void
}

export const UploadDataPage = (props: UploadDataPageProps) => {

    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faArrowUp} color="white" className="" />}
            title="Importar Dados"
        >

            <div className="mt-8 flex flex-col items-center justify-center">
                <Dropzone
                    files={props.files}
                    onDrop={props.onDrop}
                    selectedFiles={props.selectedFiles}
                />

                <button className="w-1/2 bg-[#F27405] py-3 rounded-md text-white disabled:bg-[#a19999a4] mt-6"
                    disabled={props.files.length == 0}
                    onClick={() => props.onUpload(props.files)}
                >Upload</button>
            </div>
        </MainCard>
    )
}