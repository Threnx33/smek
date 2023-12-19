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
import { HeaderSortButton } from "@/components/reusables/headerSortButton";

type Recommendation = {
  id: string;
  name: string;
  badgeName: string;
  issuerProfile: string;
  dateIssued: number;
  badgeStatus: Status;
};

export const RECOMMENDATIONS: Recommendation[] = [
  // {
  //   id: "728ed52f",
  //   name: "Acuna Quintana, Lainer",
  //   badgeName: "Foundations of Leadership - International",
  //   issuerProfile: "Student Clubs",
  //   dateIssued: new Date("May 6, 2023").getTime(),
  //   badgeStatus: "Accepted",
  // },
  // {
  //   id: "728ed530",
  //   name: "Adama, Kara",
  //   badgeName: "Advanced Leadership 202 (ADV202)",
  //   issuerProfile: "Skillquiver",
  //   dateIssued: new Date("June 11, 2023").getTime(),
  //   badgeStatus: "Accepted",
  // },
  // {
  //   id: "728ed531",
  //   name: "Adama, Kara",
  //   badgeName: "Executive Leadership 302 (EXEC302)",
  //   issuerProfile: "Student Badges",
  //   dateIssued: new Date("June 11, 2023").getTime(),
  //   badgeStatus: "Accepted",
  // },
  // {
  //   id: "728ed532",
  //   name: "Adama, Kara",
  //   badgeName: "Foundations of Leadership 102 (FOL102)",
  //   issuerProfile: "Academy Badges",
  //   dateIssued: new Date("July 6, 2023").getTime(),
  //   badgeStatus: "Accepted",
  // },
  // {
  //   id: "728ed533",
  //   name: "Ahumada Cantillo, Yushiro",
  //   badgeName: "Foundations of Leadership - International",
  //   issuerProfile: "Student Clubs",
  //   dateIssued: new Date("June 29, 2023").getTime(),
  //   badgeStatus: "Accepted",
  // },
  // {
  //   id: "728ed534",
  //   name: "Amecua, Jesus",
  //   badgeName: "Executive Leadership 302 (EXEC302)",
  //   issuerProfile: "School District",
  //   dateIssued: new Date("April 10, 2023").getTime(),
  //   badgeStatus: "Accepted",
  // },
  // {
  //   id: "728ed535",
  //   name: "Amir, Reania",
  //   badgeName: "Advanced Leadership 202 (ADV202)",
  //   issuerProfile: "Student Clubs",
  //   dateIssued: new Date("July 28, 2023").getTime(),
  //   badgeStatus: "Declined",
  // },
  // {
  //   id: "728ed536",
  //   name: "Amir, Reania",
  //   badgeName: "Executive Leadership 302 (EXEC302)",
  //   issuerProfile: "Skillquiver",
  //   dateIssued: new Date("July 28, 2023").getTime(),
  //   badgeStatus: "Accepted",
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
    accessorKey: "badgeName",
    header: "Badge Name",
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
    accessorKey: "badgeStatus",
    header: "Badge status",
    cell: ({ row }) => {
      return <StatusChip text={row.getValue("badgeStatus")} />;
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
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Do something
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>Do something2</DropdownMenuItem>
            <DropdownMenuItem>Do something3</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
