import { faUnlock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DataTable } from "../components/DataTable"
import { MainCard } from "../components/MainCard"

export const AccessManagePage = () => {
    const columns = [
        { Header: "Id", accessor: "id" },
        { Header: "User", accessor: "user" },
        { Header: "Status", accessor: "status" },
        { Header: "Phone number", accessor: "phone" },
        { Header: "Email", accessor: "email" },
        { Header: "Department", accessor: "department" },
        { Header: "Password", accessor: "password" },
    ];

    const data = [
        {
            id: "1",
            user: "Andrew Bojangles",
            status: "Active",
            phone: "+79000010101",
            email: "padraorz@gmail.com",
            department: "Pride 1",
            password: "xxxxx"
        },
        {
            id: "2",
            user: "Andrew Bojangles",
            status: "Active",
            phone: "+79000010101",
            email: "padraorz@gmail.com",
            department: "Pride 1",
            password: "xxxxx"
        },
        {
            id: "3",
            user: "Andrew Bojangles",
            status: "Active",
            phone: "+79000010101",
            email: "padraorz@gmail.com",
            department: "Pride 1",
            password: "xxxxx"
        },
        {
            id: "4",
            user: "Andrew Bojangles",
            status: "Active",
            phone: "+79000010101",
            email: "padraorz@gmail.com",
            department: "Pride 1",
            password: "xxxxx"
        },
        {
            id: "5",
            user: "Andrew Bojangles",
            status: "Active",
            phone: "+79000010101",
            email: "padraorz@gmail.com",
            department: "Pride 1",
            password: "xxxxx"
        },
        {
            id: "6",
            user: "Andrew Bojangles",
            status: "Active",
            phone: "+79000010101",
            email: "padraorz@gmail.com",
            department: "Pride 1",
            password: "xxxxx"
        },
    ]

    return (

        <MainCard
            icon={<FontAwesomeIcon icon={faUnlock} color="white" className="" />}
            title="Gerenciar acesso"
        >
            <DataTable
                columns={columns}
                data={data}
                handleChangeActiveFilter={() => { }}
                count={1}
                page={2}
                onPageChange={() => { }}
            />
        </MainCard> 
    )
}