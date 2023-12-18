import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Checkbox } from "@/components/ui/checkbox";
import { formatDate } from "@/components/utility/dateFormat";
import { HeaderSortButton } from "@/components/reusables/headerSortButton";
import { VisibilityType } from "@/components/constants/types";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCollection } from "@/redux/pageSlice";

export type Verification = {
  id: string;
  collection: string;
  templates: number;
  visibility: VisibilityType;
  updated: number;
};

export const VERIFICATIONS: Verification[] = [];

export const VERIFICATIONS_COLUMNS: ColumnDef<Verification>[] = [
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
    accessorKey: "collection",
    header: ({ column }) => {
      return <HeaderSortButton column={column} name="Collection" />;
    },
  },
  {
    accessorKey: "templates",
    header: "Templates",
  },
  {
    accessorKey: "visibility",
    header: "Visibility",
  },
  {
    accessorKey: "updated",
    header: "Updated",
    cell: ({ row }) => {
      return formatDate(row.getValue("updated"));
    },
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const collection = row.original;
      const dispatch = useDispatch();

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <MoreHorizontal className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <Link to="details">
              <DropdownMenuItem
                onClick={() => dispatch(setCollection(collection))}
              >
                Details
              </DropdownMenuItem>
            </Link>
            <Link to="history">
              <DropdownMenuItem
                onClick={() => dispatch(setCollection(collection))}
              >
                History
              </DropdownMenuItem>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];