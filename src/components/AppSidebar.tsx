import {
    Home,
    Compass,
    AppWindow,
    Users,
    Building2,
} from 'lucide-react';

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarHeader,
    SidebarMenu,
    SidebarMenuBadge,
    SidebarMenuButton,
    SidebarMenuItem,
    SidebarRail,
    SidebarSeparator,
} from '@/components/ui/sidebar';

export type NavItem = {
    name: string;
    href: string;
    icon: 'home' | 'domains' | 'apps' | 'persons' | 'companies';
    count?: number | null;
};

const iconMap = {
    home: Home,
    domains: Compass,
    apps: AppWindow,
    persons: Users,
    companies: Building2,
} as const;

function isActive(currentPath: string, href: string) {
    if (href === '/') return currentPath === '/';
    return currentPath === href || currentPath.startsWith(`${href}/`);
}

type AppSidebarProps = {
    items: NavItem[];
    currentPath: string;
    logoSrc: string;
};

export function AppSidebar({ items, currentPath, logoSrc }: AppSidebarProps) {
    const homeItem = items.find((item) => item.href === '/');
    const otherItems = items.filter((item) => item.href !== '/');

    return (
        <Sidebar collapsible="icon" variant="sidebar">
            <SidebarHeader>
                <SidebarMenu>
                    <SidebarMenuItem>
                        <SidebarMenuButton size="lg" asChild tooltip="Awesome Bharat">
                            <a href="/">
                                <img
                                    src={logoSrc}
                                    alt="Awesome Bharat"
                                    className="size-8 object-contain"
                                    width={32}
                                    height={32}
                                />
                                <div className="grid flex-1 text-left text-sm leading-tight">
                                    <span className="truncate font-serif font-semibold">
                                        Awesome
                                        <span className="text-primary">Bharat</span>
                                    </span>
                                    <span className="truncate text-xs text-muted-foreground">
                                        Discover &amp; act
                                    </span>
                                </div>
                            </a>
                        </SidebarMenuButton>
                    </SidebarMenuItem>
                </SidebarMenu>
            </SidebarHeader>

            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel>Navigate</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {homeItem && (
                                <SidebarMenuItem>
                                    <SidebarMenuButton
                                        asChild
                                        isActive={isActive(currentPath, homeItem.href)}
                                        tooltip={homeItem.name}
                                    >
                                        <a href={homeItem.href}>
                                            <Home />
                                            <span>{homeItem.name}</span>
                                        </a>
                                    </SidebarMenuButton>
                                </SidebarMenuItem>
                            )}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>

                <SidebarSeparator />

                <SidebarGroup>
                    <SidebarGroupLabel>Collections</SidebarGroupLabel>
                    <SidebarGroupContent>
                        <SidebarMenu>
                            {otherItems.map((item) => {
                                const Icon = iconMap[item.icon];
                                return (
                                    <SidebarMenuItem key={item.href}>
                                        <SidebarMenuButton
                                            asChild
                                            isActive={isActive(currentPath, item.href)}
                                            tooltip={item.name}
                                        >
                                            <a href={item.href}>
                                                <Icon />
                                                <span>{item.name}</span>
                                            </a>
                                        </SidebarMenuButton>
                                        {item.count != null && (
                                            <SidebarMenuBadge>{item.count}</SidebarMenuBadge>
                                        )}
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>

            <SidebarRail />
        </Sidebar>
    );
}
