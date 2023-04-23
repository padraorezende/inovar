import { faArrowLeft, faArrowRight, faEye, faEyeSlash, faInfoCircle, faPenSquare, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { MenuItem, Select, Switch, Table, TableBody, TableCell, TableContainer, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import { useTable } from 'react-table';
import { ColumnsTable } from "../types/Table";

type TableProps = {
    columns: ColumnsTable[];
    data: any;
    actionButtons?: boolean;
    handleChangeFilterName: (name: string) => void,
    page: number;
    onPageChange: (_newPage: number) => void;
    onShowArrayContent: (array: any[]) => void
    onShowPassword?: () => void
    showPassword?: boolean
    handleEdit?: (id: any) => void
    handleDelete?: (id: any) => void
    showSelect?: boolean
    handleChangeSelectedColumn?: (columnSelect: any) => void
    selectedColumn?: any
    hasNextPage: boolean

}

export const DataTable = (props: TableProps) => {

    const [searchValue, setSearchValue] = useState('');
    const { getTableProps, getTableBodyProps, headerGroups, rows, prepareRow } = useTable({ columns: props.columns, data: props.data });

    return (
        <div className="mt-8">
            <div className="p-4 flex flex-wrap justify-center items-center my-4 space-y-2 md:space-y-0 md:space-x-2">
                <div className="w-full md:w-1/2">
                    <TextField
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                        onBlur={(e) => props.handleChangeFilterName(e.target.value)}
                        size="small"
                        variant="outlined"
                        label="Pesquisar por nome"
                        className="w-full h-10"
                    />
                </div>
                {props.showSelect &&
                    <div className="w-full md:w-1/6">
                        <Select className="w-full bg-[#FCA548] h-10 text-center"
                            value={props.selectedColumn}
                            onChange={(e) => props.handleChangeSelectedColumn && props.handleChangeSelectedColumn(e.target.value)}>
                            {props.columns.map((column) => {
                                if (column.accessor !== "id") {
                                    return (
                                        <MenuItem key={column.accessor} value={column.accessor}>
                                            {column.Header}
                                        </MenuItem>
                                    );
                                }
                                return null;
                            })}
                        </Select>
                    </div>
                }
            </div>
            <TableContainer>
                <Table {...getTableProps()}>
                    <TableHead>
                        {headerGroups.map((header) => (
                            <TableRow {...header.getHeaderGroupProps()}>
                                {header.headers.map((column) => (
                                    <TableCell align="center"{...column.getHeaderProps()}>
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
                                        <TableCell align="center" {...cell.getCellProps()} >
                                            {typeof cell.value === 'boolean' ? (
                                                <Switch disabled checked={cell.value} />
                                            ) : cell.column.id === 'password' ? (
                                                <div className="flex justify-center items-center">
                                                    {
                                                        props.showPassword && <p className="mr-2">{cell.render('Cell')}</p>
                                                    }
                                                    <FontAwesomeIcon
                                                        icon={props.showPassword ? faEye : faEyeSlash}
                                                        color="#3570bd"
                                                        cursor={"pointer"}
                                                        size="lg"
                                                        onClick={() => props.onShowPassword && props.onShowPassword()}

                                                    />
                                                </div>
                                            ) : Array.isArray(cell.value) ? (
                                                <FontAwesomeIcon
                                                    icon={faInfoCircle}
                                                    color="#3570bd"
                                                    cursor={"pointer"}
                                                    size="lg"
                                                    onClick={() => props.onShowArrayContent(cell.value)}
                                                />
                                            ) : (
                                                cell.render('Cell')
                                            )}
                                        </TableCell>
                                    ))}

                                    {props.actionButtons ? (
                                        <TableCell className="action-buttons">
                                            <div className="flex flex-row gap-4">
                                                <FontAwesomeIcon icon={faPenToSquare} color={"#3570bd"} size="lg"
                                                    cursor={"pointer"}
                                                    onClick={() => props.handleEdit && props.handleEdit(row.original?.id)} />
                                                <FontAwesomeIcon icon={faTrash} color={"#ed2f32fe"} size="lg"
                                                    cursor={"pointer"}
                                                    onClick={() => props.handleDelete && props?.handleDelete(row.original?.id)} />
                                            </div>
                                        </TableCell>
                                    ) : null}
                                </TableRow>

                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
            <div className="flex justify-end items-end my-2">
                <button
                    onClick={() => props.onPageChange(props.page - 1)}
                    className="bg-[#FCA548] hover:bg-[#ee912d] text-white font-bold py-2 px-4 rounded mr-2 disabled:bg-[#a19999a4]"
                    disabled={props.page == 0}
                >
                    <FontAwesomeIcon icon={faArrowLeft} />
                </button>
                <button
                        onClick={() => props.onPageChange(props.page + 1)}
                        className="bg-[#FCA548] hover:bg-[#ee912d] text-white font-bold py-2 px-4 rounded disabled:bg-[#a19999a4]"
                        disabled={!props.hasNextPage}
                    >
                        <FontAwesomeIcon icon={faArrowRight} />
                    </button>
            </div>
        </div>
    )
}