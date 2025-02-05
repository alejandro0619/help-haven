"use client";
import AdminNav from '@/components/navbars/admin-nav';
import CompanySelector from '@/components/other/company-selector';
import { SidebarInset, SidebarProvider, SidebarTrigger } from '@/components/ui/sidebar';
import React from 'react';

type Company = {
  id: string;
  name: string;
  plan: string;
};

const Dashboard = () => {
  const companies: Company[] = [
    { id: "1", name: "Acme Corp", plan: "Basic" },
    { id: "2", name: "Globex Inc", plan: "Enterprise" },
    { id: "3", name: "Umbrella Co", plan: "Free" },
  ];

  return (
    <div className="h-screen w-screen bg-dashboardBg flex relative ">
      <SidebarProvider>
        <AdminNav />
        <SidebarInset>
          <header>
            <SidebarTrigger className='absolute top-5 left-5 p-5'>

            </SidebarTrigger>
          </header>
        </SidebarInset>
      </SidebarProvider>
      <CompanySelector companies={companies} styles='absolute right-5 top-5' />

    </div>
  );
};

export default Dashboard;
