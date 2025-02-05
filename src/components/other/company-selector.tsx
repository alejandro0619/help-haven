"use client";

import React, { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { ChevronDown, ChevronUp, Plus } from "lucide-react";
import Avvvatars from "avvvatars-react";

type Company = {
  id: string;
  name: string;
  plan: string;
};

type CompanySelectorProps = {
  companies: Company[];
  styles?: string;
};

const CompanySelector: React.FC<CompanySelectorProps> = ({ companies, styles }) => {
  const [selectedCompany, setSelectedCompany] = useState<Company>(companies[0]);
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={ styles }>

      <DropdownMenu onOpenChange={(open) => setIsOpen(open)} >
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="w-full h-fit">
            <span className="flex gap-4 items-center">
              <Avvvatars value={selectedCompany.name} />
              {selectedCompany.name}
            </span>
            {isOpen ? (
              <ChevronUp className="ml-2 h-4 w-4 transition-transform duration-200" />
            ) : (
              <ChevronDown className="ml-2 h-4 w-4 transition-transform duration-200" />
            )}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className="min-w-[200px] rounded-lg p-2"
          align="start"
          side="right"
          sideOffset={4}
        >
          <DropdownMenuLabel className="text-xs text-gray-500">
            Companies
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {companies.map((company) => (
            <DropdownMenuItem
              key={company.id}
              onClick={() => setSelectedCompany(company)}
              className="flex items-center gap-2 p-2"
            >
              {company.name}
              <span className="ml-auto text-xs text-gray-500">{company.plan}</span>
            </DropdownMenuItem>
          ))}
          <DropdownMenuSeparator />
          <DropdownMenuItem
            onClick={() => console.log("Add Company clicked")}
            className="flex items-center gap-2 p-2"
          >
            <Plus className="w-4 h-4" />
            <span className="font-medium text-gray-500">Add Company</span>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export default CompanySelector;
