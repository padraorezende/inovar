import { faArrowUp, faChevronLeft, faChevronRight, faClipboardList, faInfoCircle, faRightFromBracket, faSearch, faUnlock, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import sidebarLogo from "../assets/logo.png";
import { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";

export const SidebarMenu = () => {
    const { collapseSidebar, collapsed } = useProSidebar();
    const [openModal, setOpenModal] = useState<boolean>(false)
    const menuItems = [
        {
            icon: <FontAwesomeIcon icon={faClipboardList} color="#FCA548" className="" />,
            label: 'Dashboard',
            path: '/dashboard',
        },
        {
            icon: <FontAwesomeIcon icon={faInfoCircle} className="" />,
            label: '2ª Via',
            path: '/copy-document',
        },
        {
            icon: <FontAwesomeIcon icon={faInfoCircle} className="" />,
            label: 'Transferência',
            path: '/transference',
        },
        {
            icon: <FontAwesomeIcon icon={faInfoCircle} className="" />,
            label: 'Baixa',
            path: '/write-off',
        },
        {
            icon: <FontAwesomeIcon icon={faSearch} className="" />,
            label: 'Pesquisar status',
            path: '/search-status',
        },
        {
            icon: <FontAwesomeIcon icon={faArrowUp} className="" />,
            label: 'Importar dados',
            path: '/upload-data',
        },
        {
            icon: <FontAwesomeIcon icon={faUnlock} className="" />,
            label: 'Gerenciar acesso',
            path: '/manager-access',
        },
        {
            icon: <FontAwesomeIcon icon={faUserPlus} className="" />,
            label: 'Adicionar usuário',
            path: '/new-user',
        },
    ];

    return (
        <div>
            <Sidebar>
                <div className="p-6 bg-white">
                    <img
                        src={sidebarLogo}
                        alt="SidebarLogo"
                        className="object-cover"
                    />
                </div>
                <div className="h-[1px] bg-[#eaa965] mb-4" />
                <Menu>
                    {menuItems.map((item) => (
                        <Link to={item.path} key={item.path}>
                            <MenuItem icon={item.icon} >
                                {item.label}
                            </MenuItem>
                        </Link>
                    ))}
                    <MenuItem icon={<FontAwesomeIcon icon={faRightFromBracket} className="" />} onClick={() => setOpenModal(!openModal)}>
                        Sair
                    </MenuItem>
                    <MenuItem
                        onClick={() => collapseSidebar()}
                        icon={collapsed ? <FontAwesomeIcon icon={faChevronLeft} className="" /> : <FontAwesomeIcon icon={faChevronRight} className="" />}
                    />
                </Menu>
            </Sidebar>

            <Dialog open={openModal} onClose={() => setOpenModal(!openModal)} className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-center justify-center">
                    <DialogContent className="bg-white rounded-lg shadow-xl p-6 mx-4">
                        <DialogTitle className="font-bold text-lg text-center mb-2">Confirmar Saída</DialogTitle>
                        <div className="text-gray-700 text-center">
                            <p>Tem certeza que deseja sair do sistema?</p>
                            <div className="mt-4 flex justify-center gap-x-6">
                                <Button variant="contained" color="error" onClick={() => {}} className="mr-2">
                                    Cancelar
                                </Button>
                                <Button variant="contained" color="primary" onClick={() => {}}>
                                    Confirmar
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </div>
            </Dialog>

        </div>


    );
}