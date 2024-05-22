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
    cell: ({ getValue }) => {
      const link = getValue() as string;
      const truncatedLinkLg = `${link.substring(0, 40)}...`;
      const truncatedLinkMd = `${link.substring(0, 20)}...`;
      const truncatedLinkSm = `${link.substring(0, 10)}...`;

      return (
        <>
          <span className="hidden 2xl:inline">{link}</span>
          <span className="hidden xl:inline 2xl:hidden">{truncatedLinkLg}</span>
          <span className="hidden md:inline xl:hidden">{truncatedLinkMd}</span>
          <span className="inline md:hidden">{truncatedLinkSm}</span>
        </>
      );
    },
  },
  {
    id: "actions",
    accessorKey: "checked",
    header: "",
    cell: ({ getValue }) => {
      return (
        <img
          className="min-h-[1rem] min-w-[1rem]"
          src={getValue() ? "/tickCircleGreen.svg" : "/tickCircleRed.svg"}
          alt="tickCircleIcon"
        />
      );
    },
  },
];
