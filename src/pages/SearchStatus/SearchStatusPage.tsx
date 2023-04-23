import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../../components/MainCard"
import { faInfo, faInfoCircle, faListCheck, faSearch, faSpinner } from "@fortawesome/free-solid-svg-icons"
import { DataTable } from "../../components/DataTable";
import { ColumnsTable, FiltersTable, Table } from "../../types/Table";
import { Registers } from "../../types/Registers";
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, List, ListItem, ListItemText, Typography } from "@mui/material";
import { useState } from "react";


export type SearchStatusProps = {
    filters: FiltersTable
    columns: ColumnsTable[]
    data: Partial<Table<Registers>>
    onPageChange: (_: any, _newPage: number) => void;
    handleChangeActiveFilter: () => void
    handleChangeFilterName: (name: string) => void
    isModalOpen: boolean
    handleOpenModal: () => void;
}

export const SearchStatusPage = (props: SearchStatusProps) => {
    const [status, setStatus] = useState<string[]>()
  

    return (
        <>
            <MainCard
                icon={<FontAwesomeIcon icon={faSearch} color="white" className="" />}
                title="Pesquisar status"
            >
                <DataTable
                    columns={props.columns}
                    data={props.data.rows}
                    handleChangeActiveFilter={props.handleChangeActiveFilter}
                    count={props.data.count}
                    page={props.filters.page}
                    onPageChange={props.onPageChange}
                    handleChangeFilterName={props.handleChangeFilterName}
                    onShowArrayContent={(status) => {
                        setStatus(status)
                        props.handleOpenModal()
                    }
                    }
                    

                />

                <Dialog fullWidth maxWidth="xs" open={props.isModalOpen} onClose={props.handleOpenModal}>
                    <DialogTitle>Status</DialogTitle>
                    <DialogContent>
                        <List>
                            {status?.map((status, index) => (
                                <ListItem key={index}>
                                    <FontAwesomeIcon icon={faListCheck} color="#3CB371" className="mr-4" />
                                    <ListItemText>
                                        {status}
                                    </ListItemText>
                                </ListItem>
                            ))}
                        </List>
                    </DialogContent>
                </Dialog>

            </MainCard>

        </>
    )
}