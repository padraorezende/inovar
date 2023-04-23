import { faCalendarXmark, faCheck, faClipboardList, faForward, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Card } from "../../components/Card"
import { MainCard } from "../../components/MainCard"
import { PieChart } from "../../components/PieChart"
import { DashboardCard } from "../../types/Dashboard"
import { ChartData } from "chart.js"

export type DashboardPageProps = {

    dataGraphRequest: ChartData<"pie", number[], unknown>
    dataGraphStatus: ChartData<"pie", number[], unknown>
}

export const DashboardPage = (props: DashboardPageProps) => {

    return (

        <MainCard
            icon={<FontAwesomeIcon icon={faClipboardList} color="white" className="" />}
            title="Dashboard"
        >
            <div className="flex flex-col md:flex-row md:justify-center md:gap-8">

                <div className="w-full md:w-1/2">
                    {props.dataGraphRequest && <PieChart data={props.dataGraphRequest} />}
                </div>

                <div className="w-1 bg-[#d3c9cc] hidden md:block" />

                <div className="w-full md:w-1/2">
                    {props.dataGraphStatus && <PieChart data={props.dataGraphStatus} />}
                </div>

            </div>
        </MainCard>

    )
}  