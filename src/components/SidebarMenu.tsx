import { faArrowUp, faChevronLeft, faChevronRight, faClipboardList, faInfoCircle, faRightFromBracket, faSearch, faUnlock, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link, useNavigate } from "react-router-dom";
import sidebarLogo from "../assets/logo.png";
import { useState } from "react";
import { Button, Dialog, DialogContent, DialogTitle } from "@mui/material";
import { getAuth, signOut } from "firebase/auth";
import { toast } from "react-toastify";

type SidebarMenuProps = {
    page: string
    naoMostrarImagem?: boolean
    mobile?: boolean
}

export const SidebarMenu = (props: SidebarMenuProps) => {
    const navigate = useNavigate();
    const { collapseSidebar, collapsed } = useProSidebar();
    const [openModal, setOpenModal] = useState<boolean>(false)
    const permissionAdmin = localStorage.getItem('user_admin');

    const onLogout = async () => {
        try {
            const auth = getAuth();
            await signOut(auth);
            localStorage.removeItem('auth_token');
            localStorage.removeItem('user_admin');
            navigate('/');
            toast.success('Logout realizado com sucesso!');
        } catch (error) {
            console.error(error);
            toast.error('Falha ao realizar logout!');
        }
    };

    const menuItems = [
        {
            permission: permissionAdmin == "admin",
            icon: faClipboardList,
            label: 'Dashboard',
            path: '/dashboard',
        },
        {
            permission: true,
            icon: faInfoCircle,
            label: '2ª Via',
            path: '/copy-document',
        },
        {
            permission: true,
            icon: faInfoCircle,
            label: 'Transferência',
            path: '/transference',
        },
        {
            permission: true,
            icon: faInfoCircle,
            label: 'Baixa',
            path: '/write-off',
        },
        {
            permission: true,
            icon: faSearch,
            label: 'Pesquisar status',
            path: '/search-status',
        },
        {
            permission: permissionAdmin == "admin",
            icon: faArrowUp,
            label: 'Importar dados',
            path: '/upload-data',
        },
        {
            permission: permissionAdmin == "admin",
            icon: faUnlock,
            label: 'Gerenciar acesso',
            path: '/manager-access',
        },
        {
            permission: permissionAdmin == "admin",
            icon: faUserPlus,
            label: 'Adicionar usuário',
            path: '/new-user',
        },
    ];

    return (
        <div>
            <Sidebar>
                {!props.naoMostrarImagem && <>
                    <div className="p-6 bg-white">
                        <img
                            src={sidebarLogo}
                            alt="SidebarLogo"
                            className="object-cover"
                        />
                    </div>
                    <div className="h-[1px] bg-[#eaa965] mb-4" />
                </>}
                <Menu>
                    {menuItems.map((item) => (
                        <>
                            {item.permission &&
                                <Link to={item.path} key={item.path}>
                                    <MenuItem icon={<FontAwesomeIcon icon={item.icon} className={props.page == item.path ? "text-[#FCA548] font-semibold" : ""} />}>
                                        <p className={props.page == item.path ? "text-[#FCA548] font-semibold" : ""}>{item.label}</p>
                                    </MenuItem>
                                </Link>
                            }
                        </>

                    ))}
                    <MenuItem icon={<FontAwesomeIcon icon={faRightFromBracket} className="" />} onClick={() => setOpenModal(!openModal)}>
                        Sair
                    </MenuItem>
                    {!props.mobile && <MenuItem
                        onClick={() => collapseSidebar()}
                        icon={collapsed ? <FontAwesomeIcon icon={faChevronLeft} className="" /> : <FontAwesomeIcon icon={faChevronRight} className="" />}
                    />}

                </Menu>
            </Sidebar>

            <Dialog open={openModal} onClose={() => setOpenModal(!openModal)} className="fixed inset-0 z-50 overflow-y-auto">
                <div className="flex items-center justify-center">
                    <DialogContent className="rounded-lg p-8 mx-8">
                        <DialogTitle className="font-bold text-lg text-center mb-2">Confirmar Saída</DialogTitle>
                        <div className="text-gray-700 text-center">
                            <p>Tem certeza que deseja sair do sistema?</p>
                            <div className="mt-6 mb-2 flex justify-center gap-x-6">
                                <Button variant="contained" color="error" onClick={() => setOpenModal(!openModal)} className="mr-2">
                                    Cancelar
                                </Button>
                                <Button variant="contained" color="primary" onClick={() => onLogout()}>
                                    Confirmar
                                </Button>
                            </div>
                        </div>
                    </DialogContent>
                </div>
            </Dialog>

        </div >


    );
}