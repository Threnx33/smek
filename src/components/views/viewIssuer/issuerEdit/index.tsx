import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { IssuerEditForm } from "./issuerEditForm";
import { Issue } from "../data";
import { DropdownMenuItemNoPropagation } from "@/components/reusables/dropdownMenuItemNoPropagation";

type IssueEditProps = {
  issue: Issue;
};

export function IssuerEdit({ issue }: IssueEditProps) {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <span>Update DID</span>
      </SheetTrigger>
      <SheetContent className="w-full overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="text-2xl font-semibold">
            Edit Issuer Profile
          </SheetTitle>
        </SheetHeader>

        <IssuerEditForm issue={issue} />
      </SheetContent>
    </Sheet>
  );
}
