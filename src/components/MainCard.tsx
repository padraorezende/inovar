import { ReactNode } from "react";

interface MainCardProps {
    icon: ReactNode;
    children: ReactNode;
    title?: string;
}



export const MainCard = ({ icon, children, title }: MainCardProps) => {
    return (
        <div className="relative bg-white rounded-md ">
            <div className="pl-[120px] pr-6 pt-4">
                <div className="absolute flex justify-center items-center left-[20px] top-[-30px] p-1 py-4 bg-[#0C0B0B] rounded-md w-16 h-16">
                    {icon}
                </div>
                <div className="flex justify-between items-center">
                    <h1 className="m-0">{title}</h1>
                </div>
            </div>
            <div className="p-12 pt-0">{children}</div>
        </div>
    )
}