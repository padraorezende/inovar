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
            <div className="flex justify-center gap-8">

                {props.dataGraphRequest && <PieChart data={props.dataGraphRequest} />}

                <div className="w-1 bg-[#d3c9cc]" />

                {props.dataGraphStatus && <PieChart data={props.dataGraphStatus} />}

            </div>

        </MainCard>

    )


}  