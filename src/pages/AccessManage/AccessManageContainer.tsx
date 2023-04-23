import { toast } from "react-toastify";
import { AccessManagePage } from "./AccessManagePage";
import { useCallback, useEffect, useState } from "react";
import { DataNewUser } from "../../types/NewUser";
import { collection, getDocs, limit, orderBy, query, startAfter, where } from "firebase/firestore";
import { db } from "../../service/firebase";
import { FiltersTable, Table } from "../../types/Table";


export const AccessManagePageContaier = () => {
    const [filters, setFilters] = useState<FiltersTable>({ name: '', page: 0, isActive: true });
    const [dataNewUser, setDataNewUser] = useState<Partial<Table<DataNewUser>>>({ count: 0, rows: [] })
    const [openModal, setOpenModal] = useState<boolean>(false)

    const columns = [
        { Header: "Id", accessor: "id" },
        { Header: "Nome", accessor: "name" },
        // { Header: "Status", accessor: "active" },
        { Header: "Adiministrador", accessor: "admin" },
        { Header: "Telefone", accessor: "phoneNumber" },
        { Header: "Email", accessor: "email" },
        { Header: "Departamento", accessor: "department" },
        { Header: "Senha", accessor: "password" },
        // { Header: "Permissões", accessor: "permissions" },
    ];

    const handleChangePage = useCallback((_: any, newPage: number) => {
        setFilters((prev) => ({ ...prev, page: newPage }));
    }, []);

    const handleChangeToActiveFilter = () => {
        setFilters((prev) => ({ ...prev, isActive: !prev.isActive }));
    };

    const onGetUsersByName = async (name: string) => {
        try {
            const pageSize = 10;
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'users'),
                    where('name', '==', name),
                    limit(pageSize)
                )
            );

            const users = querySnapshot.docs.map((doc) => ({
                ...doc.data(),
            }) as DataNewUser);
            const count = querySnapshot.size;
            
            setDataNewUser({ rows: users, count });
        } catch (error) {
            console.log(error)
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };


    const onGetUsers = async (page = 0) => {
        try {
            const pageSize = 10;
            const querySnapshot = await getDocs(
                query(
                    collection(db, 'users'),
                    orderBy('name'),
                    startAfter(page * pageSize),
                    limit(pageSize)
                )
            );

            const users = querySnapshot.docs.map((doc, index) => ({
                id: index + 1,
                ...doc.data(),
            }) as DataNewUser);
            const count = querySnapshot.size;

            setDataNewUser({ rows: users, count });
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };

    useEffect(() => {
        onGetUsers()
    }, [])

    return (
        <>
            <AccessManagePage
                filters={filters}
                columns={columns}
                data={dataNewUser}
                onPageChange={handleChangePage}
                handleChangeActiveFilter={handleChangeToActiveFilter}
                handleChangeFilterName={onGetUsersByName}
                handleOpenModal={() => setOpenModal(!openModal)}
                isModalOpen={openModal}
            />
        </>
    )
}