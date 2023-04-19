import { faArrowUp, faChevronLeft, faChevronRight, faClipboardList, faInfoCircle, faRightFromBracket, faSearch, faUnlock, faUserPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Menu, MenuItem, Sidebar, useProSidebar } from "react-pro-sidebar";
import { Link } from "react-router-dom";
import sidebarLogo from "../assets/logo.png";

export const SidebarMenu = () => {
    const { collapseSidebar, collapsed } = useProSidebar();

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
        {
            icon: <FontAwesomeIcon icon={faRightFromBracket} className="" />,
            label: 'Sair',
            path: '/',
        },
    ];

    return (
        <div>
            <Sidebar>
                <div className="p-6">
                    <img
                        src={sidebarLogo}
                        alt="SidebarLogo"
                        className="object-cover"
                    />
                </div>
                <div className="h-[1px] bg-[#eaa965] mb-4" />
                <Menu>
                    {menuItems.map((item) => (
                        <Link to={item.path} >
                            <MenuItem icon={item.icon} key={item.path}>
                                {item.label}
                            </MenuItem>
                        </Link>
                    ))}
                    <MenuItem
                        onClick={() => collapseSidebar()}
                        icon={collapsed ? <FontAwesomeIcon icon={faChevronLeft} className="" /> : <FontAwesomeIcon icon={faChevronRight} className="" />}
                    />
                </Menu>
            </Sidebar>

        </div>
    );
}