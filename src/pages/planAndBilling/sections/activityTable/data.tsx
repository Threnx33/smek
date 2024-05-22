import { formatDateTime } from "@/components/utils"; // Assuming you'll use this for formatting the date
import { ColumnDef } from "@tanstack/react-table";

type Activity = {
  type: string;
  date: Date;
  link: string;
  checked: boolean;
};

export const ACTIVITY: Activity[] = [
  {
    type: "Basic Credentials",
    date: new Date("May 6, 2023 07:48:00"),
    link: "https://creds-testnet.skillquiver.com/948305kjsdms-05930",
    checked: true,
  },
  {
    type: "DID_Create",
    date: new Date("May 6, 2023 07:48:00"),
    link: "https://creds-testnet.skillquiver.com/948305kjsdms-05930",
    checked: false,
  },
  {
    type: "Proof of Employment",
    date: new Date("May 6, 2023 07:48:00"),
    link: "https://creds-testnet.skillquiver.com/948305kjsdms-05930",
    checked: true,
  },
  {
    type: "Commercial Invoice",
    date: new Date("May 6, 2023 07:48:00"),
    link: "https://creds-testnet.skillquiver.com/948305kjsdms-05930",
    checked: false,
  },
  {
    type: "Business Card",
    date: new Date("May 6, 2023 07:48:00"),
    link: "https://creds-testnet.skillquiver.com/948305kjsdms-05930",
    checked: true,
  },
];

export const ACTIVITY_COLUMNS: ColumnDef<Activity>[] = [
  {
    accessorKey: "type",
    header: "Type",
  },
  {
    accessorKey: "date",
    header: "Date",
    cell: ({ row }) => {
      return formatDateTime(row.original.date); // Original date formatting
    },
  },
  {
    accessorKey: "link",
    header: "Link",
  },
  {
    id: "actions",
    accessorKey: "checked",
    header: "",
    cell: ({ getValue }) => {
      return (
        <img
          className="h-4 w-4"
          src={getValue() ? "/tickCircleGreen.svg" : "/tickCircleRed.svg"}
          alt="tickCircleIcon"
        />
      );
    },
  },
];
