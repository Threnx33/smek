import { ColumnDef } from "@tanstack/react-table";
import { MoreHorizontal } from "lucide-react";

import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export type TeamMemberRole = "Team owner" | "Member";

export type TeamMember = {
  name: string;
  imgSrc: string;
  email: string;
  role: TeamMemberRole;
};

export const TEAMS: TeamMember[] = [
  // {
  //   name: "Theo Edwards",
  //   imgSrc: "",
  //   email: "theoedwards@gmail.com",
  //   role: "Team owner",
  // },
  // {
  //   name: "Jade Davinson",
  //   imgSrc: "",
  //   email: "jadedavinson@gmail.com",
  //   role: "Member",
  // },
  // {
  //   name: "Anna Whales",
  //   imgSrc: "",
  //   email: "annawhales@gmail.com",
  //   role: "Member",
  // },
  // {
  //   name: "Dave Johanson",
  //   imgSrc: "",
  //   email: "davejohanson@gmail.com",
  //   role: "Member",
  // },
  // {
  //   name: "John Peterson",
  //   imgSrc: "",
  //   email: "johnpeterson@gmail.com",
  //   role: "Member",
  // },
];

export const TEAMS_COLUMNS: ColumnDef<TeamMember>[] = [
  {
    accessorKey: "name",
    header: "Name",
    cell: ({ row }) => {
      const name = row.getValue("name") as string;
      const names = name.split(" ");
      return (
        <span className="flex flex-row items-center ">
          <div className="mr-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-500">
            <span className="text-lg font-medium text-white">
              {names[0][0] + names[1][0]}
            </span>
          </div>
          {row.getValue("name")}
        </span>
      );
    },
  },
  {
    accessorKey: "email",
    header: "Email",
  },
  {
    accessorKey: "role",
    header: "Role",
  },
  {
    id: "actions",
    cell: ({ row }) => {
      const member = row.original as TeamMember;
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
              <div className="text-cRed">Delete member</div>
            </DropdownMenuItemNoPropagation>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];
