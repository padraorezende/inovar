import { ReactNode } from "react"

export type DashboardCard = {
    title: string
    quantity: number,
    icon: ReactNode,
    date: string,
    color: string,
}

export type Groups = {
    [key: string]: number
};