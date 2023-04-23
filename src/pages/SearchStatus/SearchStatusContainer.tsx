import { DocumentData, QueryDocumentSnapshot, collection, endBefore, getDocs, limit, limitToLast, orderBy, query, startAfter, startAt, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../service/firebase";
import { Registers } from "../../types/Registers";
import { FiltersTable } from "../../types/Table";
import { SearchStatusPage } from "./SearchStatusPage";

export const SearchStatusContainer = () => {
    const [filters, setFilters] = useState<FiltersTable>({ name: '', page: 0 });
    const [registersTable, setRegistersTable] = useState<Registers[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [selectedColumn, SetSelectedColumn] = useState<string>("")
    const [hasNextPage, setHasNextPage] = useState<boolean>(false)
    const [docPrev, setDocPrev] = useState<Partial<QueryDocumentSnapshot<DocumentData>>>({});
    const [docNext, setDocNext] = useState<Partial<QueryDocumentSnapshot<DocumentData>>>({});

    const columns = [
        { Header: "Id", accessor: "id" },
        { Header: "Placa", accessor: "plate" },
        { Header: "Solicitação", accessor: "request" },
        { Header: "Data", accessor: "date" },
        { Header: "Status", accessor: "status" },
        { Header: "Previsão", accessor: "forecast" },
        { Header: "Responsável", accessor: "responsible" },
        { Header: "Observação", accessor: "obesityservation" },
    ];

    const onGetRegisters = async (page = 0, filtersName = '') => {
        try {
            const pageSize = 10;
            let querySnapshot;
            const name = filtersName == '' ? null : filtersName.trim();

            if (page === 0) {
                querySnapshot = await getDocs(
                    query(collection(db, 'registers'),
                        name ? where(selectedColumn, selectedColumn == "status" ? "array-contains" : '==', name) : orderBy('plate'),
                        limit(pageSize))
                );

            } else if (page < filters.page) {
                querySnapshot = await getDocs(
                    query(collection(db, 'registers'),
                        name ? where(selectedColumn, selectedColumn == "status" ? "array-contains" : '==', name) : orderBy('plate'),
                        endBefore(docPrev),
                        limitToLast(pageSize))
                );
            } else {
                querySnapshot = await getDocs(
                    query(collection(db, 'registers'),
                        name ? where(selectedColumn, selectedColumn == "status" ? "array-contains" : '==', name) : orderBy('plate'),
                        startAfter(docNext),
                        limit(pageSize))
                );
            }

            if (querySnapshot.size === 0) {
                toast.error('Não há mais documentos para exibir.');
                return;
            }

            const registers = querySnapshot.docs.map((doc, index) => ({
                id: index + 1,
                ...doc.data(),
            }) as Registers);

            setRegistersTable(registers);
            setDocNext(querySnapshot.docs[querySnapshot.docs.length - 1]);
            setDocPrev(querySnapshot.docs[0]);
            setHasNextPage(registers.length == 10)

        } catch (error) {
            console.log(error)
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };

    const handlePageChange = async (page: number) => {
        try {
            await onGetRegisters(page, filters.name);
            setFilters({ ...filters, page: page });
        } catch (error) {
            console.error(error);
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    }

    const handleChangeFilterName = async (name: string) => {
        try {
            setFilters({ ...filters, page: 0, name: name });
            await onGetRegisters(0, name);
        } catch (error) {
            console.error(error);
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    }

    useEffect(() => {
        onGetRegisters()
    }, [])

    return (

        <SearchStatusPage
            filters={filters}
            columns={columns}
            data={registersTable}
            onPageChange={handlePageChange}
            handleChangeFilterName={handleChangeFilterName}
            handleOpenModal={() => setOpenModal(!openModal)}
            isModalOpen={openModal}
            selectedColumn={selectedColumn}
            handleChangeSelectedColumn={SetSelectedColumn}
            hasNextPage={hasNextPage}
        />
    )
}