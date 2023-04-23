import { ReactNode } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { SidebarMenu } from './SidebarMenu';
import { MobileHeader } from './MobileHeader';

interface FullPageProps {
    children: ReactNode;
    page: string
    paddingY?: string
}

export const FullPage = ({ children, paddingY, page }: FullPageProps) => {
    return (
        <div className="flex flex-col md:flex-row min-h-screen">
            <MobileHeader  page={page}/>
            <div className="hidden md:block">
                <ProSidebarProvider>
                    <SidebarMenu page={page} />
                </ProSidebarProvider>
            </div>
            <main className="flex-grow max-h-screen w-full overflow-auto bg-[#FCA548] px-5 md:px-20 pt-10 py-5 md:py-20">
                {children}
            </main>
        </div>

    );
};

