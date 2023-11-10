import { ColumnDef } from "@tanstack/react-table";

import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { Status, StatusChip } from "@/components/reusables/statusChip";
import { formatDate } from "@/components/utility/dateFormat";

type Template = {
  id: string;
  templateName: string;
  status: Status;
  updated: number;
  issued: number;
};

export const TEMPLATES: Template[] = [
  {
    id: "728ed52f",
    templateName: "Foundation of Leadership - International",
    status: "Published",
    updated: Date.now(),
    issued: 56,
  },
  {
    id: "728ed53f",
    templateName: "Foundation of Leadership 101-2 Certificate",
    status: "Published",
    updated: Date.now(),
    issued: 78,
  },
  {
    id: "728ed54f",
    templateName: "Foundation of Leadership 101-1 Certificate",
    status: "Declined",
    updated: Date.now() - 1000 * 60 * 60 * 24 * 30,
    issued: 0,
  },
  {
    id: "728ed55f",
    templateName: "Executive Leadership 301 (EXEC301)",
    status: "Published",
    updated: Date.now(),
    issued: 24,
  },
  {
    id: "728ed56f",
    templateName: "Advanced Leadership 202 (ADV202)",
    status: "Published",
    updated: Date.now(),
    issued: 5,
  },
  {
    id: "728ed57f",
    templateName: "Advanced Leadership 201 (ADV201)",
    status: "Declined",
    updated: Date.now(),
    issued: 0,
  },
  {
    id: "728ed58f",
    templateName: "Foundation of Leadership 102 (FOL102)",
    status: "Published",
    updated: Date.now(),
    issued: 19,
  },
  // {
  //   id: "728ed59f",
  //   templateName: "Foundation of Leadership - International",
  //   status: "Published",
  //   updated: Date.now(),
  //   issued: 56,
  // },
];

export const COLUMNS: ColumnDef<Template>[] = [
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={table.getIsAllPageRowsSelected()}
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
  {
    accessorKey: "templateName",
    header: "Template Name",
    cell: ({ row }) => {
      return (
        <span className="flex flex-row items-center">
          <img className="h-10 w-10 mr-2" src="/tableImg.png" alt="tableImg" />
          {row.getValue("templateName")}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => {
      return <StatusChip text={row.getValue("status")} />;
    },
  },
  {
    accessorKey: "updated",
    header: "Updated",
    cell: ({ row }) => {
      return formatDate(row.getValue("updated"));
    },
  },
  {
    accessorKey: "issued",
    header: "Issued",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
