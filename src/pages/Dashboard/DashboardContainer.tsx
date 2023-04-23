import { collection, getDocs, query } from "firebase/firestore";
import randomColor from 'randomcolor';
import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import { db } from "../../service/firebase";
import { Registers } from "../../types/Registers";
import { DashboardPage } from "./DashboardPage";

export const DashboardContainer = () => {

    const [registers, setRegisters] = useState<Registers[]>([])
    const [dataGraphRequest, setDataGraphRequest] = useState<any>()
    const [dataGraphStatus, setDatadGraphStatus] = useState<any>()

    const onGetRegisters = async () => {
        try {
            const querySnapshot = await getDocs(query(collection(db, 'registers')));

            const registers = querySnapshot.docs.map((doc, index) => ({
                id: index + 1,
                ...doc.data(),
            })) as Registers[];

            const groupsRequest = registers.reduce((acc, register) => {
                if (register.request in acc) {
                    acc[register.request]++;
                } else {
                    acc[register.request] = 1;
                }
                return acc;
            }, {} as { [key: string]: number });


            const colorsRequest = randomColor({ count: Object.keys(groupsRequest).length });

            const graphDataRequest = {
                labels: Object.keys(groupsRequest),
                datasets: [
                    {
                        label: '# of Votes',
                        data: Object.values(groupsRequest),
                        backgroundColor: colorsRequest,
                    },
                ],
            };

            const groupsStatus = registers.reduce((acc, register) => {
                if (Array.isArray(register.status)) {
                    for (const status of register.status) {
                        if (status in acc) {
                            acc[status]++;
                        } else {
                            acc[status] = 1;
                        }
                    }
                } else {
                    if (register.status in acc) {
                        acc[register.status]++;
                    } else {
                        acc[register.status] = 1;
                    }
                }
                return acc;
            }, {} as { [key: string]: number });
            

            const colorsStatus = randomColor({ count: Object.keys(groupsStatus).length });

            const graphDataStatus = {
                labels: Object.keys(groupsStatus),
                datasets: [
                    {
                        label: '# of Votes',
                        data: Object.values(groupsStatus),
                        backgroundColor: colorsStatus,
                    },
                ],
            };

            setDatadGraphStatus(graphDataStatus)
            setRegisters(registers);
            setDataGraphRequest(graphDataRequest);
        } catch (error) {
            toast.error('Ocorreu algum erro, por favor tente novamente.');
        }
    };

    useEffect(() => {
        onGetRegisters()
    }, [])

    return (
        <DashboardPage dataGraphRequest={dataGraphRequest} dataGraphStatus={dataGraphStatus} />
    )
} 