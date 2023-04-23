import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { ProSidebarProvider } from "react-pro-sidebar";
import sidebarLogo from "../assets/logo.png";
import { SidebarMenu } from "./SidebarMenu";

type MobileHeaderProps = {
    page: string
}

export const MobileHeader = (props: MobileHeaderProps) => {
    const [isOpen, setIsOpen] = useState<boolean>(false)
    const componentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            if (componentRef.current && !componentRef.current.contains(event.target as Node)) {
                setIsOpen(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [componentRef]);

    return (
        <div className="text-white w-full md:w-64 px-4 py-3 md:py-5 md:px-6 items-center justify-between md:hidden">
            <header className="flex items-center justify-between px-4 py-3">
                <button className="block md:hidden">
                    <FontAwesomeIcon icon={faBars} color="#F27405" size="lg" onClick={() => setIsOpen(true)} />
                </button>
                <div className="w-20">
                    <img
                        src={sidebarLogo}
                        alt="SidebarLogo"
                        className="object-cover"
                    />
                </div>
            </header>
            <aside ref={componentRef}  className={`fixed top-0 left-0 z-50 ${isOpen ? "block" : "hidden"} h-screen`}>
                <div className="border bg-[#f9f9f9] text-black w-64 h-full flex flex-col">
                    <header className="flex items-center justify-end px-6 py-4">
                        <button onClick={() => setIsOpen(!isOpen)}>
                            <FontAwesomeIcon icon={faTimes} color="#F27405" size="lg" />
                        </button>
                    </header>
                    <div className="[&>div>.css-1wvake5]:border-r-0">
                        <ProSidebarProvider>
                            <SidebarMenu page={props.page} naoMostrarImagem mobile />
                        </ProSidebarProvider>
                    </div>
                </div>
            </aside>
        </div>
    )
}