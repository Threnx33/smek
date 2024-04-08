import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/components/utility/dateFormat";
import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";

type Schema = {
  id: string;
  name: string;
  lastUpdated: number;
};

export const SCHEMAS: Schema[] = [
  {
    id: "1",
    name: "Basic Credentials",
    lastUpdated: new Date("Nov 19, 2023").getTime(),
  },
  {
    id: "2",
    name: "University Degree",
    lastUpdated: new Date("Dec 25, 2023").getTime(),
  },
  {
    id: "3",
    name: "Proof of Employment",
    lastUpdated: new Date("Dec 28, 2023").getTime(),
  },
  {
    id: "4",
    name: "Commercial Invoic",
    lastUpdated: new Date("Jan 14, 2023").getTime(),
  },
  {
    id: "5",
    name: "Business Card",
    lastUpdated: new Date("Jan 26, 2023").getTime(),
  },
];

export const SCHEMAS_COLUMNS: ColumnDef<Schema>[] = [
  {
    accessorKey: "name",
    header: "Schema Name",
  },
  {
    accessorKey: "lastUpdated",
    header: "Last updated",
    cell: ({ row }) => {
      return formatDate(row.getValue("lastUpdated"));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const issue = row.original;
      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItemNoPropagation>
              Export DID
            </DropdownMenuItemNoPropagation>
            <DropdownMenuItemNoPropagation>
              Delete DID
            </DropdownMenuItemNoPropagation>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
