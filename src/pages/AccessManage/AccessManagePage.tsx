import { faLock, faUnlock } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { DataTable } from "../../components/DataTable"
import { MainCard } from "../../components/MainCard"
import { ColumnsTable, FiltersTable, Table } from "../../types/Table"
import { DataNewUser } from "../../types/NewUser"
import { Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText } from "@mui/material"
import { useState } from "react"

export type AccessManagePageProps = {
    filters: FiltersTable
    columns: ColumnsTable[];
    data: Partial<Table<DataNewUser>>
    onPageChange: (_: any, _newPage: number) => void;
    handleChangeActiveFilter: () => void
    handleChangeFilterName: (name: string) => void
    isModalOpen: boolean
    handleOpenModal: () => void;
}

export const AccessManagePage = (props: AccessManagePageProps) => {
    const [permissions, setPemissions] = useState<string[]>()
    const [showPassword, onShowPassword] = useState<boolean>(false)

    return (
        <MainCard
            icon={<FontAwesomeIcon icon={faUnlock} color="white" />}
            title="Gerenciar acesso"
        >
            <DataTable
                columns={props.columns}
                data={props.data.rows}
                handleChangeActiveFilter={props.handleChangeActiveFilter}
                count={props.data.count}
                page={props.filters.page}
                onPageChange={props.onPageChange}
                handleChangeFilterName={props.handleChangeFilterName}
                onShowArrayContent={(permissions) => {
                    props.handleOpenModal()
                    setPemissions(permissions)
                }
                }
                showPassword={showPassword}
                onShowPassword={() => onShowPassword(!showPassword)}
            />

            <Dialog fullWidth maxWidth="xs" open={props.isModalOpen} onClose={props.handleOpenModal}>
                <DialogTitle>Permissões</DialogTitle>
                <DialogContent>
                    <List>
                        {permissions?.map((permission, index) => (
                            <ListItem key={index}>
                                <FontAwesomeIcon icon={faLock} color="#3CB371" className="mr-4" />
                                <ListItemText>
                                    {permission}
                                </ListItemText>
                            </ListItem>
                        ))}
                    </List>
                </DialogContent>
            </Dialog>

        </MainCard>
    )
}