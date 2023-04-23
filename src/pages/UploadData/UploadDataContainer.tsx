import { collection, doc, getDocs, query, writeBatch } from "firebase/firestore";
import { useCallback, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../service/firebase";
import { Registers } from "../../types/Registers";
import { UploadDataPage } from "./UploadDataPage";
import { calculateForecast } from "../../utils/calculateForecast";
import { parseXML } from "../../utils/parseXML";

export const UploadDataContainer = () => {
    const [files, setFiles] = useState<File[]>([]);
    const [parsedData, setParsedData] = useState<Registers[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        acceptedFiles.forEach((file) => {
            if (file.type === "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet") {
                const isFileSelected = files.find((f) => f.name === file.name);
                if (!isFileSelected) {
                    setFiles((currentFiles) => [...currentFiles, file]);
                } else {
                    toast.error(`O arquivo ${file.name} já foi selecionado.`);
                }
            } else {
                toast.error("O arquivo deve estar no formato XLSX");
            }
        });
    }, [files]);

    const handleUpload = async (_files: File[]) => {
        try {
            const data = await parseXML(_files, parsedData);
            setParsedData(data)
            await checkRegisters(data);
            setFiles([])
            setParsedData([])
        } catch (error) {
            console.error(error);
            toast.error('Ocorreu um erro ao atualizar os dados. Por favor, tente novamente mais tarde.');
        }
    };

    const checkRegisters = async (registers: Registers[]) => {
        try {
            if (registers.length === 0) {
                toast.warning('Não há registros para atualizar.');
                return;
            }

            const querySnapshot = await getDocs(query(collection(db, 'registers')));
            const batch = writeBatch(db);

            for (const data of registers) {
                const matchingDoc = querySnapshot.docs.find(doc => doc.data().plate === data.plate);

                if (matchingDoc) {
                    const newStatus = `${data.status}`;
                    const docRef = matchingDoc.ref;
                    batch.update(docRef, {
                        status: matchingDoc.data().status.concat(newStatus),
                        forecast: calculateForecast([...matchingDoc.data().status, newStatus], data.request)
                    });
                } else {
                    batch.set(doc(db, 'registers', data.plate), {
                        ...data,
                        status: [data.status],
                        forecast: calculateForecast(data.status, data.request)
                    });
                }
            }

            await batch.commit();
            toast.success('Registros atualizados com sucesso!');
        } catch (error) {
            console.error(error);
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };


    return (
        <>
            <UploadDataPage
                onUpload={handleUpload}
                selectedFiles={setFiles}
                files={files}
                onDrop={onDrop}
            />
        </>
    )
}
