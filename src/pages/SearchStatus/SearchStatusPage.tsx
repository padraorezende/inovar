import { faListCheck, faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Dialog, DialogContent, DialogTitle, List, ListItem, ListItemText } from "@mui/material";
import { useState } from "react";
import { DataTable } from "../../components/DataTable";
import { MainCard } from "../../components/MainCard";
import { Registers } from "../../types/Registers";
import { ColumnsTable, FiltersTable } from "../../types/Table";


export type SearchStatusProps = {
    filters: FiltersTable
    columns: ColumnsTable[]
    data: Registers[]
    onPageChange: (_newPage: number) => void;
    handleChangeFilterName: (name: string) => void
    isModalOpen: boolean
    handleOpenModal: () => void;
    selectedColumn: string
    handleChangeSelectedColumn: (column: string) => void
    hasNextPage: boolean
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
                    data={props.data}
                    page={props.filters.page}
                    onPageChange={props.onPageChange}
                    handleChangeFilterName={props.handleChangeFilterName}
                    onShowArrayContent={(status) => {
                        setStatus(status)
                        props.handleOpenModal()
                    }}
                    showSelect
                    selectedColumn={props.selectedColumn}
                    handleChangeSelectedColumn={props.handleChangeSelectedColumn}
                      hasNextPage={props.hasNextPage}
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