import { Switch, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import { useTable } from 'react-table';

type TableProps = {
    columns: any;
    data: any;
    actionButtons?: boolean;
    showActives?: boolean
    handleChangeActiveFilter?: () => void;
    page: number;
    count?: number;
    onPageChange: (_: any, _newPage: number) => void;
}

export const DataTable = (props: TableProps) => {

    const [searchValue, setSearchValue] = useState('');
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: props.columns, data: props.data });

    return (
        <div className="mt-8">
            <div className="p-4 flex justify-between">
                <TextField
                    value={searchValue}
                    onChange={(e) => setSearchValue(e.target.value)}
                    size="small"
                    variant="outlined"
                    label="Pesquisar por nome"
                />
            </div>
            {props.showActives && <div className="mr-4">
                <span>Ativos</span>
                <Switch onChange={props.handleChangeActiveFilter} defaultChecked />
            </div>}

            <Table {...getTableProps()}>
                <TableHead>
                    {headerGroups.map((header) => (
                        <TableRow {...header.getHeaderGroupProps()}>
                            {header.headers.map((column) => (
                                <TableCell {...column.getHeaderProps()}>
                                    {column.render('Header')}
                                </TableCell>
                            ))}
                            {props.actionButtons ? <TableCell>Ações</TableCell> : null}
                        </TableRow>
                    ))}
                </TableHead>
                <TableBody {...getTableBodyProps()}>
                    {rows.map((row: any) => {
                        prepareRow(row);
                        return (
                            <TableRow {...row.getRowProps()}>
                                {row.cells.map((cell: any) => (
                                    <TableCell {...cell.getCellProps()}>
                                        {cell.render('Cell')}
                                    </TableCell>
                                ))}
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
            <TablePagination
                rowsPerPageOptions={[10]}
                component="div"
                count={props.count || 0}
                page={props.page}
                onPageChange={props.onPageChange}
                rowsPerPage={10}
            />
        </div>
    )
}