import { faFileArrowUp, faFileExcel, faRemove } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";
import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

export const Dropzone = () => {
    const [files, setFiles] = useState<File[]>([]);

    const onDrop = useCallback((acceptedFiles: File[]) => {
        setFiles((currentFiles) => [...currentFiles, ...acceptedFiles]);
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    return (
        <div className="flex items-center justify-center">
            <div {...getRootProps()} className="w-3/4 border-2 border-dashed rounded-md p-4 mx-8 mt-4">
                <input {...getInputProps()} />
                {isDragActive ? (
                    <div className="flex flex-col items-center justify-center m-8">
                        <FontAwesomeIcon icon={faFileArrowUp} color="#D3D3D3" size="4x" />
                        <p className="text-[#848383] my-6">Solte os arquivos aqui...</p>
                    </div>
                ) : (
                    <div className="flex flex-col items-center justify-center m-8">
                        <FontAwesomeIcon icon={faFileArrowUp} color="#D3D3D3" size="4x" />
                        <p className="text-[#848383] my-6">Arraste e solte os arquivos ou clique para selecioná-los.</p>
                        <button className="w-4/5 bg-[#D3D3D3] text-white py-2 px-3 rounded-md">
                            Importar arquivo
                        </button>
                    </div> 
                )}
            </div>
            {files.length > 0 && (
                <div className="w-1/4">
                    <h1></h1>
                    <div className="flex">
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Arquivo</TableCell>
                                    <TableCell>Nome</TableCell>
                                    <TableCell align="center">Ação</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {files.map((file) => (
                                    <TableRow key={file.name}>
                                        <TableCell><FontAwesomeIcon icon={faFileExcel} color="#7CFC00" size="2x" /></TableCell>
                                        <TableCell>{file.name}</TableCell>
                                        <TableCell align="center">
                                            <FontAwesomeIcon icon={faRemove} color="red" cursor={"pointer"}
                                                onClick={() => setFiles(files.filter(x => x != file))}
                                            />
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>

                    </div>
                </div>
            )}
        </div>
    );
};
