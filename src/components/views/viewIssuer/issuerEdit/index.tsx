import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
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
