import { useCallback, useEffect, useState } from "react";
import { SearchStatusPage } from "./SearchStatusPage"
import { FiltersTable, Table } from "../../types/Table";
import { Registers } from "../../types/Registers";
import { collection, doc, getDocs, limit, orderBy, query, runTransaction, startAfter, startAt, where } from "firebase/firestore";
import { db } from "../../service/firebase";
import { toast } from "react-toastify";

export const SearchStatusContainer = () => {
    const [filters, setFilters] = useState<FiltersTable>({ name: '', page: 0, isActive: true });
    const [registersTable, setRegistersTable] = useState<Partial<Table<Registers>>>({ count: 0, rows: [] })
    const [openModal, setOpenModal] = useState<boolean>(false)

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

    const handleChangePage = useCallback((_: any, newPage: number) => {
        setFilters((prev) => ({ ...prev, page: newPage }));
    }, []);

    const handleChangeToActiveFilter = () => {
        setFilters((prev) => ({ ...prev, isActive: !prev.isActive }));
    };

    const onGetRegistersByName = async (name: string) => {
        try {
            const pageSize = 10;
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'registers'),
                    where('plate', '==', name),
                    limit(pageSize)
                )
            );

            const registers = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
            }) as Registers);
            const count = querySnapshot.size;

            setRegistersTable({ rows: registers, count });
        } catch (error) {
            console.log(error)
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };


    const onGetRegisters = async (page = 0) => {
        try {
            const pageSize = 10;
            
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'registers'),
                    orderBy('plate'),
                    startAt(page * pageSize),
                    limit(pageSize),
                )
            );

            const users = querySnapshot.docs.map((doc, index) => ({
                id: index + 1,
                ...doc.data(),
            }) as Registers);
           
            const count = querySnapshot.size;

            setRegistersTable({ rows: users, count });
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };

    useEffect(() => {
        onGetRegisters()
    }, [])

    return (

        <SearchStatusPage
            filters={filters}
            columns={columns}
            data={registersTable}
            onPageChange={handleChangePage}
            handleChangeActiveFilter={handleChangeToActiveFilter}
            handleChangeFilterName={onGetRegistersByName}
            handleOpenModal={() => setOpenModal(!openModal)}
            isModalOpen={openModal}
        />
    )
}