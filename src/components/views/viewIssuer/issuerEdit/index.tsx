import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { DropdownMenuItem } from "@/components/ui/dropdown-menu";
import { IssuerEditForm } from "./issuerEditForm";

export function IssuerEdit() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <DropdownMenuItem>Update DID</DropdownMenuItem>
      </SheetTrigger>
      <SheetContent className="w-1/2 overflow-auto">
        <SheetHeader className="mb-6">
          <SheetTitle className="font-bold text-2xl ">
            Edit Issuer Profile
          </SheetTitle>
        </SheetHeader>

        <IssuerEditForm />
      </SheetContent>
    </Sheet>
  );
}
