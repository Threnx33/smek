import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/components/utility/dateFormat";
import { IssuerEdit } from "./issuerEdit";

export type Issue = {
  id: string;
  profileName: string;
  DID: string;
  credentialsIssued: number;
  lastUpdated: number;
};

export const ISSUES: Issue[] = [
  {
    id: "1",
    profileName: "Skillquiver",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 98,
    lastUpdated: new Date("Sep 21, 2023").getTime(),
  },
  {
    id: "2",
    profileName: "Student Badges",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 467,
    lastUpdated: new Date("Sep 15, 2023").getTime(),
  },
  {
    id: "3",
    profileName: "Student Clubs",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 467,
    lastUpdated: new Date("Sep 09, 2023").getTime(),
  },
  {
    id: "4",
    profileName: "School Academy",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 189,
    lastUpdated: new Date("Aug 12, 2023").getTime(),
  },
  {
    id: "5",
    profileName: "Academy Badges",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 156,
    lastUpdated: new Date("Aug 09, 2023").getTime(),
  },
  {
    id: "6",
    profileName: "Academy Badges",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 98,
    lastUpdated: new Date("Jul 21, 2023").getTime(),
  },
  {
    id: "7",
    profileName: "School District",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 78,
    lastUpdated: new Date("Jul 05, 2023").getTime(),
  },
  {
    id: "8",
    profileName: "Academic",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 56,
    lastUpdated: new Date("Jun 28, 2023").getTime(),
  },
  {
    id: "9",
    profileName: "Badges",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 25,
    lastUpdated: new Date("Jun 22, 2023").getTime(),
  },
];

export const ISSUES_COLUMNS: ColumnDef<Issue>[] = [
  {
    accessorKey: "profileName",
    header: "Profile Name",
    cell: ({ row }) => {
      return (
        <span className="flex flex-row items-center ">
          <img
            className="h-10 w-10 mr-3"
            src="/emptyCircle.png"
            alt="IssuerImage"
          />
          {row.getValue("profileName")}
        </span>
      );
    },
  },
  {
    accessorKey: "DID",
    header: "DID",
  },
  {
    accessorKey: "credentialsIssued",
    header: "Credentials Issued",
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
            <IssuerEdit issue={issue} />
            <DropdownMenuItem>Export DID</DropdownMenuItem>
            <DropdownMenuItem>Delete DID</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
