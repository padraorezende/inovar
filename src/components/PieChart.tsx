import { Pie } from "react-chartjs-2";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

export const data = {
    labels: ['Produção', 'Concluidos', 'Pendentes', "Solicitados"],
    datasets: [
        {
            label: '# of Votes',
            data: [65, 125, 454, 105],
            backgroundColor: [
                '#e7e740',
                '#88d140',
                '#FF0000',
                '#C0C0C0',
            ],
        },
    ],
};

export const PieChart = () => {

    return (
        <div className="flex w-full items-center justify-center">
            <div className="w-[400px] m-0">
                <Pie data={data} options={{
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