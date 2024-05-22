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
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/components/utils";

type Recommendation = {
  id: string;
  name: string;
  certificateName: string;
  issuerProfile: string;
  dateIssued: number;
  certificateStatus: Status;
};

export const RECOMMENDATIONS: Recommendation[] = [
  // {
  //   id: "728ed52f",
  //   name: "Acuna Quintana, Lainer",
  //   certificateName: "Foundations of Leadership - International",
  //   issuerProfile: "Student Clubs",
  //   dateIssued: new Date("May 6, 2023").getTime(),
  //   certificateStatus: "Accepted",
  // },
  // {
  //   id: "728ed530",
  //   name: "Adama, Kara",
  //   certificateName: "Advanced Leadership 202 (ADV202)",
  //   issuerProfile: "Skillquiver",
  //   dateIssued: new Date("June 11, 2023").getTime(),
  //   certificateStatus: "Accepted",
  // },
  // {
  //   id: "728ed531",
  //   name: "Adama, Kara",
  //   certificateName: "Executive Leadership 302 (EXEC302)",
  //   issuerProfile: "Student Certificates",
  //   dateIssued: new Date("June 11, 2023").getTime(),
  //   certificateStatus: "Accepted",
  // },
  // {
  //   id: "728ed532",
  //   name: "Adama, Kara",
  //   certificateName: "Foundations of Leadership 102 (FOL102)",
  //   issuerProfile: "Academy Certificates",
  //   dateIssued: new Date("July 6, 2023").getTime(),
  //   certificateStatus: "Accepted",
  // },
  // {
  //   id: "728ed533",
  //   name: "Ahumada Cantillo, Yushiro",
  //   certificateName: "Foundations of Leadership - International",
  //   issuerProfile: "Student Clubs",
  //   dateIssued: new Date("June 29, 2023").getTime(),
  //   certificateStatus: "Accepted",
  // },
  // {
  //   id: "728ed534",
  //   name: "Amecua, Jesus",
  //   certificateName: "Executive Leadership 302 (EXEC302)",
  //   issuerProfile: "School District",
  //   dateIssued: new Date("April 10, 2023").getTime(),
  //   certificateStatus: "Accepted",
  // },
  // {
  //   id: "728ed535",
  //   name: "Amir, Reania",
  //   certificateName: "Advanced Leadership 202 (ADV202)",
  //   issuerProfile: "Student Clubs",
  //   dateIssued: new Date("July 28, 2023").getTime(),
  //   certificateStatus: "Declined",
  // },
  // {
  //   id: "728ed536",
  //   name: "Amir, Reania",
  //   certificateName: "Executive Leadership 302 (EXEC302)",
  //   issuerProfile: "Skillquiver",
  //   dateIssued: new Date("July 28, 2023").getTime(),
  //   certificateStatus: "Accepted",
  // },
];

export const RECOMMENDATIONS_COLUMNS: ColumnDef<Recommendation>[] = [
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
    accessorKey: "name",
    header: ({ column }) => {
      return <HeaderSortButton column={column} name="Earner" />;
    },
  },
  {
    accessorKey: "certificateName",
    header: "Certificate Name",
  },
  {
    accessorKey: "issuerProfile",
    header: "Issuer profile",
  },
  {
    accessorKey: "dateIssued",
    header: "Date Issued",
    cell: ({ row }) => {
      return formatDate(row.getValue("dateIssued"));
    },
  },
  {
    accessorKey: "certificateStatus",
    header: "Certificate status",
    cell: ({ row }) => {
      return <StatusChip text={row.getValue("certificateStatus")} />;
    },
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
            <DropdownMenuItemNoPropagation
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Do something
            </DropdownMenuItemNoPropagation>
            <DropdownMenuSeparator />
            <DropdownMenuItemNoPropagation>
              Do something2
            </DropdownMenuItemNoPropagation>
            <DropdownMenuItemNoPropagation>
              Do something3
            </DropdownMenuItemNoPropagation>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
