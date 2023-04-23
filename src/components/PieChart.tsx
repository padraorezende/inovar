import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend, ChartData } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

type PieChartProps ={
    data: ChartData<"pie", number[], unknown>
}

export const PieChart = (props: PieChartProps) => {

    return (
        <div className="flex w-full items-center justify-center">
            <div className="w-[400px] m-0">
                <Pie data={props.data} options={{
                    plugins: {
                        legend: {
                            position: "left"
                        }
                    }
                }} />
            </div>
        </div>
    )

};