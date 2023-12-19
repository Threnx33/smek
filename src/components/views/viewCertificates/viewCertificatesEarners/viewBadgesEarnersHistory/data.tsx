import { ColumnDef } from "@tanstack/react-table";
import { formatDate, formatTime } from "@/components/utility/dateFormat";

type TemplateHistory = {
  id: string;
  date: number;
  updatedBy: string;
  type: "Changed (Metadata)" | "Published" | "Created";
};

export const TEMPLATE_HISTORIES: TemplateHistory[] = [
  {
    id: "728ed52f",
    date: new Date("Aug 26, 2023 22:16:00").getTime(),
    updatedBy: "LaQuata Sumter",
    type: "Changed (Metadata)",
  },
  {
    id: "728ed52f",
    date: new Date("Aug 26, 2023 23:23:00").getTime(),
    updatedBy: "LaQuata Sumter",
    type: "Changed (Metadata)",
  },
  {
    id: "728ed52f",
    date: new Date("Feb 6, 2023 4:05:00").getTime(),
    updatedBy: "LaQuata Sumter",
    type: "Published",
  },
  {
    id: "728ed52f",
    date: new Date("Jan 29, 2023 3:53:00").getTime(),
    updatedBy: "LaQuata Sumter",
    type: "Created",
  },
];

export const TEMPLATE_HISTORIES_COLUMNS: ColumnDef<TemplateHistory>[] = [
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return formatDate(row.getValue("date"));
    },
  },
  {
    accessorKey: "time",
    header: "Time",
    cell: ({ row }) => {
      return formatTime(row.getValue("date"));
    },
  },
  {
    accessorKey: "updatedBy",
    header: "Updated By",
  },
  {
    accessorKey: "type",
    header: "Type",
  },
];
