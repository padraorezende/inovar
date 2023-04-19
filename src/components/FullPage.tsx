import { ReactNode } from 'react';
import { ProSidebarProvider } from 'react-pro-sidebar';
import { SidebarMenu } from './SidebarMenu';

interface FullPageProps {
    children: ReactNode;
    paddingY?: string
}

export const FullPage = ({ children, paddingY }: FullPageProps) => {
    return (
        <div className="flex min-h-screen">
            <ProSidebarProvider>
                <SidebarMenu />
            </ProSidebarProvider>
            <main className="max-h-screen w-full overflow-auto bg-[#FCA548] px-20 pt-20"
                style={{ paddingTop: paddingY ?? "5rem", paddingBottom: paddingY ?? "5rem" }}>
                {children}
            </main>
        </div>
    );
};

