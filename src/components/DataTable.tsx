import { faEye, faEyeSlash, faInfoCircle, faPenSquare, faPenToSquare, faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Switch, Table, TableBody, TableCell, TableHead, TablePagination, TableRow, TextField } from "@mui/material";
import { useState } from "react";
import { useTable } from 'react-table';

type TableProps = {
    columns: any;
    data: any;
    actionButtons?: boolean;
    showActives?: boolean
    handleChangeActiveFilter?: () => void;
    handleChangeFilterName: (name: string) => void,
    page: number;
    count?: number;
    onPageChange: (_: any, _newPage: number) => void;
    onShowArrayContent: (array: any[]) => void
    onShowPassword?: () => void
    showPassword?: boolean
    handleEdit?: (id: any) => void
    handleDelete?: (id: any) => void
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
                    onBlur={(e) => props.handleChangeFilterName(e.target.value)}
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