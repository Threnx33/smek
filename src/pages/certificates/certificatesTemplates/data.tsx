import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";
import { HeaderSortButton } from "@/components/reusables/headerSortButton";
import { Status, StatusChip } from "@/components/reusables/statusChip";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/components/utils";
import { setTemplate } from "@/redux/reducers/page";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

export type Template = {
  id: string;
  templateName: string;
  imgSrc: string;
  status: Status;
  updated: number;
  issued: number;
};

export const TEMPLATES: Template[] = [
  {
    id: "728ed52f",
    templateName: "Foundation of Leadership - International",
    imgSrc: "/badge.png",
    status: "Published",
    updated: new Date("May 6, 2023").getTime(),
    issued: 56,
  },
  {
    id: "728ed53f",
    templateName: "Foundation of Leadership 101-2 Certificate",
    imgSrc: "/badge.png",
    status: "Published",
    updated: new Date("Oct 3, 2022").getTime(),
    issued: 78,
  },
  {
    id: "728ed54f",
    templateName: "Foundation of Leadership 101-1 Certificate",
    imgSrc: "/badge.png",
    status: "Draft",
    updated: new Date("Oct 3, 2022").getTime(),
    issued: 0,
  },
  {
    id: "728ed55f",
    templateName: "Executive Leadership 301 (EXEC301)",
    imgSrc: "/badge.png",
    status: "Published",
    updated: new Date("Jan 31, 2022").getTime(),
    issued: 24,
  },
  {
    id: "728ed56f",
    templateName: "Advanced Leadership 202 (ADV202)",
    imgSrc: "/badge.png",
    status: "Published",
    updated: new Date("Jan 31, 2022").getTime(),
    issued: 5,
  },
  {
    id: "728ed57f",
    templateName: "Advanced Leadership 201 (ADV201)",
    imgSrc: "/badge.png",
    status: "Draft",
    updated: new Date("Jan 31, 2022").getTime(),
    issued: 0,
  },
  {
    id: "728ed58f",
    templateName: "Foundation of Leadership 102 (FOL102)",
    imgSrc: "/badge.png",
    status: "Published",
    updated: new Date("Jan 31, 2022").getTime(),
    issued: 19,
  },
  // {
  //   id: "728ed59f",
  //   templateName: "Foundation of Leadership - International",
  //   imgSrc: "/certificate.png",
  //   status: "Published",
  //   updated: new Date("Jan 31, 2022").getTime(),
  //   issued: 56,
  // },
  // {
  //   id: "728ed60f",
  //   templateName: "Foundation of Leadership - International",
  //   imgSrc: "/certificate.png",
  //   status: "Published",
  //   updated: new Date("Jan 31, 2022").getTime(),
  //   issued: 56,
  // },
];

export const TEMPLATES_COLUMNS: ColumnDef<Template>[] = [
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
        <span className="flex flex-row items-center ">
          <img
            className="mr-3 h-10 w-10"
            src={row.original.imgSrc}
            alt="TemplateImage"
          />
          {row.getValue("templateName")}
        </span>
      );
    },
  },
  {
    accessorKey: "status",
    header: ({ column }) => {
      return <HeaderSortButton column={column} name="Status" />;
    },
    cell: ({ row }) => {
      return <StatusChip text={row.getValue("status")} />;
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id));
    },
  },
  {
    accessorKey: "updated",
    header: ({ column }) => {
      return <HeaderSortButton column={column} name="Updated" />;
    },
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
      const template = row.original;
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
            <Link to={`details/${template.id}`}>
              <DropdownMenuItemNoPropagation
                onClick={() => dispatch(setTemplate(template))}
              >
                Details
              </DropdownMenuItemNoPropagation>
            </Link>
            <Link to={`insights/${template.id}`}>
              <DropdownMenuItemNoPropagation
                onClick={() => dispatch(setTemplate(template))}
              >
                Insights
              </DropdownMenuItemNoPropagation>
            </Link>
            <Link to={`settings/${template.id}`}>
              <DropdownMenuItemNoPropagation
                onClick={() => dispatch(setTemplate(template))}
              >
                Settings
              </DropdownMenuItemNoPropagation>
            </Link>{" "}
            <Link to={`history/${template.id}`}>
              <DropdownMenuItemNoPropagation
                onClick={() => dispatch(setTemplate(template))}
              >
                History
              </DropdownMenuItemNoPropagation>
            </Link>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
