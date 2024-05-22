import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { formatDate } from "@/components/utils";
import { IssuerEdit } from "./issuerEdit";

export type Issue = {
  id: string;
  profileName: string;
  description: string;
  DID: string;
  credentialsIssued: number;
  lastUpdated: number;
};

export const ISSUES: Issue[] = [
  {
    id: "1",
    profileName: "Skillquiver",
    description: "This is a description.",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 98,
    lastUpdated: new Date("Sep 21, 2023").getTime(),
  },
  {
    id: "2",
    profileName: "Student Badges",
    description: "This is a description of student badges.",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 467,
    lastUpdated: new Date("Sep 15, 2023").getTime(),
  },
  {
    id: "3",
    profileName: "Student Clubs",
    description: "This is a description.",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 467,
    lastUpdated: new Date("Sep 09, 2023").getTime(),
  },
  {
    id: "4",
    profileName: "School Academy",
    description: "This is a description.",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 189,
    lastUpdated: new Date("Aug 12, 2023").getTime(),
  },
  {
    id: "5",
    profileName: "Academy Badges",
    description: "This is a description.",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 156,
    lastUpdated: new Date("Aug 09, 2023").getTime(),
  },
  {
    id: "6",
    profileName: "Academy Badges",
    description: "This is a description.",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 98,
    lastUpdated: new Date("Jul 21, 2023").getTime(),
  },
  {
    id: "7",
    profileName: "School District",
    description: "This is a description.",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 78,
    lastUpdated: new Date("Jul 05, 2023").getTime(),
  },
  {
    id: "8",
    profileName: "Academic",
    description: "This is a description.",
    DID: "did:skillquiver:5E2GtCumaqgkRQHGf9FXUb6Sibge6YZmvvJoUbJyA9mJh2ZjzB8w",
    credentialsIssued: 56,
    lastUpdated: new Date("Jun 28, 2023").getTime(),
  },
  {
    id: "9",
    profileName: "Badges",
    description: "This is a description.",
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
            className="mr-3 h-10 w-10"
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
    cell: ({ getValue }) => {
      const did = getValue() as string;
      const truncatedDidLg = `${did.substring(0, 40)}...`;
      const truncatedDidMd = `${did.substring(0, 20)}...`;
      const truncatedDidSm = `${did.substring(0, 10)}...`;

      return (
        <>
          <span className="hidden 2xl:inline">{did}</span>
          <span className="hidden xl:inline 2xl:hidden">{truncatedDidLg}</span>
          <span className="hidden md:inline xl:hidden">{truncatedDidMd}</span>
          <span className="inline md:hidden">{truncatedDidSm}</span>
        </>
      );
    },
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
            <DropdownMenuItemNoPropagation>
              <IssuerEdit issue={issue} />
            </DropdownMenuItemNoPropagation>
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
