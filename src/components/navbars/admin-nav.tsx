import * as React from "react";
import { ChevronDown, LayoutGrid, Folders, Bell, File } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  SidebarMenuItem,
  SidebarRail,
} from "@/components/ui/sidebar";

const sideBarItems = {
  dashboard: {
    name: "Dashboard",
    icon: <LayoutGrid size={20} />,
    link: "#",
    submenu: null,
  },
  employees: {
    name: "Projects",
    icon: <Folders size={20} />,
    link: "#",
    submenu: [
      { name: "Add Employee", link: "#" },
      { name: "Employee List", link: "#" },
    ],
  },
  payroll: {
    name: "Notifications",
    icon: <Bell size={20} />,
    link: "#",
    submenu: [
      { name: "Process Payroll", link: "#" },
      { name: "Payroll History", link: "#" },
    ],
  },
  reports: {
    name: "Wiki",
    icon: <File size={20} />,
    link: "#",
    submenu: null,
  },
};

const AdminNavbar = ({ ...props }: React.ComponentProps<typeof Sidebar>) => {
  const [active, setActive] = React.useState<string | null>(null);
  const [openSubmenu, setOpenSubmenu] = React.useState<string | null>(null);

  const toggleSubmenu = (key: string) => {
    setOpenSubmenu(openSubmenu === key ? null : key);
  };

  return (
    <Sidebar {...props} className="py-5">
      {/* <SidebarHeader>
        <SidebarMenu>
          <SidebarMenuItem>
            <SidebarMenuButton size="lg" asChild>
              <a href="#">
                <div className="flex aspect-square size-8 items-center justify-center rounded-lg bg-sidebar-primary text-sidebar-primary-foreground">
                  <LayoutGrid className="size-4" />
                </div>
                <div className="flex flex-col gap-0.5 leading-none">
                  <span className="font-semibold">Documentation</span>
                  <span className="">v1.0.0</span>
                </div>
              </a>
            </SidebarMenuButton>
          </SidebarMenuItem>
        </SidebarMenu>
      </SidebarHeader> */}
      <SidebarContent className="gap-0">
        {Object.entries(sideBarItems).map(([key, item]) => {
          const isActive = active === key;
          const hasSubmenu = item.submenu !== null;
          const isSubmenuOpen = openSubmenu === key;

          return (
            <Collapsible key={key} defaultOpen>
              <SidebarGroup>
                <SidebarGroupLabel
                  asChild
                  className={`text-sm transition-transform duration-500 ${isActive ? "bg-[#1958F7] text-white" : "text-gray-700 hover:bg-gray-100"} h-[50px]`}
                >
                  <CollapsibleTrigger
                    onClick={() => {
                      setActive(key);
                      if (hasSubmenu) toggleSubmenu(key);
                    }}
                    className="w-full p-3 rounded-2xl flex items-center justify-between"
                  >
                    <div className="flex items-center">
                      <span
                        className={`p-2 rounded-xl mr-4 ${isActive ? "bg-white text-[#1958F7]" : "bg-gray-100 text-gray-700"}`}
                      >
                        {item.icon}
                      </span>
                      <span className="font-bold">{item.name}</span>
                    </div>
                    {hasSubmenu && (
                      <ChevronDown
                        size={15}
                        className={`transition-transform duration-200 ${isSubmenuOpen ? "rotate-180" : ""}`}
                      />
                    )}
                  </CollapsibleTrigger>
                </SidebarGroupLabel>

                {hasSubmenu && (
                  <CollapsibleContent>
                    <SidebarGroupContent>
                      <SidebarMenuSub>
                        {item.submenu?.map((subItem, index) => (
                          <SidebarMenuSubItem key={index}>
                            <SidebarMenuSubButton
                              asChild
                              className="block p-2 rounded-lg text-gray-700 hover:bg-gray-100"
                            >
                              <a href={subItem.link}>{subItem.name}</a>
                            </SidebarMenuSubButton>
                          </SidebarMenuSubItem>
                        ))}
                      </SidebarMenuSub>
                    </SidebarGroupContent>
                  </CollapsibleContent>
                )}
              </SidebarGroup>
            </Collapsible>
          );
        })}
      </SidebarContent>
      <SidebarRail />
    </Sidebar>
  );
};

export default AdminNavbar;