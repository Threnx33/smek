import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { useState } from "react";
import { IssuerEditForm } from "./issuerEditForm";
import { Issue } from "../data";

type IssueEditProps = {
  issue: Issue;
};

export function IssuerEdit({ issue }: IssueEditProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <DropdownMenuItem
          onSelect={(e) => {
            e.preventDefault();
          }}
        >
          Update DID
        </DropdownMenuItem>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-bold text-2xl ">
            Edit Issuer Profile
          </SheetTitle>
        </SheetHeader>

        <IssuerEditForm issue={issue} />
      </SheetContent>
    </Sheet>
  );
}
