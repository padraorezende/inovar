import { faCalendarXmark, faCheck, faClipboardList, faForward, faPaperPlane } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { MainCard } from "../components/MainCard"
import { DataTable } from "../components/DataTable"
import { Card } from "../components/Card"
import { PieChart } from "../components/PieChart"


export const DashboardPage = () => {

    return (
        <div>
            <div className="my-12 flex gap-x-6 justify-center items-center">
                <Card
                    title="Produção"
                    quantity={65}
                    icon={<FontAwesomeIcon icon={faForward} color="white" />}
                    date="19/04/2023"
                    color="#e7e740"
                />
                <Card
                    title="Concluidos"
                    quantity={125}
                    icon={<FontAwesomeIcon icon={faCheck} color="white" />}
                    date="15/04/2023"
                    color="#88d140"
                />
                <Card
                    title="Pendentes"
                    quantity={454}
                    icon={<FontAwesomeIcon icon={faCalendarXmark} color="white" className="" />}
                    date="19/04/2023"
                    color="#FF0000"
                />
                <Card
                    title="Solicitados"
                    quantity={105}
                    icon={<FontAwesomeIcon icon={faPaperPlane} color="white" className="" />}
                    date="19/04/2023"
                    color="#C0C0C0"
                />
            </div>


            <MainCard
                icon={<FontAwesomeIcon icon={faClipboardList} color="white" className="" />}
                title="Dashboard"
            >

                <PieChart />

            </MainCard>

        </div>
    )


}  