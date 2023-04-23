import { DocumentData, QueryDocumentSnapshot, collection, endBefore, getDocs, limit, limitToLast, orderBy, query, startAfter, where } from "firebase/firestore";
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../service/firebase";
import { DataNewUser } from "../../types/NewUser";
import { FiltersTable } from "../../types/Table";
import { AccessManagePage } from "./AccessManagePage";


export const AccessManagePageContaier = () => {
    const [filters, setFilters] = useState<FiltersTable>({ name: '', page: 0, });
    const [dataNewUser, setDataNewUser] = useState<DataNewUser[]>([])
    const [openModal, setOpenModal] = useState<boolean>(false)
    const [hasNextPage, setHasNextPage] = useState<boolean>(false)
    const [docPrev, setDocPrev] = useState<Partial<QueryDocumentSnapshot<DocumentData>>>({});
    const [docNext, setDocNext] = useState<Partial<QueryDocumentSnapshot<DocumentData>>>({});

    const columns = [
        { Header: "Id", accessor: "id" },
        { Header: "Nome", accessor: "name" },
        { Header: "Adiministrador", accessor: "admin" },
        { Header: "Telefone", accessor: "phoneNumber" },
        { Header: "Email", accessor: "email" },
        { Header: "Departamento", accessor: "department" },
        { Header: "Senha", accessor: "password" },
    ];


    const onGetUsers = async (page = 0, filtersName = '') => {
        try {
            const pageSize = 10;
            let querySnapshot;
            const name = filtersName == '' ? null : filtersName.trim();

            if (page === 0) {
                querySnapshot = await getDocs(
                    query(collection(db, 'users'),
                        name ? where('name', '==', name) : orderBy('name'),
                        limit(pageSize))
                );

            } else if (page < filters.page) {
                querySnapshot = await getDocs(
                    query(collection(db, 'users'),
                        name ? where('name', '==', name) : orderBy('name'),
                        endBefore(docPrev),
                        limitToLast(pageSize))
                );
            } else {
                querySnapshot = await getDocs(
                    query(collection(db, 'users'),
                        name ? where('name', '==', name) : orderBy('name'),
                        startAfter(docNext),
                        limit(pageSize))
                );
            }

            if (querySnapshot.size === 0) {
                toast.error('Não há mais documentos para exibir.');
                return;
            }

            const users = querySnapshot.docs.map((doc, index) => ({
                id: index + 1,
                ...doc.data(),
            }) as DataNewUser);

            setDataNewUser(users);
            setDocNext(querySnapshot.docs[querySnapshot.docs.length - 1]);
            setDocPrev(querySnapshot.docs[0]);
            setHasNextPage(querySnapshot.size == 10)

        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };

    const handlePageChange = async (page: number) => {
        try {
            await onGetUsers(page, filters.name);
            setFilters({ ...filters, page: page });
        } catch (error) {
            console.error(error);
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    }

    const handleChangeFilterName = async (name: string) => {
        try {
            setFilters({ ...filters, page: 0, name: name });
            await onGetUsers(0, name);
        } catch (error) {
            console.error(error);
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    }

    useEffect(() => {
        onGetUsers()
    }, [])

    return (
        <>
            <AccessManagePage
                filters={filters}
                columns={columns}
                data={dataNewUser}
                onPageChange={handlePageChange}
                handleChangeFilterName={handleChangeFilterName}
                handleOpenModal={() => setOpenModal(!openModal)}
                isModalOpen={openModal}
                hasNextPage={hasNextPage}
            />
        </>
    )
}