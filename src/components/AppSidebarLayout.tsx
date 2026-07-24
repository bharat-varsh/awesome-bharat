import type { ReactNode } from 'react';

import { AppSidebar, type NavItem } from '@/components/AppSidebar';
import {
    SidebarInset,
    SidebarProvider,
    SidebarTrigger,
} from '@/components/ui/sidebar';
import { Separator } from '@/components/ui/separator';
import { TooltipProvider } from '@/components/ui/tooltip';

type AppSidebarLayoutProps = {
    children?: ReactNode;
    headerEnd?: ReactNode;
    items: NavItem[];
    currentPath: string;
    logoSrc: string;
    defaultOpen?: boolean;
};

export function AppSidebarLayout({
    children,
    headerEnd,
    items,
    currentPath,
    logoSrc,
    defaultOpen = true,
}: AppSidebarLayoutProps) {
    return (
        <TooltipProvider>
            <SidebarProvider defaultOpen={defaultOpen}>
                <AppSidebar items={items} currentPath={currentPath} logoSrc={logoSrc} />
                <SidebarInset className="min-w-0 overflow-x-hidden bg-transparent">
                    <header className="sticky top-0 z-50 flex h-16 shrink-0 items-center gap-2 border-b border-border bg-background/80 px-3 backdrop-blur-md sm:px-4">
                        <SidebarTrigger className="-ml-0.5" />
                        <Separator orientation="vertical" className="mr-1 h-4!" />
                        <a
                            href="/"
                            className="min-w-0 flex-1 text-center font-serif text-xl font-semibold tracking-tight text-foreground transition-colors sm:text-2xl md:text-left"
                        >
                            Awesome
                            <span className="text-primary">Bharat</span>
                        </a>
                        <div className="flex shrink-0 items-center gap-2 sm:gap-4">{headerEnd}</div>
                    </header>
                    {children}
                </SidebarInset>
            </SidebarProvider>
        </TooltipProvider>
    );
}
