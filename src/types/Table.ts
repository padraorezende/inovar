
export type ColumnsTable = {
    Header: string
    accessor: string
}

export type FiltersTable = {
    name: string,
    page: number,
    isActive: boolean
}

export type Table<T> = {
    rows: T[]
    count: number
}