import { faCalendar, faCalendarDays } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { ReactNode } from "react";

interface CardProps {
    icon: ReactNode;
    title?: string;
    quantity: number
    date: string
    color: string
}

export const Card = ({ icon, quantity, title, color, date }: CardProps) => {
    return (
        <div className="relative bg-white rounded-md w-[250px]">
            <div className="pl-[120px] pr-6 pt-4">
                <div className={`absolute flex justify-center items-center left-[20px] top-[-30px] p-1 py-4 rounded-md w-16 h-16`}
                    style={{ backgroundColor: color }}
                >
                    {icon}
                </div>
                <div className="flex flex-col justify-between items-end">
                    <h1 className="m-0">{title}</h1>
                    <p>{quantity}</p>
                </div>
            </div>
            <div className="mx-4 pb-2 flex justify-start">
                <FontAwesomeIcon icon={faCalendarDays} className="mt-1 mr-1" color="#595959" />
                <p className="text-[#595959]">{date}</p>
            </div>

        </div>
    )
}